import styled from 'styled-components';

export const Container = styled.div`
    cursor: pointer;
    flex: 1;

    :hover {
        background-color: var(--lighter);
        border-radius: 4px;
    }
`;

type props = {
    isInMonth: boolean;
};

export const Text = styled.p<props>`
    text-align: center;
    user-select: none;
    font-size: 20px;
    ${({ isInMonth }) => (!isInMonth ? 'color: darkgray;' : '')}
`;
