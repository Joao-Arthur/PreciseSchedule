import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../../Store';
import { Form, Field } from '../../Components/Form';
import User from '../../Domains/User';

export default function ForgotPassword() {
    const dispatch = useDispatch();
    const [password, setPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState('');

    function handleNewPassword() {
        if (!password) return;

        //username?
        dispatch(User.Actions.passwordNew({ password }));
    }

    const loading = useSelector((state: StateType) => state.User.loading);

    return (
        <Form
            title='new password'
            action='CREATE NEW PASSWORD'
            loading={loading}
            onSubmit={handleNewPassword}
        >
            <Field
                type='password'
                title='password'
                name='password'
                notice='At least 10 characters'
                value={password}
                onChange={setPassword}
                required
            />
            <Field
                type='password'
                title='Type password again'
                name='passwordMatch'
                minLength={10}
                value={passwordMatch}
                onChange={setPasswordMatch}
                required
            />
        </Form>
    );
}
