import { useDispatch } from 'react-redux';
import { Container, List, Item, Link, Icon } from './UserMenu.styles';
import User from '../../Domains/User';

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
