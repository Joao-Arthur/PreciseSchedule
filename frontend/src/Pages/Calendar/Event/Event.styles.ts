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
    color: 'gray',
    design: 'button'
})`
    height: 30px;
    width: 30px;
`;

export const Remove = styled(ButtonIcon).attrs({
    name: 'close',
    size: 15,
    color: 'gray',
    design: 'button'
})`
    height: 30px;
    width: 30px;
`;
