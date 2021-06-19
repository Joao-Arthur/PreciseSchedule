import styled from 'styled-components';
import ButtonBase from '../../Components/Button';
import ButtonIcon from '../../Components/ButtonIcon';

type containerProps = {
    open: boolean;
};

export const Container = styled.div<containerProps>`
    height: calc(100vh - 43px);
    overflow: hidden;
    transition: width 0.6s ease;
    flex: 0 0 auto;
    width: ${({ open }) => (open ? '500' : '0')}px;
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
    border-bottom: 1px solid lightgray;
    margin: 5px;
    padding: 10px 0;
`;

export const Button = styled(ButtonBase)`
    width: 250px;
`;

export const Close = styled(ButtonIcon).attrs({
    name: 'close',
    size: 20,
    color: 'gray'
})`
    height: 40px;
    width: 40px;
    margin: 10px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
        background-color: var(--lightGrey);
        border: 1px solid lightgray;
    }

    :active {
        background-color: #e8e8e8;
        border: 1px solid lightgray;
    }
`;
