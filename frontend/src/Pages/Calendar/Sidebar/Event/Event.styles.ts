import styled from 'styled-components';
import ButtonIcon from '../../../../Components/ButtonIcon';
import Device from '../../../../Core/Device';
import { Mobile } from '../../../../Core/Responsive';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
`;

export const Text = styled.span`
    margin: auto 0;
    ${Mobile`font-size: 18px;`}
`;

export const Actions = styled.div`
    display: flex;
`;

export const Close = styled(ButtonIcon).attrs({
    name: 'close',
    size: Device.isMobile ? 25 : 15,
    color: 'gray',
    buttonSize: Device.isMobile ? 40 : 30
})`
    margin: 0 5px;
`;

export const Edit = styled(ButtonIcon).attrs({
    name: 'edit',
    size: Device.isMobile ? 25 : 15,
    color: 'gray',
    buttonSize: Device.isMobile ? 40 : 30
})`
    margin: 0 5px;
`;
