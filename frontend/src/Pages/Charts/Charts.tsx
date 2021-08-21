import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Navigation, ChartsContainer, Row } from './Charts.styles';
import EventsTable from './EventsTable';
import ButtonIcon from '../../Components/ButtonIcon';
import AllEvents from './AllEvents';
import EventsByCategory from './EventsByCategory';
import EventsByImportance from './EventsByImportance';

export default function Charts() {
    const [selectedCalendar, setSelectedCalendar] = useState(false);

    if (selectedCalendar) return <Redirect to='/' />;
    return (
        <Container>
            <Navigation>
                <ButtonIcon
                    title='calendar'
                    name='calendar'
                    color='gray'
                    size={25}
                    buttonSize={40}
                    onClick={() => setSelectedCalendar(true)}
                />
                <ButtonIcon
                    title='calendar'
                    name='calendar'
                    color='gray'
                    size={25}
                    buttonSize={40}
                    onClick={() => setSelectedCalendar(true)}
                />
            </Navigation>
            <ChartsContainer>
                <Row>
                    <EventsTable />
                </Row>
                <Row>
                    <AllEvents />
                </Row>
                <Row>
                    <EventsByCategory />
                </Row>
                <Row>
                    <EventsByImportance />
                </Row>
            </ChartsContainer>
        </Container>
    );
}
