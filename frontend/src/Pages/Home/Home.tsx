import { Header } from './Home.styles';
import { Link } from 'react-router-dom';

const Home = () => (
    <div>
        <Header>
            <Link to='/signin'>sign in</Link>
            <Link to='/signup'>sign up</Link>
        </Header>
        <h1>welcome to precise schedule</h1>
    </div>
);

export default Home;
