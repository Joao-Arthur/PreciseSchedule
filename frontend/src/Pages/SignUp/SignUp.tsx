import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store';
import {
    FormContainer,
    RedirectContainer,
    FieldContainer,
    Input,
    Subtitle,
    Title,
    Anchor,
    Button,
    Label,
    P
} from './SignUp.styles';

const SignUp = () => {
    const logado = useSelector((state: RootState) => state.SignIn.isLogged);
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
                Already in PreciseSchedule? <Anchor href='#'>Sign in</Anchor>
            </RedirectContainer>
        </>
    );
};

export default SignUp;
