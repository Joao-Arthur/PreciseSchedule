import { useState } from 'react';
import Modal from '../../../Modal';
import Field from '../../../../Components/Field';
import { InputTypes } from '../../../../Components/Input';
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
                <Field
                    title='Name'
                    name='name'
                    type={InputTypes.text}
                    value={name}
                    onChange={setName}
                    required
                />
                <Field
                    title='Category'
                    name='category'
                    type={InputTypes.select}
                    options={['apointment', 'aniversary', 'meeting']}
                    value={category}
                    onChange={setCategory}
                />
                <Field
                    title='Date Start'
                    name='datestart'
                    type={InputTypes.date}
                    value={startDate}
                    onChange={setStartDate}
                    required
                />
                <Field
                    title='Time Start'
                    name='timestart'
                    type={InputTypes.time}
                    value={startTime}
                    onChange={setStartTime}
                    required
                />
                <Field
                    title='Date end'
                    name='dateend'
                    type={InputTypes.date}
                    value={endDate}
                    onChange={setEndDate}
                    required
                />
                <Field
                    title='Time end'
                    name='timeend'
                    type={InputTypes.time}
                    value={endTime}
                    onChange={setEndTime}
                    required
                />
                <Field
                    title='Importance'
                    name='importance'
                    type={InputTypes.select}
                    options={['high', 'average', 'low']}
                    value={importance}
                    onChange={setImportance}
                />
                <Field title='Repeat' name='repeat' type={InputTypes.toggle} />
                <Field
                    title='repeat'
                    name='repeat2'
                    type={InputTypes.select}
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
                <Field
                    title='Repeat on weekend'
                    name='repeatweekend'
                    type={InputTypes.toggle}
                />
                <Field
                    title='Send notification'
                    name='sendNotification'
                    type={InputTypes.toggle}
                />
                <Field
                    title='Send notification on email'
                    name='sendNotification2'
                    type={InputTypes.toggle}
                />
            </ModalForm>
        </Modal>
    );
}
