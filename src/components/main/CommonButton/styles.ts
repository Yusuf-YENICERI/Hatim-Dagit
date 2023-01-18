






import styled from 'styled-components'

export const RespondContainer = styled.div`
background-color: #91ffbb;

@media screen and (max-width: 480px){
}
`
export const RespondInnerContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;

@media screen and (max-width: 480px){
    font-size:1rem; 
    display: flex;
flex-direction: column;
text-align:center;
}
`
export type ResponseItemType = {id?:string, onClick: ()=>void}

export const ResponseItem = styled.div<ResponseItemType>`
overflow: hidden;
position: relative;
padding: 20px;
margin: 0 10px;
height: 100px;
border-radius: 10px;
background-color: #04d654;
display: flex;
flex-direction: column;
text-align:center;
justify-content: center;
width: 200px;
box-shadow: -1px 24px 29px -8px rgba(0,0,0,1);
-webkit-box-shadow: -1px 24px 29px -8px rgba(0,0,0,1);
-moz-box-shadow: -1px 24px 29px -8px rgba(0,0,0,1);
transition: 0.5s all ease-in;


@media screen and (max-width: 480px){
    padding: 5px;
    height: 90px;
    margin: 10px 0px;
}

&:hover{
transform: scale(1.1);
transition: 0.5s all ease-in;
}
`

export const ResponseText = styled.div`
color:#000;
`