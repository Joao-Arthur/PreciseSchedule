import { Container, Actions, Edit, Remove } from './Event.styles';

export default function Event() {
    return (
        <Container>
            <span>jesse's birthday</span>
            <Actions>
                <Edit onClick={() => {}} />
                <Remove onClick={() => {}} />
            </Actions>
        </Container>
    );
}
