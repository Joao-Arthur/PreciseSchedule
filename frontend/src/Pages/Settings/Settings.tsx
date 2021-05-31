import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateType } from '../../Store';
import Form from '../../Components/Core/Form';
import Field from '../../Components/Core/Field';
import { Text } from '../../Components/Core/Input';
import Toggle from '../../Components/Core/Toggle';
import { Container } from './Settings.styles';

export default function Settings() {
    const shouldLogin = useSelector(
        (state: StateType) => !state.User.isLogged && state.User.isVerified
    );
    if (shouldLogin) return <Redirect to='/signin' />;

    return (
        <Container>
            <Form title='Save settings' loading={false} onSubmit={() => {}}>
                <Field title='Language' name='language'>
                    <Text
                        name='language'
                        value=''
                        onChange={() => {}}
                        required
                    />
                </Field>
                <select value='english'>
                    <option value='english'>english</option>
                    <option value='portuguese'>portuguese</option>
                    <option value='spanish'>spanish</option>
                    <option value='german'>german</option>
                </select>
                <span>my account</span>
                <button>change password</button>
                <Field title='enable two factor authentication' name='language'>
                    <Toggle />
                </Field>
                <button>delete my account</button>
                <button>what info do PreciseSchedule know about you?</button>
            </Form>
        </Container>
    );
}
