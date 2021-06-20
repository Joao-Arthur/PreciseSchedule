import { useDispatch, useSelector } from 'react-redux';
import Calendar from '../../Domains/Calendar';
import { StateType } from '../../Store';
import {
    Container,
    Title,
    Close,
    Header,
    Button,
    ButtonContainer,
    Edit,
    Remove
} from './DayEvents.styles';
import ButtonIcon from '../../Components/ButtonIcon';

export default function DayEvents() {
    const dispatch = useDispatch();

    const selectedDay = useSelector(
        (state: StateType) => state.Calendar.selectedDay
    );

    const now = new Date();

    return (
        <Container open={!!selectedDay}>
            {selectedDay ? (
                <>
                    <Header>
                        <Title>
                            {selectedDay.toLocaleString().slice(0, 10)}
                        </Title>
                        <Close
                            onClick={() => {
                                dispatch(
                                    Calendar.Creators.setSelectedDay(null)
                                );
                            }}
                        />
                    </Header>
                    {selectedDay >= now ? (
                        <ButtonContainer>
                            <Button>NEW EVENT</Button>
                        </ButtonContainer>
                    ) : null}
                    <div>
                        <span>jesse's birthday</span>
                        <Edit onClick={() => {}} />
                        <Remove onClick={() => {}} />
                    </div>
                </>
            ) : null}
        </Container>
    );
}
