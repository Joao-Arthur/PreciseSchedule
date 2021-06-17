import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../../Store';
import Form from '../../Components/Core/Form';
import Field from '../../Components/Core/Field';
import { Email } from '../../Components/Core/Input';
import User from '../../Domains/User';
import { Container, RedirectContainer, Link } from './ForgotPassword.styles';

export default function ForgotPassword() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');

    function handleForgotPassword() {
        if (!email) return;

        dispatch(User.Creators.passwordForgot({ email }));
    }

    const loading = useSelector((state: StateType) => state.User.loading);

    return (
        <Container>
            <Form
                title='send email to generate new password'
                loading={loading}
                onSubmit={handleForgotPassword}
            >
                <Field title='email' name='email'>
                    <Email
                        name='email'
                        required
                        value={email}
                        onChange={setEmail}
                    />
                </Field>
            </Form>
            <RedirectContainer>
                Already in PreciseSchedule? <Link to='/signin'>Sign in.</Link>
            </RedirectContainer>
        </Container>
    );
}
