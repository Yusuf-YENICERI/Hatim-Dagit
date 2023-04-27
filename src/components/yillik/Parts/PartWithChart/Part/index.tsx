






import React from 'react'
import styled from '@emotion/styled'

const PartContainer = styled.div`
  padding: 20px;
  border: 1px solid transparent;
  border-radius: 5px;
`;

const PartTemplate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const Part = ({data, no}:{data:{isTaken: boolean, name: string, charts?: any}, no:number}) => {
  return (
    <PartContainer>
      <PartTemplate>
          <span>
            {no}
          </span>
          <span style={{marginTop: '5px', color: data.isTaken ? "white": "black"}}>
            {data.name}
          </span>
      </PartTemplate>
    </PartContainer>
  )
}

export default Part