import { useEffect, useRef, FormEvent } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store';
import {
    FormContainer,
    RedirectContainer,
    FieldContainer,
    Input,
    Subtitle,
    Title,
    Link,
    Button,
    Label,
    P
} from './SignUp.styles';
import { Creators } from '../../Store/General';
import Fetch from '../../Core/Fetch';
import { UserSignUp } from '../../Models/User';

const SignUp = () => {
    const name = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const birthday = useRef<HTMLInputElement>(null);
    const username = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const dispatch = useDispatch();

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!name.current) return;
        if (!email.current) return;
        if (!birthday.current) return;
        if (!birthday.current.valueAsDate) return;
        if (!username.current) return;
        if (!password.current) return;

        console.log(
            name.current.value,
            email.current.value,
            birthday.current.valueAsDate,
            username.current.value,
            password.current.value
        );

        Fetch.post(
            'user/create',
            new UserSignUp(
                name.current.value,
                email.current.value,
                birthday.current.valueAsDate,
                username.current.value,
                password.current.value
            ).toSDK()
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
            <FormContainer>
                <form onSubmit={onSubmit}>
                    <FieldContainer>
                        <Label htmlFor='name'>Full name</Label>
                        <Input ref={name} name='name' type='text' required />
                    </FieldContainer>
                    <FieldContainer>
                        <Label htmlFor='email'>Email</Label>
                        <Input ref={email} name='email' type='email' required />
                    </FieldContainer>
                    <FieldContainer>
                        <Label htmlFor='birthday'>Birthday</Label>
                        <Input
                            ref={birthday}
                            name='birthday'
                            type='date'
                            onChange={e => console.log(e.target.value)}
                            required
                        />
                    </FieldContainer>
                    <FieldContainer>
                        <Label htmlFor='username'>Username</Label>
                        <Input
                            ref={username}
                            name='username'
                            type='text'
                            required
                        />
                    </FieldContainer>
                    <FieldContainer>
                        <Label htmlFor='password'>Password</Label>
                        <Input
                            ref={password}
                            name='password'
                            type='password'
                            required
                            minLength={10}
                        />
                        <P>At least 10 characters</P>
                    </FieldContainer>
                    <Button>Sign up</Button>
                </form>
            </FormContainer>
            <RedirectContainer>
                Already in PreciseSchedule? <Link to='signin'>Sign in.</Link>
            </RedirectContainer>
        </>
    );
};

export default SignUp;
