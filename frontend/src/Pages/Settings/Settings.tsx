import { Container } from './Settings.styles';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store';

export default function Settings() {
    const logado = useSelector((state: RootState) => state.Auth.isLogged);
    if (!logado) return <Redirect to='/signin' />;

    return <Container>configurações</Container>;
}
