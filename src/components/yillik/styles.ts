







import styled from '@emotion/styled';


export const LoadingContainer = styled.div<{visibility:boolean}>`
visibility: ${({visibility})=>(visibility ? "visible" : "hidden")};
color: #00569c;
position: fixed;
flex:1;
left: 50%;
margin-top: 20%;
transform: translateX(-50%);
@media screen and (max-width: 480px){
    margin-top: 40%;
    left: 50%;
    transform: translateX(-50%);
    width: 250px;
}
`;

export const LoadingItem = styled.p`
font-size:3rem;

@media screen and (max-width: 480px){
    font-size: 1.6rem;
    
}
`;