import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Device from '../../../../Core/Device';
import Range from '../../../../Core/Range';
import PrimaryButton from '../../../../Components/Button';
import NavigationSelect from './NavigationSelect';
import { Container, Button } from './Navigation.styles';

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
    setToday: () => void;
    month: number;
    year: number;
};

export default function Navigation({
    setPreviousYear,
    setNextYear,
    setYear,
    setPreviousMonth,
    setNextMonth,
    setMonth,
    setToday,
    month,
    year
}: props) {
    const [selectedCharts, setSelectedCharts] = useState(false);

    const months = Device.isMobile ? monthsOfYearAbbrev : monthsOfYear;

    const options = Range(year, 4);

    if (selectedCharts) return <Redirect to='/charts' />;
    return (
        <Container>
            <div>
                <Button onClick={() => setSelectedCharts(true)}>
                    activies
                </Button>
                <Button onClick={setToday}>Today</Button>
            </div>
            <div>
                {!Device.isMobile ? (
                    <>
                        <Button onClick={setPreviousYear}>{'<<'}</Button>
                        <Button onClick={setPreviousMonth}>{'<'}</Button>
                    </>
                ) : null}
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
                {!Device.isMobile ? (
                    <>
                        <Button onClick={setNextMonth}>{'>'}</Button>
                        <Button onClick={setNextYear}>{'>>'}</Button>
                    </>
                ) : null}
            </div>
            <div>
                <PrimaryButton style={{ justifySelf: 'flex-end' }}>
                    new
                </PrimaryButton>
            </div>
        </Container>
    );
}
