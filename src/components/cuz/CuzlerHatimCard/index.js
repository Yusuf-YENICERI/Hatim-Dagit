import React from 'react';
import {
  createStyles,
  ThemeIcon,
  Progress,
  Text,
  Group,
  Badge,
  Paper,
  Button,
} from '@mantine/core';
import {Book, Logout, Pencil} from 'tabler-icons-react';
import {useDispatch} from 'react-redux';
import {editModalCuzlerActions} from '../../../features/editCuzlerModal';
import {
  yesNoDialogAlertActions,
  yesNoDialogAlertFunctions,
} from '../../../features/yesNoDialogAlert';
import {useHistory} from 'react-router-dom';
import {extractKey} from '../../../common';
import localDb from '@yusuf-yeniceri/easy-storage';
import Language from '../../../strings';

const ICON_SIZE = 60;

const useStyles = createStyles (theme => ({
  card: {
    position: 'relative',
    overflow: 'visible',
    padding: theme.spacing.xl,
    paddingTop: theme.spacing.xl * 1.5 + ICON_SIZE / 3,
    marginBottom: '0px',
    width: '75%',
    wordBreak: 'break-all',

    '@media (min-width: 480px)': {
      width: '30%',
    },
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

  editButton: {
    position: 'absolute',
    right: '10px',
    top: '4px',
    // boxShadow: ' inset 2px 2px 2px 0px #ABABAB, inset -2px -2px 2px 0px #ABABAB',
    // border: 'none',
    // outline: 'none',
  },

  deleteButton: {
    position: 'absolute',
    left: '30px',
    top: '4px',
  },
}));

const BadgeSpecifier = ({otherCaseDuaLeftDays, _duaLeftDays}) => {
  switch (otherCaseDuaLeftDays) {
    case 0:
      return (
        <Badge size="sm" color="green" variant="filled">
          {' '}
          {Language['/cuz'].CuzlerHatimCard.dua[0]}
          {' '}
          {_duaLeftDays}
          {' '}
          {Language['/cuz'].CuzlerHatimCard.dua[1]}
        </Badge>
      );
    case 1:
      return (
        <Badge size="sm" color="green" variant="filled">
          {Language['/cuz'].CuzlerHatimCard.dua[2]}
        </Badge>
      );
    case 2:
      return (
        <Badge size="sm" color="green" variant="filled">
          {Language['/cuz'].CuzlerHatimCard.dua[3]}
        </Badge>
      );
    default:
      return (
        <Badge size="sm" color="green" variant="filled">
          {Language['/cuz'].CuzlerHatimCard.dua[4]}
          {' '}
          {_duaLeftDays}
          {' '}
          {Language['/cuz'].CuzlerHatimCard.dua[5]}
        </Badge>
      );
      break;
  }
};

export default function StatsCard({
  header,
  description,
  progress,
  leftCuzs,
  duaLeftDays,
  yesHandler,
  toggleYesHandler,
  noHandler,
  toggleNoHandler,
  setYesHandlerStateParameters,
}) {
  const {classes} = useStyles ();
  const dispatch = useDispatch ();
  const history = useHistory ();

  let otherCaseDuaLeftDays = 0; // 3 state, 0,1,2, 0 means be made
  let keeperDuaLeftDays = duaLeftDays;

  let arrLeftDays = duaLeftDays.replaceAll ('/', '-').split ('-').reverse ();
  duaLeftDays = new Date (
    arrLeftDays[0],
    parseInt (arrLeftDays[1]) - 1,
    arrLeftDays[2]
  );
  let _currentDate = new Date ();

  let _duaLeftDays;
  if (duaLeftDays > _currentDate) {
    _duaLeftDays =
      Math.round ((duaLeftDays - _currentDate) / (1000 * 60 * 60 * 24)) + 1;
  } else if (
    Math.round ((duaLeftDays - _currentDate) / (1000 * 60 * 60 * 24)) + 1 <=
    -1
  ) {
    otherCaseDuaLeftDays = 1; // already made
  } else {
    otherCaseDuaLeftDays = 2; // today
  }

  const yesHandlerPayload = () => {
    let localStorageCuzKeylerArr = JSON.parse (
      localStorage.getItem ('CuzKeyler')
    );
    if (localStorageCuzKeylerArr == null) {
      alert ('Hata var!');
      return;
    }
    let index = localStorageCuzKeylerArr.findIndex (
      C => C == extractKey ().replace ('/', '')
    );
    localStorageCuzKeylerArr.splice (index, 1);
    localStorage.setItem (
      'CuzKeyler',
      JSON.stringify (localStorageCuzKeylerArr)
    );

    let localStorageCuzKeylerArrBaslik = JSON.parse (
      localStorage.getItem ('CuzKeylerBaslik')
    );
    localStorageCuzKeylerArrBaslik.splice (index, 1);
    localStorage.setItem (
      'CuzKeylerBaslik',
      JSON.stringify (localStorageCuzKeylerArrBaslik)
    );

    dispatch (yesNoDialogAlertFunctions.deleteHatim ());
    history.push ('/');
  };

  const noHandlerPayload = () =>
    dispatch (yesNoDialogAlertActions.toggleVisibility ());

  let adminToken = localDb.ref ('Hatim/adminToken').get ();
  let tokenExists;
  if (Object.keys (adminToken).length == 0) {
    tokenExists = 0;
  } else {
    tokenExists = adminToken.filter (
      token => Object.keys (token)[0] == extractKey ().replace ('/', '')
    ).length;
  }

  return (
    <Paper
      m="11%"
      my="0"
      radius="md"
      withBorder
      className={classes.card}
      mt={ICON_SIZE / 1.5}
    >

      {tokenExists != 0 &&
        <Button
          className={classes.deleteButton}
          color="red"
          leftIcon={<Logout width="15px" />}
          radius="xl"
          size="xs"
          styles={{
            label: {marginLeft: '-7px'},
            root: {marginLeft: '-20px', padding: '4px', fontSize: '0.7rem'},
            outline: {padding: '30px'},
          }}
          onClick={() => {
            dispatch (
              yesNoDialogAlertActions.changeText (
                Language['/cuz'].DeleteKhatmAlert.Question
              )
            );
            toggleYesHandler (yesHandlerPayload);
            toggleNoHandler (noHandlerPayload);
            setYesHandlerStateParameters (null);
            dispatch (yesNoDialogAlertActions.toggleVisibility ());
          }}
          id="deleteHatim"
        >
          {Language['/cuz'].CuzlerHatimCard.deleteHatim}
        </Button>}

      <ThemeIcon
        color="green"
        className={classes.icon}
        size={ICON_SIZE}
        radius={ICON_SIZE}
      >
        <Book size={34} />
      </ThemeIcon>

      {tokenExists != 0 &&
        <Button
          className={classes.editButton}
          variant="outline"
          color="blue"
          leftIcon={<Pencil width="15px" />}
          radius="xl"
          size="xs"
          styles={{
            label: {marginLeft: '-7px'},
            root: {marginLeft: '-20px', padding: '4px', fontSize: '0.7rem'},
            outline: {padding: '30px'},
          }}
          onClick={() => {
            dispatch (editModalCuzlerActions.changeHeader (header));
            dispatch (editModalCuzlerActions.changeDescription (description));
            dispatch (editModalCuzlerActions.changeDate (keeperDuaLeftDays));
            dispatch (editModalCuzlerActions.toggleVisibility ());
          }}
        >
          {' '}{Language['/cuz'].CuzlerHatimCard.changeHatim}
        </Button>}

      <Text align="center" weight={700} className={classes.title}>
        {header.split ('\n').map (str => <p>{str}</p>)}
      </Text>
      <Text
        sx={theme => ({
          color: theme.colors.dark[3],
        })}
        align="center"
        size="sm"
        mt="10px"
      >
        {description != null &&
          description.split ('\n').map (str => <p>{str}</p>)}
      </Text>

      <Group position="apart" mt="xl">
        <Text size="sm" color="dimmed">
          {Language['/cuz'].CuzlerHatimCard.takenParts}
        </Text>
        <Text size="sm">
          %{(Math.round (progress * 100) / 100).toFixed (1)}
        </Text>
      </Group>

      <Progress value={progress} mt={5} color="green" />

      <Group position="apart" mt="md">
        <Badge size="sm" color="green" variant="filled">
          {leftCuzs}  {Language['/cuz'].CuzlerHatimCard.leftParts}
        </Badge>
        <BadgeSpecifier
          otherCaseDuaLeftDays={otherCaseDuaLeftDays}
          _duaLeftDays={_duaLeftDays}
        />
      </Group>
    </Paper>
  );
}
