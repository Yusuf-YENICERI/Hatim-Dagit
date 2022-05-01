




import React from 'react';
import { createStyles, ThemeIcon, Progress, Text, Group, Badge, Paper } from '@mantine/core';
import { Book } from 'tabler-icons-react';

const ICON_SIZE = 60;

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    overflow: 'visible',
    padding: theme.spacing.xl,
    paddingTop: theme.spacing.xl * 1.5 + ICON_SIZE / 3,
    marginBottom: '0px',
  },

  icon: {
    position: 'absolute',
    top: -ICON_SIZE / 3,
    left: `calc(50% - ${ICON_SIZE / 2}px)`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
  },
}));

const BadgeSpecifier = ({otherCaseDuaLeftDays, _duaLeftDays}) => {
  switch (otherCaseDuaLeftDays) {
    case 0:
      return <Badge size="sm" color="green" variant="filled" >Duaya {_duaLeftDays} gün kaldı</Badge>
    case 1:
      return <Badge size="sm" color="green" variant="filled" >Duası yapıldı</Badge> 
    case 2:
      return <Badge size="sm" color="green" variant="filled" >Duası bugün yapılacak!</Badge>
    default:
      return <Badge size="sm" color="green" variant="filled" >Duaya {_duaLeftDays} gün kaldı</Badge>
      break;
  }
}

export default function StatsCard({header, description, progress, leftCuzs, duaLeftDays}) {
  const { classes } = useStyles();

  let otherCaseDuaLeftDays = 0; // 3 state, 0,1,2, 0 means be made

  let arrLeftDays = duaLeftDays.replaceAll("/","-").split("-").reverse();
  duaLeftDays = new Date(arrLeftDays[0], parseInt(arrLeftDays[1])-1, arrLeftDays[2])
  let _currentDate = new Date();

  let _duaLeftDays;
  if(duaLeftDays > _currentDate){
    _duaLeftDays = Math.round((duaLeftDays-(_currentDate))/(1000*60*60*24)) + 1;
  }
  else if((Math.round((duaLeftDays-(_currentDate))/(1000*60*60*24)) + 1) <= -1){
       otherCaseDuaLeftDays = 1; // already made
  }else{
  otherCaseDuaLeftDays = 2; // today
  }

  return (
    <Paper m="11%" my="0" radius="md" withBorder className={classes.card} mt={ICON_SIZE / 1.5}>
      <ThemeIcon color="green" className={classes.icon} size={ICON_SIZE} radius={ICON_SIZE}>
        <Book size={34} />
      </ThemeIcon>

      <Text align="center" weight={700} className={classes.title}>
        {header}
      </Text>
      <Text sx={theme => ({
          color: theme.colors.dark[3],
      })} align="center" size="sm" mt="10px">
        {description.split('\n').map(str => <p>{str}</p>)}
      </Text>

      <Group position="apart" mt="xl">
        <Text size="sm" color="dimmed">
          Alınan cüzler
        </Text>
        <Text size="sm" >
          %{(Math.round(progress * 100) / 100).toFixed(1)}
        </Text>
      </Group>

      <Progress value={progress} mt={5} color="green" />

      <Group position="apart" mt="md">
        <Badge size="sm" color="green" variant="filled" >{leftCuzs} cüz kaldı</Badge>
        <BadgeSpecifier otherCaseDuaLeftDays={otherCaseDuaLeftDays} _duaLeftDays={_duaLeftDays} />
      </Group>
    </Paper>
  );
}