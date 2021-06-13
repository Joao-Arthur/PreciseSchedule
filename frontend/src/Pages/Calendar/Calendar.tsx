import { useState } from 'react';
import {
    Container,
    Header,
    Button,
    Title,
    Body,
    BodyHeader
} from './Calendar.styles';
import Cell from './Cell';
import {
    monthDaysToTable,
    daysOfWeek,
    monthsOfTheYear,
    infoToDate
} from './Helper';

export default function Calendar() {
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
                <Title>{`${monthsOfTheYear[selectedMonth]} ${selectedYear}`}</Title>
                <Button onClick={setNextMonth}>{'>'}</Button>
                <Button onClick={() => setVisibleYear(selectedYear + 1)}>
                    {'>>'}
                </Button>
            </Header>
            <Body>
                <thead>
                    <tr>
                        {daysOfWeek.map(day => (
                            <BodyHeader key={day}>{day}</BodyHeader>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {monthDaysToTable(selectedYear, selectedMonth).map(
                        (week, weekIndex) => (
                            <tr key={weekIndex}>
                                {week.map((day, index) => (
                                    <Cell
                                        day={day}
                                        date={infoToDate(
                                            selectedYear,
                                            selectedMonth,
                                            day
                                        )}
                                        key={weekIndex * 7 + index}
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
