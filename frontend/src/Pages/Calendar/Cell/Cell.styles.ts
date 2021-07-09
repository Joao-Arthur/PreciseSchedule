import styled from 'styled-components';

export const DayBox = styled.div`
    cursor: pointer;
    flex: 1;

    :hover {
        background-color: var(--calendarlight);
        border-radius: 4px;
    }
`;

type labelType = {
    isInMonth: boolean;
};

export const DayLabel = styled.p<labelType>`
    text-align: center;
    user-select: none;
    font-size: 20px;

    ${({ isInMonth }) => (!isInMonth ? 'color: darkgray;' : '')}
`;
