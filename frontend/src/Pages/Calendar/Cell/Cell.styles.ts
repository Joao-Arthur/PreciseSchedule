import styled from 'styled-components';

export const DayBox = styled.td`
    width: calc(100% / 7);
    height: 5rem;
    cursor: pointer;

    :hover {
        background-color: var(--calendarlight);
        border-radius: 4px;
    }
`;

export const InvisibleDayBox = styled.td`
    width: calc(100% / 7);
    height: 5rem;
`;

type labelprops = {
    isInMonth: boolean;
};

export const DayLabel = styled.p<labelprops>`
    text-align: center;
    margin: auto;
    user-select: none;
    font-size: 20px;

    ${({ isInMonth }) => (!isInMonth ? 'color: darkgray;' : '')}
`;
