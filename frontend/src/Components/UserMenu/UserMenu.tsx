import { useDispatch } from 'react-redux';
import User from '../../Domains/User';
import { Container, List, Item, Link, Icon } from './UserMenu.styles';

export default function UserMenu() {
    const dispatch = useDispatch();

    return (
        <Container>
            <List>
                <Link to='/settings'>
                    <Item>
                        <Icon
                            name='settings'
                            size={20}
                            color='var(--darkGray)'
                        />
                        settings
                    </Item>
                </Link>
                <Item onClick={() => dispatch(User.Creators.signOut())}>
                    <Icon name='signOut' size={20} color='var(--darkGray)' />
                    sign out
                </Item>
            </List>
        </Container>
    );
}
