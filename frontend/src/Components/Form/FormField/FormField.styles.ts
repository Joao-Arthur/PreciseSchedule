import styled from 'styled-components';

export const Container = styled.div`
    padding: 5px 0;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 100px;
`;

export const Label = styled.label`
    padding: 5px 0;
    font-size: 12px;
    font-weight: bold;
    color: var(--darkerGray);
`;

export const Observation = styled.span`
    font-size: 12px;
    padding: 2px 0;
`;
