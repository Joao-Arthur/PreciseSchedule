import { ReactChild, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StateType } from '../../Store';
import {
    Container,
    Header,
    HeaderTitle,
    Division,
    Main,
    Link,
    LogoLink
} from './BasePage.styles';
import UserActions from '../../Components/UserActions';
import User from '../../Domains/User';
import Device from '../../Core/Device';

type props = {
    children: ReactChild;
};

export default function BasePage({ children }: props) {
    const dispatch = useDispatch();
    const [height, setHeight] = useState(window.innerHeight);

    window.addEventListener('resize', () => {
        setHeight(window.innerHeight);
    });

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
        <Container height={height}>
            <Header>
                <Division>
                    <LogoLink to='/'>
                        <HeaderTitle>
                            {Device.isMobile ? 'PS' : 'PSchedule'}
                        </HeaderTitle>
                    </LogoLink>
                </Division>
                <Division>
                    {logged ? <UserActions /> : getLinksByPage()}
                </Division>
            </Header>
            <Main>{children}</Main>
        </Container>
    );
}
