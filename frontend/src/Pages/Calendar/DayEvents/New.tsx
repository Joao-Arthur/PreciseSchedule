import Modal from '../../Modal';
import Field from '../../../Components/Field';
import { Select, Toggle, Text, Date } from '../../../Components/Input';
import Form from '../../../Components/Form';
import { useState } from 'react';

type props = {
    visible: boolean;
};

export default function New({ visible }: props) {
    const [name, setName] = useState('');
    const [start, setStart] = useState<Date | null>(null);

    return (
        <Modal
            visible={visible}
            title='create new event'
            onCancel={() => {}} //setIsNewEventVisible(false)}
            onConfirm={() => {}} // setIsNewEventVisible(false)}
        >
            <Form title='new event' action='add' onSubmit={() => {}}>
                <Field title='Event name' name='name'>
                    <Text
                        name='name'
                        value={name}
                        onChange={setName}
                        required
                    />
                </Field>
                <Field title='Start' name='start'>
                    <Date
                        name='start'
                        value={start}
                        onChange={setStart}
                        required
                    />
                </Field>

                {/*<Field title='Language' name='language'>
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
                */}
            </Form>
        </Modal>
    );
}
