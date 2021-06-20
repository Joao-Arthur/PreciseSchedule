import { ReactChild, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StateType } from '../../Store';
import General from '../../Domains/General';
import {
    Header,
    HeaderTitle,
    Division,
    Main,
    Link,
    LogoLink
} from './BasePage.styles';
import Sidebar from '../../Components/Sidebar';
import UserActions from '../../Components/UserActions';
import User from '../../Domains/User';
import TransparentIcon from '../../Components/TransparentIcon';

type props = {
    children: ReactChild;
};

export default function BasePage({ children }: props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(User.Creators.verifyToken());
    }, [dispatch]);

    const actualPage = useSelector(
        (state: StateType) => state.General.actualPage
    );
    const logged = useSelector((state: StateType) => state.User.isLogged);

    function getLinksByPage() {
        switch (actualPage) {
            case 'signin':
                return <Link to='/signup'>Sign up</Link>;
            case 'signup':
                return <Link to='/signin'>Sign in</Link>;
            default:
                return (
                    <>
                        <Link to='/signin'>Sign in</Link>
                        <Link to='/signup'>Sign up</Link>
                    </>
                );
        }
    }

    return (
        <>
            <Header>
                <Division>
                    {logged ? (
                        <TransparentIcon
                            name='hamburguer'
                            size={33}
                            color='white'
                            onClick={() =>
                                dispatch(General.Creators.switchSidebarOpen())
                            }
                        />
                    ) : null}
                    <LogoLink to='/'>
                        <HeaderTitle>PreciseSchedule</HeaderTitle>
                    </LogoLink>
                </Division>
                <Division>
                    {logged ? <UserActions /> : getLinksByPage()}
                </Division>
            </Header>
            <Main>
                {logged ? <Sidebar /> : null}
                {children}
            </Main>
        </>
    );
}
