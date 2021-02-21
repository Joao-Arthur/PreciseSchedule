import { useState } from 'react';
import { User } from './UserActions.styles';
import UserMenu from '../UserMenu';

export default function UserActions() {
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    return (
        <>
            <User onClick={() => setUserMenuOpen(!userMenuOpen)} />
            {userMenuOpen ? <UserMenu /> : null}
        </>
    );
}
