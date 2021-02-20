import { useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { Container, Item, CustomLink } from './Sidebar.styles';

export default function Sidebar() {
    const open = useSelector((state: RootState) => state.General.isSidebarOpen);

    return (
        <div style={{ display: 'flex' }}>
            <Container open={open}>
                <Item>
                    <CustomLink to='/calendar'>calendar</CustomLink>
                </Item>
                <Item>
                    <CustomLink to='/signup'>signup</CustomLink>
                </Item>
                <Item>
                    <CustomLink to='/signin'>signin</CustomLink>
                </Item>
                <Item>
                    <CustomLink to='/'>home</CustomLink>
                </Item>
                <Item>
                    <CustomLink to='/sample'>sample</CustomLink>
                </Item>
                <Item>
                    <CustomLink to='/sample'>sample</CustomLink>
                </Item>
                <Item>
                    <CustomLink to='/sample'>sample</CustomLink>
                </Item>
                <Item>
                    <CustomLink to='/sample'>sample</CustomLink>
                </Item>
            </Container>
        </div>
    );
}
