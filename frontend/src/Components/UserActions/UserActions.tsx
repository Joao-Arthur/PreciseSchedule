import { useState } from 'react';
import UserMenu from '../UserMenu';
import ButtonIcon from '../ButtonIcon';

export default function UserActions() {
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    return (
        <>
            <ButtonIcon
                name='user'
                size={30}
                color='white'
                design='transparent'
                onClick={() => setUserMenuOpen(!userMenuOpen)}
            />
            {userMenuOpen ? <UserMenu /> : null}
        </>
    );
}
