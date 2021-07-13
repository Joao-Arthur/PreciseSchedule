import { useState } from 'react';
import { Container } from './Table.styles';
import Navigation from './Navigation';
import Display from './Display';

const now = new Date();

export default function Events() {
    const [year, setYear] = useState(now.getFullYear());
    const [month, setMonth] = useState(now.getMonth());

    function setPreviousYear() {
        setYear(year - 1);
    }

    function setNextYear() {
        setYear(year + 1);
    }

    function setPreviousMonth() {
        if (month > 0) return setMonth(month - 1);
        setMonth(11);
        setPreviousYear();
    }

    function setNextMonth() {
        if (month < 11) return setMonth(month + 1);
        setMonth(0);
        setNextYear();
    }

    return (
        <Container>
            <Navigation
                setPreviousYear={setPreviousYear}
                setNextYear={setNextYear}
                setPreviousMonth={setPreviousMonth}
                setNextMonth={setNextMonth}
                month={month}
                year={year}
            />
            <Display year={year} month={month} />
        </Container>
    );
}
