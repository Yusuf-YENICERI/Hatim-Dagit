






import React from 'react'
import styled from '@emotion/styled'
import Part from './Part'


const PWCContainer = styled.div``

const PWCTemplate = styled.div`
    display: flex;
`

const ChartTemplate = styled.div`
    padding: 5px;
`

const PartWithChart = ({no}: {no:number}) => {
  return (
    <PWCContainer>
        <PWCTemplate>
            <Part no={no}/>
            <ChartTemplate>Çizelgeyi Görüntüle</ChartTemplate>
        </PWCTemplate>
    </PWCContainer>
  )
}

export default PartWithChart