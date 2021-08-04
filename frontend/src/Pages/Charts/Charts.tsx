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
