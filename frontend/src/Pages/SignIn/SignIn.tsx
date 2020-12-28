import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { Redirect } from 'react-router-dom';
import {
    FormContainer,
    RedirectContainer,
    FieldContainer,
    Input,
    Title,
    Link,
    Button,
    Label
} from './SignIn.styles';
import { Creators as AuthActions } from '../../Store/Auth';
import { Creators as GeneralActions } from '../../Store/General';

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
        dispatch(AuthActions.signIn({}));
    };

    useEffect(() => {
        dispatch(GeneralActions.setActualPage('signin'));
        return () => {
            dispatch(GeneralActions.setActualPage(null));
        };
    }, [dispatch]);

    const logado = useSelector((state: RootState) => state.Auth.isLogged);
    if (logado) return <Redirect to='/calendar' />;

    return (
        <>
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
                        Password <Link to='#'>Forgot password?</Link>
                    </Label>
                    <Input
                        type='password'
                        onChange={e => setPassword(e.target.value)}
                    />
                </FieldContainer>
                <Button onClick={loginClick}>Sign in</Button>
            </FormContainer>
            <RedirectContainer>
                New to PreciseSchedule?{' '}
                <Link to='signup'>Create an account.</Link>
            </RedirectContainer>
        </>
    );
};

export default SignIn;
