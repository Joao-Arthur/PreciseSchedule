import React, { useState, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { Header, Button, Title, Body, BodyHeader } from './Calendar.styles';
import Cell from '../Cell';
import { monthDaysToGrid, diasDaSemana, nomeDosMeses } from './Helper';

export default function Calendar() {
    const now = new Date();
    const [visibleYear, setVisibleYear] = useState(now.getFullYear());
    const [visibleMonth, setVisibleMonth] = useState(now.getMonth());

    const setNextMonth = () => {
        if (visibleMonth < 11) return setVisibleMonth(visibleMonth + 1);
        setVisibleMonth(0);
        setVisibleYear(visibleYear + 1);
    };

    const setPrevMonth = () => {
        if (visibleMonth > 0) return setVisibleMonth(visibleMonth - 1);
        setVisibleMonth(11);
        setVisibleYear(visibleYear - 1);
    };

    const diasFormatados = useCallback(
        () => monthDaysToGrid(visibleYear, visibleMonth),
        [visibleYear, visibleMonth]
    );

    const logado = useSelector((state: RootState) => state.Auth.isLogged);
    if (!logado) return <Redirect to='/signin' />;

    return (
        <>
            <Header>
                <Button onClick={() => setVisibleYear(visibleYear - 1)}>
                    {'<<'}
                </Button>
                <Button onClick={setPrevMonth}>{'<'}</Button>
                <Title>{`${nomeDosMeses[visibleMonth]} ${visibleYear}`}</Title>
                <Button onClick={setNextMonth}>{'>'}</Button>
                <Button onClick={() => setVisibleYear(visibleYear + 1)}>
                    {'>>'}
                </Button>
            </Header>
            <Body>
                <thead>
                    <tr>
                        {diasDaSemana.map(day => (
                            <BodyHeader key={day}>{day}</BodyHeader>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {diasFormatados().map((week, weekIndex) => (
                        <tr key={weekIndex}>
                            {week.map((day, index) => (
                                <Cell dia={day} key={weekIndex * 7 + index} />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Body>
        </>
    );
}
