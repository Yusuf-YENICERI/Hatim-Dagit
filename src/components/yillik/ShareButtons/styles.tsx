







import styled from "@emotion/styled"

export const CopyContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:center;
    width: 90px;
    position: fixed;
    bottom: 10%;
    right: 3%;
    background-color: rgb(192, 252, 208, 0.5);
    border-radius: 20px;
    /* border: solid;
    border-color: black;
    border-width: 1px; */
transition: 0.5s all ease-in;
padding: 8px;
z-index: 10;

@media screen and (max-width: 960px){
    bottom: 5%;
    right: 12%;
    position: fixed;
    }


`

export const CopyItem = styled.p`
    font-size: 0.7rem;
`

export const CopyIcon = styled.img<{iconSize:string}>`
width: ${({iconSize}) => (iconSize)};
`

export const ShareContainer = styled.div`
    flex-direction: column;
    justify-content:space-between;
    align-items:center;
    width: 90px;
    position: fixed;
    bottom: 23%;
    right: 3%;
    background-color: rgb(192, 252, 208, 0.5);
    border-radius: 20px;
    /* border: solid;
    border-color: black;
    border-width: 1px; */
transition: 0.5s all ease-in;
padding: 8px;
    display: none;
    z-index:10;

@media screen and (max-width: 960px){
    bottom: 17%;
    right: 12%;
    position: fixed;
    display:flex;
    }


`

export const ShareItem = styled.p`
    font-size: 0.7rem;
`

export const ShareIcon = styled.img<{iconSize: string}>`
width: ${({iconSize}) => (iconSize)};
`