import { Container, Item, CustomLink } from './Sidebar.styles';

const Sidebar = () => (
    <div style={{ display: 'flex' }}>
        <Container>
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
                <CustomLink to='/home'>home</CustomLink>
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

export default Sidebar;
