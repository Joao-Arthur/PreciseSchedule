import { useDispatch } from 'react-redux';
import { Container, List, Item, Link } from './UserMenu.styles';
import User from '../../Domains/User';

export default function UserMenu() {
    const dispatch = useDispatch();

    return (
        <Container>
            <List>
                <Item>
                    <Link to='/settings'>settings</Link>
                </Item>
                <Item onClick={() => dispatch(User.Creators.signOut())}>
                    sign out
                </Item>
            </List>
        </Container>
    );
}
