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
    ChildrenContainer,
    ChildrenContainerCenter,
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

    const getPageActions = () => {
        switch (actualPage) {
            case 'home':
            case 'notfound':
                return (
                    <>
                        <Link to='/signin'>Sign in</Link>
                        <Link to='/signup'>Sign up</Link>
                    </>
                );
            case 'signin':
                return <Link to='/signup'>Sign up</Link>;
            case 'signup':
            case 'passwordForgot':
            case 'passwordNew':
                return <Link to='/signin'>Sign in</Link>;
            default:
                return <UserActions />;
        }
    };

    const getChildrenContainer = () => {
        switch (actualPage) {
            case 'signin':
            case 'signup':
            case 'passwordForgot':
            case 'passwordNew':
                return ChildrenContainerCenter;
            default:
                return ChildrenContainer;
        }
    };

    const Container = getChildrenContainer();

    return (
        <>
            <Header>
                <HeaderDivisionStart>
                    {!actualPage ? (
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
                <HeaderDivisionEnd>{getPageActions()}</HeaderDivisionEnd>
            </Header>
            <Main>
                {!actualPage ? <Sidebar /> : null}
                <Container>{children}</Container>
            </Main>
            {/*<Footer>
                2020 João Arthur Lothamer Fernandes. Terms Privacy Help
            </Footer>*/}
        </>
    );
}
