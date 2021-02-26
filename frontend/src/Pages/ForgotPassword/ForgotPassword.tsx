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
    const email = useRef<HTMLInputElement>(null);

    const handleForgotPassword = () => {
        if (!email.current) return;

        dispatch(
            User.Creators.passwordForgot(
                new User.Builder().setEmail(email.current.value)
            )
        );
    };

    useEffect(() => {
        dispatch(General.Creators.setActualPage('forgotpassword'));
        return () => {
            dispatch(General.Creators.setActualPage(null));
        };
    }, [dispatch]);

    const logado = useSelector((state: StateType) => state.User.isLogged);
    if (logado) return <Redirect to='/calendar' />;

    return (
        <Form
            title='send link to email to generate new password'
            onSubmit={handleForgotPassword}
        >
            <Field title='email' name='email'>
                <Input ref={email} name='email' type='email' required></Input>
            </Field>
        </Form>
    );
}
