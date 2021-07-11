import { useState } from 'react';
import { Container, Header, Button, Title, Body, Row } from './Table.styles';
import Cell from '../Cell';
import monthDaysToTable from '../monthDaysToTable';
import { MonthsOfTheYear } from '../Calendar.constants';
import BodyHeader from '../BodyHeader';

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
                <BodyHeader />
                {monthDaysToTable(selectedYear, selectedMonth).map(
                    (week, weekIndex) => (
                        <Row key={weekIndex}>
                            {week.map(day => (
                                <Cell
                                    year={selectedYear}
                                    month={selectedMonth}
                                    day={day}
                                    key={day}
                                />
                            ))}
                        </Row>
                    )
                )}
            </Body>
        </Container>
    );
}
