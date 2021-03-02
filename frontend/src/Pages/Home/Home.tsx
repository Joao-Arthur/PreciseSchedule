import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import General from '../../Domains/General';
import { Container } from './Home.styles';

export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(General.Creators.setActualPage('home'));
        return () => {
            dispatch(General.Creators.setActualPage(''));
        };
    }, [dispatch]);

    return (
        <Container>
            <h3>welcome to precise schedule</h3>
        </Container>
    );
}
