import { useState } from 'react';
import Modal from '../../../Modal';
import Field from '../../../../Components/Field';
import { Select, Toggle, Text, Date, Time } from '../../../../Components/Input';
import ModalForm from '../../../../Components/ModalForm';

type props = {
    visible: boolean;
    hide: () => void;
};

export default function NewEvent({ visible, hide }: props) {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('apointment');
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [startTime, setStartTime] = useState('');
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [endTime, setEndTime] = useState('');

    return (
        <Modal
            visible={visible}
            title='create new event'
            onCancel={hide}
            onConfirm={hide}
        >
            <ModalForm onSubmit={() => {}}>
                <Field title='Event name' name='name'>
                    <Text
                        name='name'
                        value={name}
                        onChange={setName}
                        required
                    />
                </Field>
                <Field title='Date Start' name='datestart'>
                    <Date
                        name='datestart'
                        value={startDate}
                        onChange={setStartDate}
                        required
                    />
                </Field>
                <Field title='Time Start' name='timestart'>
                    <Time
                        name='timestart'
                        value={startTime}
                        onChange={setStartTime}
                        required
                    />
                </Field>
                <Field title='Date end' name='dateend'>
                    <Date
                        name='dateend'
                        value={endDate}
                        onChange={setEndDate}
                        required
                    />
                </Field>
                <Field title='Time end' name='timeend'>
                    <Time
                        name='timeend'
                        value={endTime}
                        onChange={setEndTime}
                        required
                    />
                </Field>
                <Field title='Language' name='language'>
                    <Select
                        options={['apointment', 'aniversary', 'meeting']}
                        value={category}
                        onChange={setCategory}
                    />
                </Field>
                {/*<Field
                    title='enable two factor authentication'
                    name='twoFactor'
                >
                    <Toggle />
                </Field>*/}
            </ModalForm>
        </Modal>
    );
}
