import { useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { Container, Item, Link } from './Sidebar.styles';

export default function Sidebar() {
    const open = useSelector((state: RootState) => state.General.isSidebarOpen);

    return (
        <Container open={open}>
            <Item>
                <Link to='/'>home</Link>
            </Item>
            <Item>
                <Link to='/signup'>signup</Link>
            </Item>
            <Item>
                <Link to='/signin'>signin</Link>
            </Item>
            <Item>
                <Link to='/forgotpassword'>forgot password</Link>
            </Item>
            <Item>
                <Link to='/calendar'>calendar</Link>
            </Item>
            <Item>
                <Link to='/settings'>settings</Link>
            </Item>
            <Item>
                <Link to='/sample'>sample</Link>
            </Item>
            <Item>
                <Link to='/sample'>sample</Link>
            </Item>
        </Container>
    );
}
