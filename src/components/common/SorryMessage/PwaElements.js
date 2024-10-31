//                       BİSMİLLAHİRRAHMANİRRAHİM

import styled, {keyframes} from 'styled-components';
import {Share} from '@styled-icons/ionicons-outline';

const LoadingLogoAnimation = keyframes`
    0%{
        transform: scaleY(0);
    }

    100%{
        transform: scaleY(1);
    }
`;

export const PwaContainer = styled.div`
    z-index: 998;
    position: fixed;
    height: 100%;
    width: 100%;
    flex-direction: column;
    border: 1px solid #33f57c;
    border-radius: 30px;
    margin-top: 10px;
    transform-origin: top;
    animation:  ${LoadingLogoAnimation} 1s ease;
    background-color: #33f57c;
`;

export const PwaIconContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex-grow: 1;
`;

export const PwaIcon = styled.img`
width: 30px;
margin-right: 20px;
`;

export const PwaTextContainer = styled.div`
text-align: center;
padding: 30px;
padding-top: 50px;
flex-grow: 3;
`;

export const PwaTextDefault = styled.p`
    font-size: 0.9rem;
    line-height: 30px;
`;

export const PwaTextStrong = styled.span`
    font-size: 1.1rem;
    font-weight: bolder;
    margin-left: 4px;
    margin-right: 4px;
`;

export const PwaAppleShareIcon = styled (Share)`
    color: #1c73ff;
    width: 30px;
    background-color: #91ffbb;
    border: 1px solid #91ffbb;
    border-radius: 5px;
    margin-left: 4px;
    margin-right: 4px;
`;
