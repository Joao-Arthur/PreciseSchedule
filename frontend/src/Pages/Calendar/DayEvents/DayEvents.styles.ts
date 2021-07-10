import styled from 'styled-components';
import MobileStyle from '../../../Core/MobileStyle';
import ButtonBase from '../../../Components/Button';
import ButtonIcon from '../../../Components/ButtonIcon';

type props = {
    open: boolean;
};

export const Container = styled.div<props>`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: width 0.6s ease;
    flex: 0 0 auto;

    ${({ open }) =>
        open
            ? `  
        min-width: 0px;
        width: 400px;
        border-left: 1px solid lightgray;
        ${MobileStyle`
        width: 100%;
        border: none;
        `}
    `
            : `
        width: 0px;
        border-left: none;
    `}

    ${MobileStyle`
        background-color: white;
       
    `}
`;

export const Title = styled.span`
    text-align: center;
    padding: 0px;
    font-size: 25px;
    padding: 15px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    margin: 5px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 5px;
    padding: 10px 0;
    border-top: 1px solid lightgray;
`;

export const Button = styled(ButtonBase)`
    width: 250px;
`;

export const Close = styled(ButtonIcon).attrs({
    name: 'close',
    size: 20,
    color: 'gray',
    design: 'button',
    buttonSize: 40
})`
    margin: 10px;
`;
