import { useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateType } from '../../Store';
import Form from '../../Components/Core/Form';
import Field from '../../Components/Core/Field';
import Input from '../../Components/Core/Input';
import ToggleInput from '../../Components/Core/ToggleInput';
import { Container } from './Settings.styles';

export default function Settings() {
    const language = useRef<HTMLInputElement>(null);

    const logged = useSelector((state: StateType) => state.User.isLogged);
    if (!logged) return <Redirect to='/signin' />;

    return (
        <Container>
            <Form title='Settings' loading={false} onSubmit={() => {}}>
                <Field title='Language' name='language'>
                    <Input
                        ref={language}
                        name='language'
                        type='text'
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
                    <Input ref={language} name='language' type='checkbox' />
                </Field>
                <ToggleInput />
                <button>delete my account</button>
                <button>what info do PreciseSchedule know about you?</button>
            </Form>
        </Container>
    );
}
