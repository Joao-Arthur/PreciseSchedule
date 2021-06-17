import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateType } from '../../Store';
import Form from '../../Components/Form';
import Field from '../../Components/Field';
import { Select, Toggle } from '../../Components/Input';
import { Container } from './Settings.styles';

export default function Settings() {
    const [language, setLanguage] = useState('english');

    const shouldLogin = useSelector(
        (state: StateType) => !state.User.isLogged && state.User.isVerified
    );
    if (shouldLogin) return <Redirect to='/signin' />;

    return (
        <Container>
            <Form title='Save settings' loading={false} onSubmit={() => {}}>
                <Field title='Language' name='language'>
                    <Select
                        options={['english', 'portuguese', 'spanish', 'german']}
                        value={language}
                        onChange={setLanguage}
                    />
                </Field>
                <Field
                    title='enable two factor authentication'
                    name='twoFactor'
                >
                    <Toggle />
                </Field>
                <a href='/password/new'>change password</a>
                <a href='#'>delete my account</a>
                <a href='#'>what info do PreciseSchedule know about you?</a>
            </Form>
        </Container>
    );
}
