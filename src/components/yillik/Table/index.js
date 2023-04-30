






import React, { useRef, useState } from 'react';
import { createStyles, Table, Checkbox, ScrollArea, Group, Avatar, Text, Title, ActionIcon } from '@mantine/core';
import close from "icons/close.svg";
import { useYillikTable, yillikTableActions } from 'features/yillikTable';
import { useDispatch } from 'react-redux';

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
  table:{
    backgroundColor: '#FFBF17',
    position: 'relative',
  },

  scrollArea:{
    marginTop: '80px',
    height: '250px',
  },

  base:{
    position: 'fixed',
    height: '100%',
    width: '100%',
    backgroundColor: '#91ffbb',
  },
}));


export default function TableSelection({ data }) {


  if(data === undefined) {
    data = []
  };

  

  const { classes, cx } = useStyles();
  const {visible, subKey, partNo} = useYillikTable();
  
  const dispatch = useDispatch();
  
  const [selection, setSelection] = useState(['1']);
  const toggleRow = (id) =>
    setSelection((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  const toggleAll = () =>
    setSelection((current) => (current.length === data.length ? [] : data.map((item) => item.id)));


  let counter = partNo;
  let i = 0;
  for (; counter <= 30; i++) {
    data[i] = {id: counter, email: `${counter}. cüz`}
    counter++;
  }

  counter = 1;
  for(; counter < partNo; i++){
    data[i] = {id: counter, email: `${counter}. cüz`}
    counter++;
  }
  
  const rows = data.map((item) => {
    const selected = selection.includes(item.id);
    return (
      <tr key={item.id} style={{backgroundColor: 'white'}} className={cx({ [classes.rowSelected]: selected })}>
        <td>
          <Checkbox
            checked={selection.includes(item.id)}
            onChange={() => toggleRow(item.id)}
            transitionDuration={0}
          />
        </td>
        <td >
            <Text size="xs" weight={500}>
              {item.name}
            </Text>
        </td>
        <td >{item.email}</td>
        <td >{item.job}</td>
      </tr>
    );
  });

  return (
    <div  className={classes.base} style={{zIndex:visible ? 100 : -10}}>



    <div style={{display: 'flex', justifyContent: 'end', margin: '20px'}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <ActionIcon onClick={()=>{
                dispatch(yillikTableActions.changeVisibility(false))
            }} >
                <img src={close}></img>
            </ActionIcon>
            <Text style={{fontFamily: 'Righteous'}} size="xs">Kapat</Text>
        </div>
    </div>
    <Title align="center" m="xl" style={{fontFamily: 'Righteous'}}>Ramazan Çizelgesi</Title>

    <ScrollArea  type="always" scrollbarSize={20} className={classes.scrollArea} mx="20px">
      <Table  className={classes.table}  verticalSpacing="xs">
        <thead style={{position: 'sticky'}}>
          <tr>
            <th style={{ width: 40 }}>
              <Checkbox
                onChange={toggleAll}
                checked={selection.length === data.length}
                indeterminate={selection.length > 0 && selection.length !== data.length}
                transitionDuration={0}
              />
            </th>
            <th>Gün</th>
            <th>Cüz</th>
            <th>Tarih</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
    </div>
  );
}
