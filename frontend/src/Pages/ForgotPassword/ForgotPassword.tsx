import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { StateType } from '../../Store';
import Form from '../../Components/Core/Form';
import Field from '../../Components/Core/Field';
import Input from '../../Components/Core/Input';
import User from '../../Domains/User';
import { Container, RedirectContainer, Link } from './ForgotPassword.styles';

export default function ForgotPassword() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');

    const handleForgotPassword = () => {
        if (!email) return;

        dispatch(
            User.Creators.passwordForgot(new User.Builder().setEmail(email))
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
                    <Input
                        name='email'
                        type='email'
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </Field>
            </Form>
            <RedirectContainer>
                Already in PreciseSchedule? <Link to='/signin'>Sign in.</Link>
            </RedirectContainer>
        </Container>
    );
}
