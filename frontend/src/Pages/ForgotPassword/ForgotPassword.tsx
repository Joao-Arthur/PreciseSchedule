import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../../Store';
import Form from '../../Components/Form';
import Field from '../../Components/Field';
import Link from '../../Components/Link';
import Input, { InputTypes } from '../../Components/Input';
import User from '../../Domains/User';

export default function ForgotPassword() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');

    function handleForgotPassword() {
        if (!email) return;

        dispatch(User.Creators.passwordForgot({ email }));
    }

    const loading = useSelector((state: StateType) => state.User.loading);

    return (
        <Form
            title='forgot password'
            action='CREATE NEW PASSWORD'
            loading={loading}
            onSubmit={handleForgotPassword}
            footer={
                <span>
                    Already in PreciseSchedule?{' '}
                    <Link to='/signin' underline>
                        Sign in
                    </Link>
                </span>
            }
        >
            <Field title='email' name='email'>
                <Input
                    type={InputTypes.email}
                    name='email'
                    required
                    value={email}
                    onChange={setEmail}
                />
            </Field>
        </Form>
    );
}
