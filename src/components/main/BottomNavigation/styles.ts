





import styled from 'styled-components'


export const Container = styled.div`
    position: fixed;
    bottom: 0;
    background-color: #04d654;
    width: 100%;
    height: 75px;
`;

export const Template = styled.div`
display: flex;
`;



export const HatimsContainer = styled.div`
    width: 100%;
`

export const HatimsTemplate = styled.div`
    display: flex;
    justify-content: center;
`;

export const HatimsWrapper = styled.div<{active: boolean}>`
    margin: 10px;
    padding: 3px;
    border-radius: 6px;
    opacity: ${({active}) => active ? 0.4 : 1};

`;

export const HatimsIcon = styled.div`
    display: flex ;
    justify-content: center;
`

export const HatimsText = styled.span`
    font-size: 0.9em;
`

export const Seperator = styled.div`
    border-right: 1px solid #000;
`

export const MyInfosContainer = styled.div`
    width: 100%;
`

export const MyInfosTemplate = styled.div`
    display: flex;
    justify-content: center;
`;

export const MyInfosWrapper = styled.div<{active: boolean}>`
    margin: 10px;
    opacity: ${({active}) => active ? 0.4 : 1};
`;

export const MyInfosIcon = styled.div`
    display: flex ;
    justify-content: center;
`

export const MyInfosText = styled.span`
    font-size: 0.9em;
`