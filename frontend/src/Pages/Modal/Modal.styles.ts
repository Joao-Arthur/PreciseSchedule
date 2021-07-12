import styled from 'styled-components';
import ButtonBase from '../../Components/Button';
import Responsive, { Desktop } from '../../Core/Responsive';

export const Block = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
`;

export const Container = styled.div`
    position: absolute;
    ${Responsive`width: 500px``width: 100%`};
    ${Responsive`max-height: 80%``height: 100%`};

    background-color: white;
    ${Desktop`
        border: 1px solid lightgray;
        border-radius: 4px;
    `}
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    padding: 10px;
    border-bottom: 1px solid lightgray;
`;

export const Title = styled.h3`
    font-size: 25px;
    font-weight: normal;
    margin: 0;
    user-select: none;
`;

export const Content = styled.div`
    padding: 10px;
    flex: 1;
    overflow: auto;
`;

export const Footer = styled.div`
    padding: 10px;
    display: flex;
    ${Responsive`justify-content: flex-end;``flex-direction: column;`}
`;

export const Button = styled(ButtonBase)`
    ${Responsive`
        width: 150px;
        margin-left: 10px;
    ``
        margin: 5px 10px;
    `}
`;
