import { useDispatch } from 'react-redux';
import Calendar from '../../../../../../Domains/Calendar';
import { Container, Text } from './Cell.styles';

type props = {
    year: number;
    month: number;
    day: number;
};

export default function Cell({ year, month, day }: props) {
    const dispatch = useDispatch();
    const date = new Date(year, month, day);
    const isInMonth = date.getMonth() === month;

    return (
        <Container
            onClick={() => {
                dispatch(Calendar.Actions.toggleSelectedDay(date));
            }}
        >
            <Text isInMonth={isInMonth}>{date.getDate()}</Text>
        </Container>
    );
}
