import Device from '../../../../Core/Device';
import Range from '../../../../Core/Range';
import { Container, Button } from './Navigation.styles';
import NavigationSelect from './NavigationSelect';

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
    setYear: (newYear: number) => void;
    setPreviousMonth: () => void;
    setNextMonth: () => void;
    setMonth: (newMonth: number) => void;
    month: number;
    year: number;
};

const options = Range(1900, 2100);

export default function Navigation({
    setPreviousYear,
    setNextYear,
    setYear,
    setPreviousMonth,
    setNextMonth,
    setMonth,
    month,
    year
}: props) {
    const months = Device.isMobile ? monthsOfYearAbbrev : monthsOfYear;

    return Device.isMobile ? (
        <Container>
            <NavigationSelect
                type='select'
                options={months}
                name='month'
                value={months[month]}
                onChange={newMonth => setMonth(months.indexOf(newMonth))}
            />
            <NavigationSelect
                type='select'
                options={options}
                name='month'
                value={String(year)}
                onChange={newYear => setYear(Number(newYear))}
            />
        </Container>
    ) : (
        <Container>
            <Button onClick={setPreviousYear}>{'<<'}</Button>
            <Button onClick={setPreviousMonth}>{'<'}</Button>
            <NavigationSelect
                type='select'
                options={months}
                name='month'
                value={months[month]}
                onChange={newMonth => setMonth(months.indexOf(newMonth))}
            />
            <NavigationSelect
                type='select'
                options={options}
                name='month'
                value={String(year)}
                onChange={newYear => setYear(Number(newYear))}
            />
            <Button onClick={setNextMonth}>{'>'}</Button>
            <Button onClick={setNextYear}>{'>>'}</Button>
        </Container>
    );
}
