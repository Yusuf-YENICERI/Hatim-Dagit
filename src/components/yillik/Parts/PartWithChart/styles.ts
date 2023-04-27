







import styled from "@emotion/styled"

export const ResponseItem = styled.div<{bgColor:boolean}>`
padding: 20px;
margin: 10px;
height: 90px;
border-radius: 10px;
background-color: ${({bgColor}) => (bgColor ? "#04d654" : "#FFBF17")} ;
/* #04d654; */
display: flex;
flex-direction: column;
text-align:center;
justify-content: center;
width: 105px;
box-shadow: -1px 24px 29px -8px rgba(0,0,0,1);
-webkit-box-shadow: -1px 24px 29px -8px rgba(0,0,0,1);
-moz-box-shadow: -1px 24px 29px -8px rgba(0,0,0,1);
transition: 0.5s all ease-in;
cursor: pointer;


@media screen and (max-width: 480px){
    padding: 5px;
    height: 70px;
    margin: 0px 6px;
}

&:hover{
transform: scale(1.1);
transition: 0.5s all ease-in;
}
`

export const ResponseLogo = styled.img<{exist:boolean, isSrc:boolean}>`
height: ${({exist}) => (exist ? '50px' : '0px')};
src: ${({isSrc}) => isSrc};

`

export const ResponseText = styled.div`
overflow-wrap: break-word;
font-size: 1rem;
padding: 3px;
color:${({color})=>(color ? "#fff" : "#000")};
`