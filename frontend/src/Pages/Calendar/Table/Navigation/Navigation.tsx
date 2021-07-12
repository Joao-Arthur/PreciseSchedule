import { Container, Button, Title } from './Navigation.styles';

enum MonthsOfTheYear {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

type props = {
    setPreviousYear: () => void;
    setNextYear: () => void;
    setPreviousMonth: () => void;
    setNextMonth: () => void;
    month: number;
    year: number;
};

export default function Navigation({
    setPreviousYear,
    setNextYear,
    setPreviousMonth,
    setNextMonth,
    month,
    year
}: props) {
    return (
        <Container>
            <Button onClick={setPreviousYear}>{'<<'}</Button>
            <Button onClick={setPreviousMonth}>{'<'}</Button>
            <Title>{`${MonthsOfTheYear[month]} ${year}`}</Title>
            <Button onClick={setNextMonth}>{'>'}</Button>
            <Button onClick={setNextYear}>{'>>'}</Button>
        </Container>
    );
}
