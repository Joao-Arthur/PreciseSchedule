import Device from '../../../../Core/Device';
import Range from '../../../../Core/Range';
import { Container, Button, Title } from './Navigation.styles';

const monthsOfYear = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const monthsOfYearAbbrev = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];

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
    const months = Device.isMobile ? monthsOfYearAbbrev : monthsOfYear;

    return (
        <Container>
            <Button onClick={setPreviousYear}>{'<<'}</Button>
            <Button onClick={setPreviousMonth}>{'<'}</Button>
            <select>
                {months.map(mon => (
                    <option>{mon}</option>
                ))}
            </select>
            <select>
                {Range(1900, 2100).map(mon => (
                    <option>{mon}</option>
                ))}
            </select>
            <Title>{`${months[month]} ${year}`}</Title>
            <Button onClick={setNextMonth}>{'>'}</Button>
            <Button onClick={setNextYear}>{'>>'}</Button>
        </Container>
    );
}
