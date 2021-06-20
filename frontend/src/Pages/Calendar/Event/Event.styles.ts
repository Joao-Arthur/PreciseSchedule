import styled from 'styled-components';
import ButtonIcon from '../../../Components/ButtonIcon';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
`;

export const Actions = styled.div`
    display: flex;
`;

export const Edit = styled(ButtonIcon).attrs({
    name: 'edit',
    size: 15,
    color: 'gray'
})`
    height: 30px;
    width: 30px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
        background-color: var(--lightGray);
        border: 1px solid lightgray;
    }

    :active {
        background-color: #e8e8e8;
        border: 1px solid lightgray;
    }
`;

export const Remove = styled(ButtonIcon).attrs({
    name: 'close',
    size: 15,
    color: 'gray'
})`
    height: 30px;
    width: 30px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
        background-color: var(--lightGray);
        border: 1px solid lightgray;
    }

    :active {
        background-color: #e8e8e8;
        border: 1px solid lightgray;
    }
`;
