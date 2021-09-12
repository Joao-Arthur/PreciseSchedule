import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../../Store';
import { Form, Field } from '../../Components/Form';
import Link from '../../Components/Link';
import User from '../../Domains/User';

export default function ForgotPassword() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');

    function handleForgotPassword() {
        if (!email) return;

        dispatch(User.Actions.passwordForgot({ email }));
    }

    const loading = useSelector((state: StateType) => state.User.loading);

    return (
        <Form
            title='Forgot your password'
            action='GENERATE NEW PASSWORD'
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
            <Field
                type='email'
                title='email'
                name='email'
                required
                value={email}
                onChange={setEmail}
            />
        </Form>
    );
}
