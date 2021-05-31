import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateType } from '../../Store';
import Form from '../../Components/Core/Form';
import Field from '../../Components/Core/Field';
import { Select, Toggle } from '../../Components/Core/Input';
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
                <span>my account</span>
                <a href='/password/new'>change password</a>
                <Field
                    title='enable two factor authentication'
                    name='twoFactor'
                >
                    <Toggle />
                </Field>
                <button>delete my account</button>
                <button>what info do PreciseSchedule know about you?</button>
            </Form>
        </Container>
    );
}
