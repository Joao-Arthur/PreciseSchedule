import { useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { RedirectContainer, Subtitle, Title, Link } from './SignUp.styles';
import Form from '../../Components/Core/Form';
import Field from '../../Components/Core/Field';
import Input from '../../Components/Core/Input';
import { Creators } from '../../Store/General';
import Fetch from '../../Core/Fetch';
import UserBuilder from '../../Models/UserBuilder';

export default function SignUp() {
    const name = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const birthday = useRef<HTMLInputElement>(null);
    const username = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const dispatch = useDispatch();

    const handleSignUp = () => {
        if (!name.current) return;
        if (!email.current) return;
        if (!birthday.current) return;
        if (!birthday.current.valueAsDate) return;
        if (!username.current) return;
        if (!password.current) return;

        Fetch.post(
            'user/create',
            new UserBuilder()
                .setName(name.current.value)
                .setEmail(email.current.value)
                .setBirthday(birthday.current.valueAsDate)
                .setUsername(username.current.value)
                .setPassword(password.current.value)
        );
    };

    useEffect(() => {
        dispatch(Creators.setActualPage('signup'));
        return () => {
            dispatch(Creators.setActualPage(null));
        };
    }, [dispatch]);

    const logado = useSelector((state: RootState) => state.Auth.isLogged);
    if (logado) return <Redirect to='/calendar' />;

    return (
        <>
            <Subtitle>join PreciseSchedule</Subtitle>
            <Title>Create your account</Title>
            <Form title='Sign up' onSubmit={handleSignUp}>
                <Field title='Full name' name='name'>
                    <Input ref={name} name='name' type='text' required />
                </Field>
                <Field title='Email' name='email'>
                    <Input ref={email} name='email' type='email' required />
                </Field>
                <Field title='Birthday' name='birthday'>
                    <Input
                        ref={birthday}
                        name='birthday'
                        type='date'
                        required
                    />
                </Field>
                <Field title='Username' name='username'>
                    <Input
                        ref={username}
                        name='username'
                        type='text'
                        required
                    />
                </Field>
                <Field
                    title='Password'
                    name='password'
                    observation='At least 10 characters'
                >
                    <Input
                        ref={password}
                        name='password'
                        type='password'
                        required
                        minLength={10}
                    />
                </Field>
            </Form>
            <RedirectContainer>
                Already in PreciseSchedule? <Link to='signin'>Sign in.</Link>
            </RedirectContainer>
        </>
    );
}
