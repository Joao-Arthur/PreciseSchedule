import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { StateType } from '../../Store';
import Form from '../../Components/Core/Form';
import Field from '../../Components/Core/Field';
import Input from '../../Components/Core/Input';
import User from '../../Domains/User';
import { Container } from './ForgotPassword.styles';

export default function ForgotPassword() {
    const dispatch = useDispatch();
    const email = useRef<HTMLInputElement>(null);

    const handleForgotPassword = () => {
        if (!email.current) return;

        dispatch(
            User.Creators.passwordForgot(
                new User.Builder().setEmail(email.current.value)
            )
        );
    };

    const logged = useSelector((state: StateType) => state.User.isLogged);
    const loading = useSelector((state: StateType) => state.User.loading);
    if (logged) return <Redirect to='/calendar' />;

    return (
        <Container>
            <Form
                title='send email to generate new password'
                loading={loading}
                onSubmit={handleForgotPassword}
            >
                <Field title='email' name='email'>
                    <Input ref={email} name='email' type='email' required />
                </Field>
            </Form>
        </Container>
    );
}
