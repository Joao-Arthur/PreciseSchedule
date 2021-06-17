import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from 'react-query';
import toast from 'react-hot-toast';
import { StateType } from '../../Store';
import Form from '../../Components/Core/Form';
import Field from '../../Components/Core/Field';
import { Date, Email, Text, Password } from '../../Components/Core/Input';
import User from '../../Domains/User';
import General from '../../Domains/General';
import { Container, RedirectContainer, Title, Link } from './SignUp.styles';

export default function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthdate] = useState<Date | null>(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState('');

    const dispatch = useDispatch();

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
        toast.promise(
            signUp,
            {
                loading: 'registering you...',
                error: 'We were unable to register you!',
                success: `Welcome ${username}`
            },
            {
                style: {
                    minWidth: '250px'
                }
            }
        );

        return signUp;
    });

    const loading = useSelector((state: StateType) => state.User.loading);

    return (
        <Container>
            <Title>Create your account</Title>
            <Form title='Sign up' loading={loading} onSubmit={handleSignUp}>
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
            <RedirectContainer>
                Already in PreciseSchedule? <Link to='signin'>Sign in.</Link>
            </RedirectContainer>
        </Container>
    );
}
