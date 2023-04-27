







import React from 'react'
import styled from '@emotion/styled'
import Part from './Part'
import { ResponseItem } from './styles'
import { cuzModalActions } from 'features/cuzModal'
import { useDispatch } from 'react-redux'


const PWCContainer = styled.div``

const PWCTemplate = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 3px 0 3px;
`

const ChartTemplate = styled.div<{bgColor: boolean}>`
  margin-top: 20px;
  text-align: center;
  background-color: ${({bgColor}) => (bgColor ? "#04d654" : "#FFBF17")} ;
  border-radius : 10px;
`

const PartWithChart = ({data, no, subKey}:{data:{isTaken: boolean, name: string, charts?: any}, no:number, subKey: string}) => {
  
  const dispatch = useDispatch()
  
  return (
    <PWCTemplate>
      <ResponseItem  bgColor={data.isTaken} onClick={()=>{
        if(data.isTaken == false){
          dispatch(cuzModalActions.changeTakingPart(true));
          dispatch(cuzModalActions.changeSubKey(subKey))
          dispatch(cuzModalActions.changeName(data.name))
          dispatch(cuzModalActions.changeCuzNo(no))
          dispatch(cuzModalActions.toggleVisibility())
        }else{
          dispatch(cuzModalActions.changeTakingPart(false));
          dispatch(cuzModalActions.changeSubKey(subKey))
          dispatch(cuzModalActions.changeName(data.name))
          dispatch(cuzModalActions.changeCuzNo(no))
          dispatch(cuzModalActions.toggleVisibility())
        }
      }}>
            <Part data={data} no={no}/>
      </ResponseItem >

      <ChartTemplate bgColor={data.isTaken}>Çizelgeyi Görüntüle</ChartTemplate>

    </PWCTemplate>
  )
}

export default PartWithChart