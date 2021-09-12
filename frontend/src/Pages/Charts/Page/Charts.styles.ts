import styled from 'styled-components';
import { Mobile } from '../../../Core/Responsive';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    ${Mobile`overflow: auto;`};
`;

export const Navigation = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    padding: 4px 10px;
`;

export const ChartsContainer = styled.div`
    flex: 1;
    display: block;
    width: 100vw;
    overflow-x: hidden;
`;

export const Row = styled.div`
    height: 25%;
    overflow-y: hidden;
`;

export const ChartTitle = styled.h4`
    margin: 5px 0;
    text-align: center;
`;
