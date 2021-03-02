import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import General from '../../Domains/General';
import { Container } from './NotFound.styles';

export default function NotFound() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(General.Creators.setActualPage('notfound'));
        return () => {
            dispatch(General.Creators.setActualPage(''));
        };
    }, [dispatch]);

    return (
        <Container>
            <h3>page not found</h3>
        </Container>
    );
}
