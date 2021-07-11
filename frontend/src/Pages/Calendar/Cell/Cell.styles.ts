import styled from 'styled-components';

type props = {
    isInMonth: boolean;
};

export const Text = styled.span<props>`
    text-align: center;
    margin: auto;
    user-select: none;
    font-size: 20px;
    transition: font-size 0.1s ease;
    ${({ isInMonth }) => (!isInMonth ? 'color: var(--darkGray);' : '')}
`;

export const Container = styled.div`
    cursor: pointer;
    flex: 1;
    border-radius: 4px;
    display: flex;
    transition: background-color 0.1s ease;

    :hover {
        background-color: var(--lighter);
    }

    :active {
        background-color: var(--light);

        ${Text} {
            font-size: 25px;
        }
    }
`;
