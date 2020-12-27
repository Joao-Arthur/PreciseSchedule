import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Header,
    FormContainer,
    RedirectContainer,
    FieldContainer,
    Input,
    Title,
    Anchor,
    Button,
    Label
} from './SignIn.styles';
import { Creators } from '../../Store/SignIn';

const SignIn = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginClick = () => {
        //    fetch('http://localhost:8000/login', {
        //        method: 'POST',
        //        cache: 'no-cache',
        //        headers: {
        //            'Content-Type': 'application/json'
        //        },
        //        referrerPolicy: 'no-referrer',
        //        body: JSON.stringify({ login: username, senha: password })
        //    }).then(res => {
        //        console.log(res);
        //    });
        dispatch(Creators.signIn({}));
    };

    const signout = () => {
        dispatch(Creators.logout());
    };

    return (
        <>
            <Header>
                <Link to='/signup'>Sign up</Link>
            </Header>
            <Title>Sign in to PreciseSchedule</Title>
            <FormContainer>
                <FieldContainer>
                    <Label>Username</Label>
                    <Input
                        type='text'
                        onChange={e => setUsername(e.target.value)}
                    />
                </FieldContainer>
                <FieldContainer>
                    <Label>
                        Password <Anchor href='#'>Forgot password?</Anchor>
                    </Label>
                    <Input
                        type='password'
                        onChange={e => setPassword(e.target.value)}
                    />
                </FieldContainer>
                <Button onClick={loginClick}>Sign in</Button>
                <Button onClick={signout}>Sign out</Button>
                <Link to='/calendar'>calendar</Link>
            </FormContainer>
            <RedirectContainer>
                New to PreciseSchedule?
                <Anchor href='#'> Create an account.</Anchor>
            </RedirectContainer>
        </>
    );
};

export default SignIn;
