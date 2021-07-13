import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../../Store';
import Form from '../../Components/Form';
import Field from '../../Components/Field';
import Input, { InputTypes } from '../../Components/Input';
import User from '../../Domains/User';

export default function ForgotPassword() {
    const dispatch = useDispatch();
    const [password, setPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState('');

    function handleNewPassword() {
        if (!password) return;

        //username?
        dispatch(User.Creators.passwordNew({ password }));
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
                title='password'
                name='password'
                notice='At least 10 characters'
            >
                <Input
                    type={InputTypes.password}
                    name='password'
                    value={password}
                    onChange={setPassword}
                    required
                />
            </Field>
            <Field title='Type password again' name='passwordMatch'>
                <Input
                    type={InputTypes.password}
                    name='passwordMatch'
                    minLength={10}
                    value={passwordMatch}
                    onChange={setPasswordMatch}
                    required
                />
            </Field>
        </Form>
    );
}
