import { ReactChild } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Store';
import { Creators } from '../../Store/General';
import {
    Header,
    HeaderTitle,
    Main,
    ChildrenContainer,
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
        (state: RootState) => state.General.actualPage
    );

    const getPageActions = () => {
        switch (actualPage) {
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

    return (
        <>
            <Header>
                {!actualPage ? (
                    <Hamburguer
                        onClick={() => dispatch(Creators.switchSidebarOpen())}
                    />
                ) : null}
                <HeaderTitle>PreciseSchedule</HeaderTitle>
                {getPageActions()}
            </Header>
            <Main>
                {!actualPage ? <Sidebar /> : null}
                <ChildrenContainer>{children}</ChildrenContainer>
            </Main>
            <Footer>
                2020 João Arthur Lothamer Fernandes. Terms Privacy Help
            </Footer>
        </>
    );
}
