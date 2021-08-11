import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Navigation, ChartsContainer, Row } from './Charts.styles';
import Chart from './Chart';
import EventsTable from './EventsTable';
import ButtonIcon from '../../Components/ButtonIcon';

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
            </Navigation>
            <ChartsContainer>
                <Row>
                    <EventsTable />
                </Row>
                <Row>
                    <Chart title='total' />
                </Row>
                <Row>
                    <Chart title='type' />
                </Row>
                <Row>
                    <Chart title='importance' />
                </Row>
            </ChartsContainer>
        </Container>
    );
}
