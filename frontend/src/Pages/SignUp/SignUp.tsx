import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store';
import {
    FormContainer,
    RedirectContainer,
    FieldContainer,
    Input,
    Subtitle,
    Title,
    Link,
    Button,
    Label,
    P
} from './SignUp.styles';
import { Creators } from '../../Store/General';

const SignUp = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Creators.setActualPage('signup'));
        return () => {
            dispatch(Creators.setActualPage(null));
        };
    }, [dispatch]);

    const logado = useSelector((state: RootState) => state.Auth.isLogged);
    if (logado) return <Redirect to='/calendar' />;

    return (
        <>
            <Subtitle>join PreciseSchedule</Subtitle>
            <Title>Create your account</Title>
            <FormContainer>
                <FieldContainer>
                    <Label>Username</Label>
                    <Input type='text' />
                </FieldContainer>
                <FieldContainer>
                    <Label>Email address</Label>
                    <Input type='text' />
                </FieldContainer>
                <FieldContainer>
                    <Label>Password</Label>
                    <Input type='password' />
                    <P>At least 10 characters</P>
                </FieldContainer>
                <Button>Sign up</Button>
            </FormContainer>
            <RedirectContainer>
                Already in PreciseSchedule? <Link to='signin'>Sign in.</Link>
            </RedirectContainer>
        </>
    );
};

export default SignUp;
