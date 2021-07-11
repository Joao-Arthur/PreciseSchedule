import { useSelector } from 'react-redux';
import { StateType } from '../../Store';
import { Container, Item, Link } from './Sidebar.styles';

export default function Sidebar() {
    const open = useSelector((state: StateType) => state.General.isSidebarOpen);

    return (
        <Container open={open}>
            <Item>
                <Link to='/'>calendar</Link>
            </Item>
            <Item>
                <Link to='/signup'>signup</Link>
            </Item>
            <Item>
                <Link to='/signin'>signin</Link>
            </Item>
            <Item>
                <Link to='/password/forgot'>forgot password</Link>
            </Item>
            <Item>
                <Link to='/password/new'>new password</Link>
            </Item>
            <Item>
                <Link to='/settings'>settings</Link>
            </Item>
            <Item>
                <Link to='/sample'>sample</Link>
            </Item>
        </Container>
    );
}
