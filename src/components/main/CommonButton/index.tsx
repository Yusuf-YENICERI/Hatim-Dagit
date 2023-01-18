







import React from 'react'
import { RespondContainer, RespondInnerContainer, ResponseItem, ResponseText } from './styles'

const CommonButton = ({text, onClick}:{text:string, onClick:any}) => {
  return (
    <RespondContainer>  
                           <RespondInnerContainer >
                                    <ResponseItem onClick={onClick}>
                                        <ResponseText>
                                        {text}
                                        </ResponseText>
                                    </ResponseItem>
                            </RespondInnerContainer>
            </RespondContainer>
  )
}

export default CommonButton