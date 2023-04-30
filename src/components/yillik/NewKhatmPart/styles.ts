








import styled from "@emotion/styled";
import { Add } from "@styled-icons/ionicons-outline";

export const YeniHatimContainer = styled.div`
`;

export const YeniHatimButton = styled.button`
    margin: 10px;
    border: 4px solid #00ba47;
    border-radius: 10px;
    padding: 10px;
    background-color: transparent;
    position: relative;
    cursor: pointer;

    @media screen and (max-width: 480px){
        margin: 40px;
    }
`;

export const YeniHatimText = styled.span`
    color: #00ba47;
    margin-left: 10px;
    
    ::before{
       content : '';
       position: absolute;
       left: 40px;
       width: 1px;
       height: 30px;
       background-color: #00ba47;
    }

`;

export const YeniHatimIcon = styled(Add)`
    width: 30px;
    color: #00ba47;

    
`;