import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { StateType } from '../../Store';
import Form from '../../Components/Core/Form';
import Field from '../../Components/Core/Field';
import { Text, Password } from '../../Components/Core/Input';
import User from '../../Domains/User';
import General from '../../Domains/General';
import {
    Container,
    RedirectContainer,
    FieldContainer,
    Title,
    Link,
    Label
} from './SignIn.styles';
import toast from 'react-hot-toast';

export default function SignIn() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSignIn() {
        if (!username) return;
        if (!password) return;

        dispatch(
            User.Creators.signIn(
                new User.Builder().setUsername(username).setPassword(password)
            )
        );
    }

    useEffect(() => {
        dispatch(General.Creators.setActualPage('signin'));
        return () => {
            dispatch(General.Creators.setActualPage(''));
        };
    }, [dispatch]);

    const logged = useSelector((state: StateType) => state.User.isLogged);
    const loading = useSelector((state: StateType) => state.User.loading);
    if (loading) toast.loading('logging in...');

    if (logged) return <Redirect to='/calendar' />;

    return (
        <Container>
            <Title>Sign in to PreciseSchedule</Title>
            <Form title='Sign in' loading={loading} onSubmit={handleSignIn}>
                <Field title='Username' name='username'>
                    <Text
                        name='username'
                        value={username}
                        onChange={setUsername}
                        required
                    />
                </Field>
                <FieldContainer>
                    <Label>
                        Password{' '}
                        <Link to='password/forgot'>Forgot password?</Link>
                    </Label>
                    <Password
                        name='password'
                        minLength={10}
                        value={password}
                        onChange={setPassword}
                        required
                    />
                </FieldContainer>
            </Form>
            <RedirectContainer>
                New to PreciseSchedule?{' '}
                <Link to='signup'>Create an account.</Link>
            </RedirectContainer>
        </Container>
    );
}
