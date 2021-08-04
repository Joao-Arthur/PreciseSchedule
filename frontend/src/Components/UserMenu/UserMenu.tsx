import { useEffect, useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import User from '../../Domains/User';
import { Container, List, Item, Link, Icon } from './UserMenu.styles';

type props = {
    onOutClick: () => void;
};

export default function UserMenu({ onOutClick }: props) {
    const dispatch = useDispatch();
    const clicked = useRef(false);

    const windowClick = useCallback(() => {
        if (!clicked.current) onOutClick();
        clicked.current = false;
    }, [onOutClick]);

    useEffect(() => {
        window.addEventListener('click', windowClick);
        return () => window.removeEventListener('click', windowClick);
    }, [windowClick]);

    function onMenuClick() {
        clicked.current = true;
    }

    return (
        <Container onClick={onMenuClick}>
            <List onClick={onOutClick}>
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
