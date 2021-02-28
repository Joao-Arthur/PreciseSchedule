import { useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../../Store';
import Form from '../../Components/Core/Form';
import Field from '../../Components/Core/Field';
import Input from '../../Components/Core/Input';
import User from '../../Domains/User';
import General from '../../Domains/General';

export default function ForgotPassword() {
    const dispatch = useDispatch();
    const password = useRef<HTMLInputElement>(null);

    const handleForgotPassword = () => {
        if (!password.current) return;

        dispatch(
            User.Creators.passwordForgot(
                new User.Builder().setPassword(password.current.value)
            )
        );
    };

    useEffect(() => {
        dispatch(General.Creators.setActualPage('passwordNew'));
        return () => {
            dispatch(General.Creators.setActualPage(''));
        };
    }, [dispatch]);

    const logado = useSelector((state: StateType) => state.User.isLogged);
    const loading = useSelector((state: StateType) => state.User.loading);
    if (logado) return <Redirect to='/calendar' />;

    return (
        <Form
            title='generate new password'
            loading={loading}
            onSubmit={handleForgotPassword}
        >
            <Field title='password' name='password'>
                <Input
                    ref={password}
                    name='password'
                    type='password'
                    required
                />
            </Field>
        </Form>
    );
}
