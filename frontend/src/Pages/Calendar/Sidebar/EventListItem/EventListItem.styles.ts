import styled from 'styled-components';
import ButtonIcon from '../../../../Components/ButtonIcon';
import Device from '../../../../Core/Device';
import { Mobile } from '../../../../Core/Responsive';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
`;

export const Text = styled.span`
    margin: auto 0;
    ${Mobile`font-size: 18px;`}
`;

export const Actions = styled.div`
    display: flex;
`;

export const Info = styled(ButtonIcon).attrs({
    name: 'info',
    color: 'gray',
    size: Device.isMobile ? 25 : 15,
    buttonSize: Device.isMobile ? 40 : 30
})`
    margin: 0 5px;
`;

export const Edit = styled(ButtonIcon).attrs({
    name: 'edit',
    color: 'gray',
    size: Device.isMobile ? 25 : 15,
    buttonSize: Device.isMobile ? 40 : 30
})`
    margin: 0 5px;
`;

export const Delete = styled(ButtonIcon).attrs({
    name: 'close',
    color: 'gray',
    size: Device.isMobile ? 25 : 15,
    buttonSize: Device.isMobile ? 40 : 30
})`
    margin: 0 5px;
`;
