import { useCallback, useState } from "react";
import { TransparentIcon } from "@/components/atoms/TransparentIcon";
import { UserMenu } from "../userMenu/UserMenu";
import { If } from "@/components/atoms/layout/If";

export function UserActions() {
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const closeMenu = useCallback(() => setUserMenuOpen(false), []);

    return (
        <>
            <TransparentIcon
                name="user"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
            />
            <If condition={userMenuOpen}>
                <UserMenu closeMenu={closeMenu} />
            </If>
        </>
    );
}
