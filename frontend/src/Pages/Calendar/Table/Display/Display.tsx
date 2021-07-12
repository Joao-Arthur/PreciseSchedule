import Header from './Header';
import Body from './Body';
import { Container } from './Display.styles';

type props = {
    year: number;
    month: number;
};

export default function Display({ year, month }: props) {
    return (
        <Container>
            <Header />
            <Body year={year} month={month} />
        </Container>
    );
}
