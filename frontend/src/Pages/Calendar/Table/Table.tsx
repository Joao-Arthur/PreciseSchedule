import { useState } from 'react';
import {
    Container,
    Header,
    Button,
    Title,
    Body,
    BodyHeader,
    THead
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
                <THead>
                    <tr>
                        {daysOfWeek.map(day => (
                            <BodyHeader key={day}>{day}</BodyHeader>
                        ))}
                    </tr>
                </THead>
                <tbody>
                    {monthDaysToTable(selectedYear, selectedMonth).map(
                        (week, weekIndex) => (
                            <tr key={weekIndex}>
                                {week.map(day => (
                                    <Cell
                                        year={selectedYear}
                                        month={selectedMonth}
                                        day={day}
                                        key={day}
                                    />
                                ))}
                            </tr>
                        )
                    )}
                </tbody>
            </Body>
        </Container>
    );
}
