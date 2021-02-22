import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store';
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
import { Creators as AuthActions } from '../../Store/Auth';
import { Creators as GeneralActions } from '../../Store/General';

export default function SignIn() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginClick = () => {
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
            <Form title='Sign in' onSubmit={loginClick}>
                <Field title='Username' name='username'>
                    <Input
                        name='username'
                        type='text'
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                </Field>
                <FieldContainer>
                    <Label>
                        Password <Link to='#'>Forgot password?</Link>
                    </Label>
                    <Input
                        type='password'
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </FieldContainer>
            </Form>
            <RedirectContainer>
                New to PreciseSchedule?{' '}
                <Link to='signup'>Create an account.</Link>
            </RedirectContainer>
        </>
    );
}
