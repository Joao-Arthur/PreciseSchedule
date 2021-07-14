import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useMutation } from 'react-query';
import Toast from '../../Core/Toast';
import Form from '../../Components/Form';
import Link from '../../Components/Link';
import Field from '../../Components/Field';
import { InputTypes } from '../../Components/Input';
import User from '../../Domains/User';
import General from '../../Domains/General';

export default function SignIn() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { isLoading, data, mutate } = useMutation('signIn', () => {
        const signIn = User.API.signIn({
            username,
            password
        });
        return Toast(signIn, {
            loading: 'logging in...',
            error: 'User not found!',
            success: `Welcome ${username}`
        });
    });

    if (data?.token) dispatch(User.Creators.signIn(data.token));

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

    return (
        <Form
            title='Sign in'
            action='SIGN IN'
            loading={isLoading}
            onSubmit={handleSignIn}
            footer={
                <span>
                    New to PreciseSchedule?{' '}
                    <Link to='signup' underline>
                        Create an account
                    </Link>
                </span>
            }
        >
            <Field
                title='Username'
                name='username'
                type={InputTypes.text}
                value={username}
                onChange={setUsername}
                required
            />
            <Field
                title='Password'
                name='password'
                extraInfo={
                    <Link to='password/forgot' underline>
                        Forgot password?
                    </Link>
                }
                type={InputTypes.password}
                minLength={10}
                value={password}
                onChange={setPassword}
                required
            />
        </Form>
    );
}
