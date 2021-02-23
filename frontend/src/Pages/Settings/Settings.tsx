import { Container } from './Settings.styles';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store';

export default function Settings() {
    const logado = useSelector((state: RootState) => state.Auth.isLogged);
    if (!logado) return <Redirect to='/signin' />;

    return (
        <Container>
            <p>language</p>
            <p>english</p>
            <p>portuguese</p>
            <p>spanish</p>
            <p>german</p>
            <p>my account</p>
            <p>change password</p>
            <p>enable two factor authentication</p>
            <p>delete my account</p>
            <p>what info do PreciseSchedule know about you?</p>
        </Container>
    );
}
