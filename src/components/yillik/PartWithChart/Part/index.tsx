






import React from 'react'
import styled from '@emotion/styled'

const PartContainer = styled.div`
  padding: 20px;
  border: 1px solid transparent;
  border-radius: 5px;
`;

const PartTemplate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Part = ({no}:{no:number}) => {
  return (
    <PartContainer>
      <PartTemplate>
          {no}
      </PartTemplate>
    </PartContainer>
  )
}

export default Part