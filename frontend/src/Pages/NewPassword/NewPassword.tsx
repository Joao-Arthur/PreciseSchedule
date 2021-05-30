import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { StateType } from '../../Store';
import Form from '../../Components/Core/Form';
import Field from '../../Components/Core/Field';
import Input from '../../Components/Core/Input';
import User from '../../Domains/User';
import { Container } from './NewPassword.styles';

export default function ForgotPassword() {
    const dispatch = useDispatch();
    const [password, setPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState('');

    const handleForgotPassword = () => {
        if (!password) return;

        dispatch(
            User.Creators.passwordForgot(
                new User.Builder().setPassword(password)
            )
        );
    };

    const logged = useSelector((state: StateType) => state.User.isLogged);
    const loading = useSelector((state: StateType) => state.User.loading);
    if (logged) return <Redirect to='/calendar' />;

    return (
        <Container>
            <Form
                title='generate new password'
                loading={loading}
                onSubmit={handleForgotPassword}
            >
                <Field
                    title='password'
                    name='password'
                    observation='At least 10 characters'
                >
                    <Input
                        name='password'
                        type='password'
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Field>
                <Field title='Type password again' name='passwordMatch'>
                    <Input
                        name='passwordMatch'
                        type='password'
                        required
                        minLength={10}
                        value={passwordMatch}
                        onChange={e => setPasswordMatch(e.target.value)}
                    />
                </Field>
            </Form>
        </Container>
    );
}
