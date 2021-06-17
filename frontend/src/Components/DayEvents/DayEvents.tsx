import { useDispatch, useSelector } from 'react-redux';
import Calendar from '../../Domains/Calendar';
import { StateType } from '../../Store';
import Button from '../Button';
import { Container, Title } from './DayEvents.styles';

export default function DayEvents() {
    const dispatch = useDispatch();

    const selectedDay = useSelector(
        (state: StateType) => state.Calendar.selectedDay
    );

    return (
        <Container open={!!selectedDay}>
            <Title>
                {selectedDay ? selectedDay.toLocaleString().slice(0, 10) : null}
            </Title>
            <Button
                onClick={() => {
                    dispatch(Calendar.Creators.setSelectedDay(null));
                }}
            >
                close
            </Button>
            <Button>new</Button>
        </Container>
    );
}
