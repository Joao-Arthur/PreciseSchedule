import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { StateType } from '../../../../Store';
import ButtonIcon from '../../../../Components/ButtonIcon';
import Device from '../../../../Core/Device';
import Range from '../../../../Core/Range';
import NavigationSelect from './NavigationSelect';
import {
    Container,
    Left,
    Center,
    Right,
    NavigationButton,
    InfoButton,
    NewButton
} from './Navigation.styles';

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
    const logged = useSelector((state: StateType) => state.User.isLogged);
    const months = Device.isMobile ? monthsOfYearAbbrev : monthsOfYear;
    const options = Range(year, 4);
    const now = new Date();

    return (
        <Container>
            <Left>
                <Link to='/charts'>
                    <ButtonIcon
                        title='activities'
                        name='chart'
                        color='gray'
                        size={25}
                        buttonSize={40}
                    />
                </Link>
                <InfoButton
                    onClick={setToday}
                    disabled={
                        year === now.getFullYear() && month === now.getMonth()
                    }
                >
                    Today
                </InfoButton>
            </Left>
            <Center>
                {!Device.isMobile ? (
                    <>
                        <NavigationButton
                            title='previous year'
                            onClick={setPreviousYear}
                        >
                            {'<<'}
                        </NavigationButton>
                        <NavigationButton
                            title='previous month'
                            onClick={setPreviousMonth}
                        >
                            {'<'}
                        </NavigationButton>
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
                        <NavigationButton
                            title='next month'
                            onClick={setNextMonth}
                        >
                            {'>'}
                        </NavigationButton>
                        <NavigationButton
                            title='next year'
                            onClick={setNextYear}
                        >
                            {'>>'}
                        </NavigationButton>
                    </>
                ) : null}
            </Center>
            <Right>{logged ? <NewButton>NEW</NewButton> : null}</Right>
        </Container>
    );
}
