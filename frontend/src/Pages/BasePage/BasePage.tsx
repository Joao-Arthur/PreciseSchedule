import { ReactChild } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StateType } from '../../Store';
import General from '../../Domains/General';
import {
    Header,
    HeaderTitle,
    HeaderDivisionStart,
    HeaderDivisionCenter,
    HeaderDivisionEnd,
    Main,
    Footer,
    Hamburguer,
    Link
} from './BasePage.styles';
import Sidebar from '../../Components/Sidebar';
import UserActions from '../../Components/UserActions';
interface Props {
    children: ReactChild;
}

export default function BasePage({ children }: Props) {
    const dispatch = useDispatch();

    const actualPage = useSelector(
        (state: StateType) => state.General.actualPage
    );
    const logged = useSelector((state: StateType) => state.User.isLogged);

    const getLinksByPage = () => {
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
    };

    return (
        <>
            <Header>
                <HeaderDivisionStart>
                    {logged ? (
                        <Hamburguer
                            onClick={() =>
                                dispatch(General.Creators.switchSidebarOpen())
                            }
                        />
                    ) : null}
                </HeaderDivisionStart>
                <HeaderDivisionCenter>
                    <HeaderTitle>PreciseSchedule</HeaderTitle>
                </HeaderDivisionCenter>
                <HeaderDivisionEnd>
                    {logged ? <UserActions /> : getLinksByPage()}
                </HeaderDivisionEnd>
            </Header>
            <Main>
                {logged ? <Sidebar /> : null}
                {children}
            </Main>
            {/*<Footer>
                2020 João Arthur Lothamer Fernandes. Terms Privacy Help
            </Footer>*/}
        </>
    );
}
