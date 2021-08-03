import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
    Container,
    Navigation,
    ChartsContainer,
    Row,
    Column,
    Button
} from './Charts.styles';
import Chart from './Chart';

export default function Charts() {
    const [selectedCalendar, setSelectedCalendar] = useState(false);

    if (selectedCalendar) return <Redirect to='/' />;
    return (
        <Container>
            <Navigation>
                <Button onClick={() => setSelectedCalendar(true)}>
                    calendar
                </Button>
            </Navigation>
            <ChartsContainer>
                <Row>
                    <Chart />
                    <Chart />
                </Row>
                <Row>
                    <Chart />
                    <Chart />
                </Row>
            </ChartsContainer>
        </Container>
    );
}
