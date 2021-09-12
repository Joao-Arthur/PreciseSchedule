import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateType } from '../../Store';
import { Form, Field } from '../../Components/Form';

export default function Settings() {
    const [language, setLanguage] = useState('english');
    const [twoFactorAuthentication, setTwoFactorAuthentication] =
        useState(false);

    const shouldLogin = useSelector(
        (state: StateType) => !state.User.isLogged && state.User.isVerified
    );
    if (shouldLogin) return <Redirect to='/signin' />;

    return (
        <Form
            title='Settings'
            action='SAVE SETTINGS'
            loading={false}
            onSubmit={() => {}}
        >
            <Field
                type='select'
                title='Language'
                name='language'
                options={['english', 'portuguese', 'spanish', 'german']}
                value={language}
                onChange={setLanguage}
            />
            <Field
                type='toggle'
                title='enable two factor authentication'
                name='twoFactorAuthentication'
                value={twoFactorAuthentication}
                onChange={setTwoFactorAuthentication}
            />
            <Field
                type='toggle'
                title='dark mode'
                name='theme'
                value={twoFactorAuthentication}
                onChange={setTwoFactorAuthentication}
            />
            <a href='/password/new'>change password</a>
            <a href='#'>delete my account</a>
            <a href='#'>what info do PreciseSchedule know about you?</a>
        </Form>
    );
}
