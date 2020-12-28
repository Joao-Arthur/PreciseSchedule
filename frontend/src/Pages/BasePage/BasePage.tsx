import { ReactChild } from 'react';
import { Link } from 'react-router-dom';
import {
    Header,
    HeaderTitle,
    ContentContainer,
    ChildrenContainer,
    Footer
} from './BasePage.styles';
import Sidebar from '../../Components/Sidebar';
import { useDispatch } from 'react-redux';
import { Creators } from '../../Store/SignIn';

interface Props {
    children: ReactChild;
}

const BasePage = ({ children }: Props) => {
    const dispatch = useDispatch();
    const signout = () => {
        dispatch(Creators.logout());
    };
    return (
        <>
            <Header>
                <HeaderTitle>título</HeaderTitle>
                <Link to='/signup'>Sign up</Link>
                <Link to='/signin'>Sign in</Link>
                <button onClick={signout}>Sign out</button>
            </Header>
            <ContentContainer>
                <Sidebar />
                <ChildrenContainer>{children}</ChildrenContainer>
            </ContentContainer>
            <Footer>muito shoow</Footer>
        </>
    );
};

export default BasePage;
