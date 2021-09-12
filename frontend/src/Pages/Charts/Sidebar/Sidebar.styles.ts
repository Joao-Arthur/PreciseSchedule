import styled, { css } from 'styled-components';
import Responsive from '../../../Core/Responsive';
import ButtonBase from '../../../Components/Button';
import ButtonIcon from '../../../Components/ButtonIcon';
import Device from '../../../Core/Device';

const openContainer = css`
    width: ${Responsive`400px``100vw`};
    ${Responsive`border-left: 1px solid lightgray;``background-color: white;`}
`;

const closedContainer = css`
    width: 0px;
    border-left: none;
`;

type containerProps = {
    open: boolean;
};

export const Container = styled.div<containerProps>`
    display: flex;
    overflow: hidden;
    transition: width 0.6s ease;
    flex: 0 0 auto;
    ${({ open }) => (open ? openContainer : closedContainer)}
`;

export const Content = styled.div`
    flex: 0;
    display: flex;
`;

export const SubContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const Title = styled.span`
    text-align: center;
    padding: 0px;
    font-size: ${Responsive`25``28`}px;
    padding: 15px;
    margin-top: auto;
    margin-bottom: auto;
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
    size: Device.isMobile ? 30 : 20,
    color: 'gray',
    buttonSize: Device.isMobile ? 50 : 40
})`
    margin: 10px;
`;
