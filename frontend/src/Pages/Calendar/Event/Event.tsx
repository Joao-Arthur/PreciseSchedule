import { Container, Actions } from './Event.styles';
import ButtonIcon from '../../../Components/ButtonIcon';

export default function Event() {
    return (
        <Container>
            <span>jesse's birthday</span>
            <Actions>
                <ButtonIcon
                    name='edit'
                    size={15}
                    color='gray'
                    buttonSize={30}
                    onClick={() => {}}
                />
                <ButtonIcon
                    name='close'
                    size={15}
                    color='gray'
                    buttonSize={30}
                    onClick={() => {}}
                />
            </Actions>
        </Container>
    );
}
