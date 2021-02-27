import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../../Store';
import { Redirect } from 'react-router-dom';
import {
    RedirectContainer,
    FieldContainer,
    Title,
    Link,
    Label
} from './SignIn.styles';
import Form from '../../Components/Core/Form';
import Field from '../../Components/Core/Field';
import Input from '../../Components/Core/Input';
import User from '../../Domains/User';
import General from '../../Domains/General';

export default function SignIn() {
    const dispatch = useDispatch();
    const username = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    function handleSignIn() {
        if (!username.current) return;
        if (!password.current) return;

        dispatch(
            User.Creators.signIn(
                new User.Builder()
                    .setUsername(username.current.value)
                    .setPassword(password.current.value)
            )
        );
    }

    useEffect(() => {
        dispatch(General.Creators.setActualPage('signin'));
        return () => {
            dispatch(General.Creators.setActualPage(null));
        };
    }, [dispatch]);

    const logado = useSelector((state: StateType) => state.User.isLogged);
    const loading = useSelector((state: StateType) => state.User.loading);
    if (logado) return <Redirect to='/calendar' />;

    return (
        <>
            <Title>Sign in to PreciseSchedule</Title>
            <Form title='Sign in' loading={loading} onSubmit={handleSignIn}>
                <Field title='Username' name='username'>
                    <Input
                        ref={username}
                        name='username'
                        type='text'
                        required
                    />
                </Field>
                <FieldContainer>
                    <Label>
                        Password{' '}
                        <Link to='password/forgot'>Forgot password?</Link>
                    </Label>
                    <Input ref={password} type='password' required />
                </FieldContainer>
            </Form>
            <RedirectContainer>
                New to PreciseSchedule?{' '}
                <Link to='signup'>Create an account.</Link>
            </RedirectContainer>
        </>
    );
}
