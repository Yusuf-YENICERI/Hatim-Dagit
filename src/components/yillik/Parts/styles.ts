







import styled from "@emotion/styled";
import { ChevronDown, ChevronUp } from "tabler-icons-react";



export const QuestionItem = styled.div`
    padding: 30px;
    font-size: 1.6rem;
    text-align: center;
    position: relative;
    color: #000000;
    

    @media screen and (max-width: 480px){
        font-size:1.6rem;
        padding-bottom: 0px;
    }
`

export const HatimIconContainer = styled.div`
color: black;
position: absolute;
right: 50px;
top: 20px;
border: 2px solid black;
border-radius: 20px;
padding: 5px;
z-index: 1;
box-shadow: 0px 6px 11px 0px rgba(0,0,0,0.51);
-webkit-box-shadow: 0px 6px 11px 0px rgba(0,0,0,0.51);
-moz-box-shadow: 0px 6px 11px 0px rgba(0,0,0,0.51);

`;

export const HatimIconText = styled.div`
position: relative;
font-size: 0.8rem;
margin-top: -15px;
`;

export const HideHatimIcon = styled(ChevronUp)`
width: 30px;
`;

export const ShowHatimIcon = styled(ChevronDown)`
width: 30px;

`;

export const HatimContainer = styled.div<{visibility:boolean}>`
    transform-origin: top;
    margin-top: 0px;
    transform: ${({visibility}) => !visibility ? "scaleY(0)" : "scaleY(1)"};
    height: ${({visibility}) => {
        if(!visibility){            
            return "0";
        }else{
            return "100%";
        }
    }};
    transition: height 0ms 1s ease, transform 1s 0ms ease;
    overflow: hidden;
`;

export const RespondContainer = styled.div<{visibility:boolean}>`
    visibility: ${({visibility}) => (visibility ? "visible" : "hidden")};
    background-color: #91ffbb;

    @media screen and (max-width: 480px){
    }
`

export const RespondOuterContainer = styled.div`
    padding: 10px;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (max-width: 480px){

    }
`

export const RespondInnerContainer = styled.div`
    padding: 50px;
    /* background-color: red; */
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly; */
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto auto auto auto ;
    grid-auto-flow: row;
    grid-row-gap: 30px;

    @media screen and (max-width: 480px){
        font-size:1rem;
        display: grid;
        grid-template-rows: auto auto auto auto auto auto auto auto auto auto ;
        grid-auto-flow: column;
    
        /* display: flex;
        flex-direction: column; */
        text-align:center;
    }

    @media screen and (max-width: 768px) and (min-width: 480px){
        grid-template-columns: auto auto auto auto ;
        grid-auto-flow: row;
    }

    @media screen and (max-width: 1240px) and (min-width: 768px){
        grid-template-columns: auto auto auto auto auto auto ;
        grid-auto-flow: row;
    }
`