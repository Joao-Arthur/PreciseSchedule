import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useMutation } from 'react-query';
import Toast from '../../Core/Toast';
import Form from '../../Components/Form';
import Field from '../../Components/Field';
import Link from '../../Components/Link';
import { Date, Email, Text, Password } from '../../Components/Input';
import User from '../../Domains/User';
import General from '../../Domains/General';

export default function SignUp() {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthdate] = useState<Date | null>(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState('');

    const { isLoading, data, mutate } = useMutation('signUp', () => {
        const signUp = User.API.signUp({
            firstName,
            lastName,
            email,
            //null is unassignable to undefined
            birthdate: birthdate ? birthdate : undefined,
            username,
            password,
            language: 'pt-BR'
        });
        return Toast(signUp, {
            loading: 'registering you...',
            error: 'We were unable to register you!',
            success: `Welcome ${username}`
        });
    });

    if (data?.token) dispatch(User.Creators.signUp(data.token));

    function handleSignUp() {
        if (!firstName) return;
        if (!lastName) return;
        if (!email) return;
        if (!birthdate) return;
        if (!username) return;
        if (!password) return;
        if (!passwordMatch) return;
        if (password !== passwordMatch) return;
        mutate();
    }

    useEffect(() => {
        dispatch(General.Creators.setActualPage('signup'));
        return () => {
            dispatch(General.Creators.setActualPage(''));
        };
    }, [dispatch]);

    return (
        <Form
            title='Create your account'
            action='SIGN UP'
            loading={isLoading}
            onSubmit={handleSignUp}
            footer={
                <span>
                    Already in PreciseSchedule?{' '}
                    <Link to='signin' underline>
                        Sign in
                    </Link>
                </span>
            }
        >
            <Field title='First name' name='firstname'>
                <Text
                    name='name'
                    value={firstName}
                    onChange={setFirstName}
                    required
                />
            </Field>
            <Field title='last name' name='lastname'>
                <Text
                    name='name'
                    value={lastName}
                    onChange={setLastName}
                    required
                />
            </Field>
            <Field title='Email' name='email'>
                <Email
                    name='email'
                    value={email}
                    onChange={setEmail}
                    required
                />
            </Field>
            <Field title='Birthdate' name='birthdate'>
                <Date
                    name='birthdate'
                    value={birthdate}
                    onChange={setBirthdate}
                    required
                />
            </Field>
            <Field title='Username' name='username'>
                <Text
                    name='username'
                    value={username}
                    onChange={setUsername}
                    required
                />
            </Field>
            <Field
                title='Password'
                name='password'
                notice='At least 10 characters'
            >
                <Password
                    name='password'
                    minLength={10}
                    value={password}
                    onChange={setPassword}
                    required
                />
            </Field>
            <Field title='Type password again' name='passwordMatch'>
                <Password
                    name='passwordMatch'
                    minLength={10}
                    value={passwordMatch}
                    onChange={setPasswordMatch}
                    required
                />
            </Field>
        </Form>
    );
}
