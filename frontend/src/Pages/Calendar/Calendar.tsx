import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateType } from '../../Store';
import {
    Container,
    Header,
    Button,
    Title,
    Body,
    BodyHeader
} from './Calendar.styles';
import Cell from './Cell';
import { monthDaysToTable, daysOfWeek, monthsOfTheYear } from './Helper';

export default function Calendar() {
    const now = new Date();
    const [shownYear, setVisibleYear] = useState(now.getFullYear());
    const [shownMonth, setVisibleMonth] = useState(now.getMonth());

    const setNextMonth = () => {
        if (shownMonth < 11) return setVisibleMonth(shownMonth + 1);
        setVisibleMonth(0);
        setVisibleYear(shownYear + 1);
    };

    const setPrevMonth = () => {
        if (shownMonth > 0) return setVisibleMonth(shownMonth - 1);
        setVisibleMonth(11);
        setVisibleYear(shownYear - 1);
    };

    const logged = useSelector((state: StateType) => state.User.isLogged);
    if (!logged) return <Redirect to='/signin' />;

    return (
        <Container>
            <Header>
                <Button onClick={() => setVisibleYear(shownYear - 1)}>
                    {'<<'}
                </Button>
                <Button onClick={setPrevMonth}>{'<'}</Button>
                <Title>{`${monthsOfTheYear[shownMonth]} ${shownYear}`}</Title>
                <Button onClick={setNextMonth}>{'>'}</Button>
                <Button onClick={() => setVisibleYear(shownYear + 1)}>
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
                    {monthDaysToTable(shownYear, shownMonth).map(
                        (week, weekIndex) => (
                            <tr key={weekIndex}>
                                {week.map((day, index) => (
                                    <Cell
                                        day={day}
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
