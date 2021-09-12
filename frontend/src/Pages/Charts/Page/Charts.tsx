import { Link } from 'react-router-dom';
import { Container, Navigation, ChartsContainer, Row } from './Charts.styles';
import EventsTable from './EventsTable';
import ButtonIcon from '../../../Components/ButtonIcon';
import AllEvents from './AllEvents';
import EventsByCategory from './EventsByCategory';
import EventsByImportance from './EventsByImportance';

export default function Charts() {
    return (
        <Container>
            <Navigation>
                <Link to='/'>
                    <ButtonIcon
                        title='calendar'
                        name='calendar'
                        color='gray'
                        size={25}
                        buttonSize={40}
                    />
                </Link>
                <ButtonIcon
                    title='filter'
                    name='filter'
                    color='gray'
                    size={25}
                    buttonSize={40}
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
