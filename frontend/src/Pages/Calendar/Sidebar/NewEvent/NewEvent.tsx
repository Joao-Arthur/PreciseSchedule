import { useState } from 'react';
import Modal from '../../../Modal';
import Field from '../../../../Components/Field';
import Input, { InputTypes } from '../../../../Components/Input';
import ModalForm from '../../../../Components/ModalForm';

type props = {
    visible: boolean;
    hide: () => void;
};

export default function NewEvent({ visible, hide }: props) {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('apointment');
    const [importance, setImportance] = useState('low');
    const [repeat, setRepeat] = useState('never');
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
                <Field title='Name' name='name'>
                    <Input
                        type={InputTypes.text}
                        name='name'
                        value={name}
                        onChange={setName}
                        required
                    />
                </Field>
                <Field title='Category' name='category'>
                    <Input
                        type={InputTypes.select}
                        name='category'
                        options={['apointment', 'aniversary', 'meeting']}
                        value={category}
                        onChange={setCategory}
                    />
                </Field>
                <Field title='Date Start' name='datestart'>
                    <Input
                        type={InputTypes.date}
                        name='datestart'
                        value={startDate}
                        onChange={setStartDate}
                        required
                    />
                </Field>
                <Field title='Time Start' name='timestart'>
                    <Input
                        type={InputTypes.time}
                        name='timestart'
                        value={startTime}
                        onChange={setStartTime}
                        required
                    />
                </Field>
                <Field title='Date end' name='dateend'>
                    <Input
                        type={InputTypes.date}
                        name='dateend'
                        value={endDate}
                        onChange={setEndDate}
                        required
                    />
                </Field>
                <Field title='Time end' name='timeend'>
                    <Input
                        type={InputTypes.time}
                        name='timeend'
                        value={endTime}
                        onChange={setEndTime}
                        required
                    />
                </Field>
                <Field title='Importance' name='importance'>
                    <Input
                        type={InputTypes.select}
                        name='importance'
                        options={['high', 'average', 'low']}
                        value={importance}
                        onChange={setImportance}
                    />
                </Field>
                <Field title='Repeat' name='repeat'>
                    <Input type={InputTypes.toggle} name='repeat' />
                </Field>
                <Field title='repeat' name='repeat2'>
                    <Input
                        type={InputTypes.select}
                        name='repeat2'
                        options={[
                            'everyday',
                            'day on / day off',
                            'once a week',
                            'once 2 weeks',
                            'once a month',
                            'once 6 months',
                            'once a year',
                            'once 2 years',
                            'once 5 years',
                            'once 10 years',
                            'never'
                        ]}
                        value={repeat}
                        onChange={setRepeat}
                    />
                </Field>
                <Field title='Repeat on weekend' name='repeatweekend'>
                    <Input type={InputTypes.toggle} name='repeatweekend' />
                </Field>
                <Field title='Send notification' name='sendNotification'>
                    <Input type={InputTypes.toggle} name='sendNotification' />
                </Field>
                <Field
                    title='Send notification on email'
                    name='sendNotification2'
                >
                    <Input type={InputTypes.toggle} name='sendNotification2' />
                </Field>
            </ModalForm>
        </Modal>
    );
}
