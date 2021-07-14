import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateType } from '../../Store';
import Form from '../../Components/Form';
import Field from '../../Components/Field';
import { InputTypes } from '../../Components/Input';

export default function Settings() {
    const [language, setLanguage] = useState('english');

    const shouldLogin = useSelector(
        (state: StateType) => !state.User.isLogged && state.User.isVerified
    );
    if (shouldLogin) return <Redirect to='/signin' />;

    return (
        <Form
            title='settings'
            action='SAVE SETTINGS'
            loading={false}
            onSubmit={() => {}}
        >
            <Field
                title='Language'
                name='language'
                type={InputTypes.select}
                options={['english', 'portuguese', 'spanish', 'german']}
                value={language}
                onChange={setLanguage}
            />
            <Field
                title='enable two factor authentication'
                name='twoFactor'
                type={InputTypes.toggle}
            />
            <a href='/password/new'>change password</a>
            <a href='#'>delete my account</a>
            <a href='#'>what info do PreciseSchedule know about you?</a>
        </Form>
    );
}
