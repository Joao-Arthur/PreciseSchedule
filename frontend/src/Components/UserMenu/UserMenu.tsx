import { useDispatch } from 'react-redux';
import { Container, List, Item, Link } from './UserMenu.styles';
import { Creators } from '../../Store/Auth';

export default function UserMenu() {
    const dispatch = useDispatch();

    return (
        <Container>
            <List>
                <Item>
                    <Link to='/settings'>configurações</Link>
                </Item>
                <Item onClick={() => dispatch(Creators.logout())}>sair</Item>
            </List>
        </Container>
    );
}
