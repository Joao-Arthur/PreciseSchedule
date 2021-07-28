import { useState } from 'react';
import UserMenu from '../UserMenu';
import TransparentIcon from '../TransparentIcon';

export default function UserActions() {
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    return (
        <>
            <TransparentIcon
                name='user'
                size={30}
                color='white'
                onClick={() => setUserMenuOpen(!userMenuOpen)}
            />
            {userMenuOpen ? (
                <UserMenu onOutClick={() => setUserMenuOpen(false)} />
            ) : null}
        </>
    );
}
