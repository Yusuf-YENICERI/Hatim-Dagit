








import React, { useRef, useState, useContext, useEffect } from 'react';
import { createStyles, Table, Checkbox, ScrollArea, Group, Avatar, Text, Title, ActionIcon } from '@mantine/core';
import close from "icons/close.svg";
import { useYillikTable, yillikTableActions } from 'features/yillikTable';
import { useDispatch } from 'react-redux';
import { DataServiceContext, localDatabase } from "backend";
import { showNotification } from '@mantine/notifications';


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


export default function TableSelection({ data, howManyDays, totalKhatmsBeDistributed, startingDate, donerli, hatimData }) {


  if(data === undefined) {
    data = []
  };

  const dataService = useContext( DataServiceContext );
  

  const { classes, cx } = useStyles();
  const {visible, subKey, partNo} = useYillikTable();
  
  const dispatch = useDispatch();
  
  const [selection, setSelection] = useState([]);
  const toggleRow = async (id) => {

    if(localDatabase.partExists(partNo, subKey).data == false){
      showNotification({
        title: 'Uyarı',
        message: 'Lütfen bu Cüzü alın, aldıktan sonra işaretlemeye başlayabilirsiniz!',
        color: 'red',
        id: 'scroll-down'
      })
      return;
    }

    let result;
    if(selection.includes(id)){
      result = await dataService.markChart({subKey: subKey, partNo: partNo, itemNo: id, value: false})
    }else{
      result = await dataService.markChart({subKey: subKey, partNo: partNo, itemNo: id, value: true})
    }

    if(result != undefined && result.error == undefined){
      setSelection((current) =>
        current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
      );        
    }
  }
  const toggleAll = () =>
    setSelection((current) => (current.length === data.length ? [] : data.map((item) => item.id)));



  let counter = partNo-1;
  let dayIterator = new Date(startingDate);
  for (let i = 0; i < totalKhatmsBeDistributed; i++) {
    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }
    data[i] = {id: i, job:dayIterator.toLocaleDateString(navigator.language, options).toString(), email: donerli ? `${(counter%30)+1}. Cüz` : `${partNo}. Cüz`}
    dayIterator.setDate(dayIterator.getDate()+Number(howManyDays));
    data[i].job2 = dayIterator.toLocaleDateString(navigator.language, options);
    counter++;
  }
  
  const rows = data.map((item) => {
    const selected = selection.includes(item.id.toString());
    return (
      <tr key={item.id} style={{backgroundColor: 'white'}} className={cx({ [classes.rowSelected]: selected })}>
        <td>
          <Checkbox
            checked={selection.includes(item.id.toString())}
            onChange={() => toggleRow(item.id.toString())}
            transitionDuration={0}
          />
        </td>
        {/* <td >
            <Text size="xs" weight={500}>
              {item.name}
            </Text>
        </td> */}
        <td ><div>{item.job}<br/>{item.job2}</div></td>
        <td >{item.email}</td>
      </tr>
    );
  });

  const chartOperation = async () => {

    let newSelection = []

    const result =  await dataService.fetchChart({subKey:subKey, partNo:partNo});
    const charts =  result.data;

    if(charts != undefined){
        Object.keys(charts).map(itemKey => {
          if(charts[itemKey]){
            newSelection = [...newSelection, itemKey]
          }
        })
    }

    setSelection(newSelection);
  }

  const warningForOnce = () => {
    if(partNo != 0 && localDatabase.doesWarningExists(`yillikHatimBeta`).data == undefined){
      localDatabase.showAndMarkWarning(`Tablo online olarak çalışmaktadır. İşaretlenen tikler herkes tarafından görülmektedir.`, `yillikHatimBeta`);
    }
  }

  useEffect(()=>{

    chartOperation();
    warningForOnce();
  
  }, [partNo])

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
    <Title align="center" m="xl" style={{fontFamily: 'Righteous'}}>Yıllık Hatim Çizelgesi</Title>

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
            {/* <th>Gün</th> */}
            <th>Tarih</th>
            <th>Cüz</th>

          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
    </div>
  );
}
