import { useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store';
import Form from '../../Components/Core/Form';
import Field from '../../Components/Core/Field';
import Input from '../../Components/Core/Input';
import Fetch from '../../Core/Fetch';
import UserBuilder from '../../Domains/User/User.Builder';
import { Creators as GeneralActions } from '../../Store/General';

export default function ForgotPassword() {
    const dispatch = useDispatch();
    const email = useRef<HTMLInputElement>(null);

    const handleForgotPassword = () => {
        if (!email.current) return;

        Fetch.post(
            'user/forgotpassword',
            new UserBuilder().setEmail(email.current.value)
        );
    };

    useEffect(() => {
        dispatch(GeneralActions.setActualPage('forgotpassword'));
        return () => {
            dispatch(GeneralActions.setActualPage(null));
        };
    }, [dispatch]);

    const logado = useSelector((state: RootState) => state.Auth.isLogged);
    if (logado) return <Redirect to='/calendar' />;

    return (
        <Form
            title='enviar link para criar nova senha'
            onSubmit={handleForgotPassword}
        >
            <Field title='email' name='email'>
                <Input ref={email} name='email' type='email' required></Input>
            </Field>
        </Form>
    );
}
