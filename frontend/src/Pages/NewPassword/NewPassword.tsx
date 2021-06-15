import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { StateType } from '../../Store';
import Form from '../../Components/Core/Form';
import Field from '../../Components/Core/Field';
import { Password } from '../../Components/Core/Input';
import User from '../../Domains/User';
import { Container } from './NewPassword.styles';

export default function ForgotPassword() {
    const dispatch = useDispatch();
    const [password, setPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState('');

    function handleNewPassword() {
        if (!password) return;

        //username?
        dispatch(User.Creators.passwordNew({ password }));
    }

    const logged = useSelector((state: StateType) => state.User.isLogged);
    const loading = useSelector((state: StateType) => state.User.loading);
    if (logged) return <Redirect to='/calendar' />;

    return (
        <Container>
            <Form
                title='generate new password'
                loading={loading}
                onSubmit={handleNewPassword}
            >
                <Field
                    title='password'
                    name='password'
                    notice='At least 10 characters'
                >
                    <Password
                        name='password'
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
        </Container>
    );
}
