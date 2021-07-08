import { useState } from 'react';
import {
    Container,
    Header,
    Button,
    Title,
    Body,
    Row,
    Column
} from './Table.styles';
import Cell from '../Cell';
import monthDaysToTable from '../monthDaysToTable';
import { MonthsOfTheYear, daysOfWeek } from '../Calendar.constants';

export default function Events() {
    const now = new Date();
    const [selectedYear, setVisibleYear] = useState(now.getFullYear());
    const [selectedMonth, setVisibleMonth] = useState(now.getMonth());

    function setNextMonth() {
        if (selectedMonth < 11) return setVisibleMonth(selectedMonth + 1);
        setVisibleMonth(0);
        setVisibleYear(selectedYear + 1);
    }

    function setPreviousMonth() {
        if (selectedMonth > 0) return setVisibleMonth(selectedMonth - 1);
        setVisibleMonth(11);
        setVisibleYear(selectedYear - 1);
    }

    return (
        <Container>
            <Header>
                <Button onClick={() => setVisibleYear(selectedYear - 1)}>
                    {'<<'}
                </Button>
                <Button onClick={setPreviousMonth}>{'<'}</Button>
                <Title>{`${MonthsOfTheYear[selectedMonth]} ${selectedYear}`}</Title>
                <Button onClick={setNextMonth}>{'>'}</Button>
                <Button onClick={() => setVisibleYear(selectedYear + 1)}>
                    {'>>'}
                </Button>
            </Header>
            <Body>
                <Row>
                    {daysOfWeek.map(day => (
                        <Column key={day}>{day}</Column>
                    ))}
                </Row>
                {monthDaysToTable(selectedYear, selectedMonth).map(
                    (week, weekIndex) => (
                        <Row key={weekIndex}>
                            {week.map(day => (
                                <Column>{`day: ${day}`}</Column>
                            ))}
                        </Row>
                    )
                )}
            </Body>
        </Container>
    );
}
