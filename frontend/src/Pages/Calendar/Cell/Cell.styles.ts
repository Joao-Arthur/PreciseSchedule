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

export const DayLabel = styled.p`
    text-align: center;
    margin: auto;
    user-select: none;
`;
