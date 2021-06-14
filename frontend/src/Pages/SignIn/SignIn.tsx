import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from 'react-query';
import { Redirect } from 'react-router-dom';
import toast from 'react-hot-toast';
import Cryptography from '../../Core/Cryptography';
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

export default function SignIn() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { isLoading, data, mutate } = useMutation('signIn', () => {
        const signIn = User.API.signIn({
            username,
            password: Cryptography.encryptRSA(password)
        });
        toast.promise(
            signIn,
            {
                loading: 'logging in...',
                error: 'User not found!',
                success: `Welcome ${username}`
            },
            {
                style: {
                    minWidth: '250px'
                }
            }
        );

        return signIn;
    });

    if (data?.token) {
        dispatch(User.Creators.signInSuccess(data.token));
    }

    function handleSignIn() {
        if (!username) return;
        if (!password) return;
        mutate();
    }

    useEffect(() => {
        dispatch(General.Creators.setActualPage('signin'));
        return () => {
            dispatch(General.Creators.setActualPage(''));
        };
    }, [dispatch]);

    const logged = useSelector((state: StateType) => state.User.isLogged);

    if (logged) return <Redirect to='/calendar' />;

    return (
        <Container>
            <Title>Sign in to PreciseSchedule</Title>
            <Form title='Sign in' loading={isLoading} onSubmit={handleSignIn}>
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
