import styled from 'styled-components';
import LinkBase from '../../Components/Link';
import Responsive from '../../Core/Responsive';

export const Container = styled.div`
    display: block;
    flex: 1 0 auto;
`;

export const Title = styled.h3`
    text-align: center;
    font-weight: normal;
    margin: 10px;
`;

export const Label = styled.label`
    padding: 5px 0;
    font-size: 12px;
    font-weight: bold;
    color: var(--darkerGray);
`;

export const FieldContainer = styled.div`
    padding: 5px 0;
    display: flex;
    flex-direction: column;
`;

export const RedirectContainer = styled.div`
    padding: 10px;
    width: ${Responsive`500px``80%`};
    margin: 10px auto;
    border: 1px solid gray;
    border-radius: 4px;
`;

export const Link = styled(LinkBase)`
    &:hover {
        text-decoration: underline;
    }
`;
