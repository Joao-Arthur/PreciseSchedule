import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from '../../../Domains/Calendar';
import { StateType } from '../../../Store';
import Events from './Events';
import {
    Container,
    Content,
    Title,
    Close,
    Header,
    Button,
    ButtonContainer
} from './Sidebar.styles';
import NewEvent from './NewEvent';

export default function EventsSidebar() {
    const dispatch = useDispatch();

    const selectedDay = useSelector(
        (state: StateType) => state.Calendar.selectedDay
    );
    const [isNewEventVisible, setIsNewEventVisible] = useState(false);

    const now = new Date();

    return (
        <Container open={!!selectedDay}>
            <Content>
                {selectedDay ? (
                    <>
                        <Header>
                            <Title>
                                {selectedDay.toLocaleString(undefined, {
                                    year: 'numeric',
                                    month: 'numeric',
                                    day: 'numeric'
                                })}
                            </Title>
                            <Close
                                onClick={() => {
                                    dispatch(
                                        Calendar.Creators.setSelectedDay(null)
                                    );
                                }}
                            />
                        </Header>
                        <Events />
                        {selectedDay >= now ? (
                            <ButtonContainer>
                                <Button
                                    onClick={() =>
                                        setIsNewEventVisible(!isNewEventVisible)
                                    }
                                >
                                    NEW EVENT
                                </Button>
                                <NewEvent
                                    visible={isNewEventVisible}
                                    hide={() => setIsNewEventVisible(false)}
                                    day={selectedDay}
                                />
                            </ButtonContainer>
                        ) : null}
                    </>
                ) : null}
            </Content>
        </Container>
    );
}
