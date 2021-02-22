import styled from 'styled-components';
import LinkBase from '../../Components/Core/Link';

export const Title = styled.h1`
    text-align: center;
`;

export const Label = styled.label`
    padding: 5px 0;
    font-size: 12px;
    font-weight: bold;
    color: #333;
`;

export const FieldContainer = styled.div`
    padding: 5px 0;
    display: flex;
    flex-direction: column;
`;

export const RedirectContainer = styled.div`
    padding: 10px;
    width: 25%;
    margin: 10px auto;
    border: 1px solid gray;
    border-radius: 4px;
`;

export const Link = styled(LinkBase)`
    &:hover {
        text-decoration: underline;
    }
`;
