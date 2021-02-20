import { ReactChild } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Store';
import {
    Header,
    HeaderTitle,
    ContentContainer,
    ChildrenContainer,
    Footer,
    Button,
    Hamburguer,
    Link
} from './BasePage.styles';
import Sidebar from '../../Components/Sidebar';
import { Creators as AuthCreators } from '../../Store/Auth';
import { Creators as GeneralCreators } from '../../Store/General';
interface Props {
    children: ReactChild;
}

export default function BasePage({ children }: Props) {
    const dispatch = useDispatch();
    const signout = () => {
        dispatch(AuthCreators.logout());
    };
    const switchSidebar = () => {
        dispatch(GeneralCreators.switchSidebarOpen());
    };

    const actualPage = useSelector(
        (state: RootState) => state.General.actualPage
    );

    const getPageActions = () => {
        switch (actualPage) {
            case 'signin':
                return <Link to='/signup'>Sign up</Link>;
            case 'signup':
                return <Link to='/signin'>Sign in</Link>;
            default:
                return <Button onClick={signout}>Sign out</Button>;
        }
    };

    return (
        <>
            <Header>
                <button onClick={switchSidebar}>
                    <Hamburguer />
                </button>
                <HeaderTitle>PreciseSchedule</HeaderTitle>
                {getPageActions()}
            </Header>
            <ContentContainer>
                {!actualPage ? <Sidebar /> : null}
                <ChildrenContainer>{children}</ChildrenContainer>
            </ContentContainer>
            <Footer>
                2020 João Arthur Lothamer Fernandes. Terms Privacy Help
            </Footer>
        </>
    );
}
