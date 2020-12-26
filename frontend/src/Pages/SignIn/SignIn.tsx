import { Link } from 'react-router-dom';
import {
    Header,
    FormContainer,
    RedirectContainer,
    FieldContainer,
    Input,
    Title,
    Anchor,
    Button,
    Label
} from './SignIn.styles';

const SignIn = () => {
    //fetch('http://localhost:8000/login', {
    //    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //    mode: 'cors', // no-cors, *cors, same-origin
    //    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //    credentials: 'same-origin', // include, *same-origin, omit
    //    headers: {
    //        'Content-Type': 'application/json'
    //        // 'Content-Type': 'application/x-www-form-urlencoded',
    //    },
    //    redirect: 'follow', // manual, *follow, error
    //    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //    body: JSON.stringify({ login: 'admin', senha: '1623' }) // body data type must match "Content-Type" header
    //}).then(res => {
    //    console.log(res);
    //});
    return (
        <>
            <Header>
                <Link to='/signup'>Sign up</Link>
            </Header>
            <Title>Sign in to PreciseSchedule</Title>
            <FormContainer>
                <FieldContainer>
                    <Label>Username</Label>
                    <Input type='text' />
                </FieldContainer>
                <FieldContainer>
                    <Label>
                        Password <Anchor href='#'>Forgot password?</Anchor>
                    </Label>
                    <Input type='password' />
                </FieldContainer>
                <Button>Sign in</Button>
            </FormContainer>
            <RedirectContainer>
                New to PreciseSchedule?
                <Anchor href='#'> Create an account.</Anchor>
            </RedirectContainer>
        </>
    );
};

export default SignIn;
