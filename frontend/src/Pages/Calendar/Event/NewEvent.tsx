import { useState } from 'react';
import Modal from '../../Modal';
import { ModalForm, Field, Group } from '../../../Components/Form';

enum Mode {
    NEW = 'NEW',
    EDIT = 'EDIT',
    INFO = 'INFO'
}

type props = {
    visible: boolean;
    hide: () => void;
    day: Date;
    mode: keyof typeof Mode;
};

export default function EventRegister({ visible, hide, day, mode }: props) {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('apointment');
    const [importance, setImportance] = useState('low');
    const [repeats, setRepeats] = useState(false);
    const [frequency, setFrequency] = useState('never');
    const [weekendRepeat, setWeekendRepeat] = useState(false);
    const [startDate, setStartDate] = useState<Date | null>(day);
    const [startTime, setStartTime] = useState('00:00');
    const [endDate, setEndDate] = useState<Date | null>(day);
    const [endTime, setEndTime] = useState('23:59');
    const [browserNotification, setBrowserNotification] = useState(false);
    const [emailNotification, setEmailNotification] = useState(false);

    const isBirthday = category === 'birthday';
    const isNew = mode === 'NEW';
    const isEdit = mode === 'EDIT';
    const isInfo = mode === 'INFO';

    return (
        <Modal
            visible={visible}
            title={`create new event on ${day.toLocaleDateString()}`}
            onCancel={hide}
            onConfirm={hide}
        >
            <ModalForm onSubmit={() => {}}>
                <Field
                    type='text'
                    title='Name'
                    name='name'
                    value={name}
                    onChange={setName}
                    required
                    readOnly={isInfo}
                />
                <Group>
                    <Field
                        type='select'
                        title='Category'
                        name='category'
                        options={[
                            'apointment',
                            'meeting',
                            'birthday',
                            'party',
                            'date'
                        ]}
                        value={category}
                        onChange={setCategory}
                        readOnly={isInfo}
                    />
                    <Field
                        type='select'
                        title='Importance'
                        name='importance'
                        options={['high', 'average', 'low']}
                        value={importance}
                        onChange={setImportance}
                        readOnly={isInfo}
                    />
                </Group>
                <Group>
                    <Field
                        type='date'
                        title='Date Start'
                        name='datestart'
                        value={startDate}
                        onChange={setStartDate}
                        required
                        readOnly
                    />
                    <Field
                        type='time'
                        title='Time Start'
                        name='timestart'
                        value={isBirthday ? '00:00' : startTime}
                        onChange={setStartTime}
                        required
                        readOnly={isBirthday || isInfo}
                    />
                </Group>
                <Group>
                    <Field
                        type='date'
                        title='Date end'
                        name='dateend'
                        value={endDate}
                        onChange={setEndDate}
                        required
                        readOnly
                    />
                    <Field
                        type='time'
                        title='Time end'
                        name='timeend'
                        value={isBirthday ? '23:59' : endTime}
                        onChange={setEndTime}
                        required
                        readOnly={isBirthday || isInfo}
                    />
                </Group>
                <Group>
                    <Field
                        type='toggle'
                        title='Repeats'
                        name='repeats'
                        value={isBirthday || repeats}
                        onChange={setRepeats}
                        readOnly={isInfo}
                    />
                    <Field
                        type='toggle'
                        title='Repeats on weekend'
                        name='weekendRepeat'
                        value={weekendRepeat}
                        onChange={setWeekendRepeat}
                        readOnly={isInfo}
                        invisible={
                            isBirthday ||
                            !['everyday', 'every other day'].includes(frequency)
                        }
                    />
                </Group>
                <Field
                    type='select'
                    title='Frequency'
                    name='frequency'
                    options={[
                        'everyday',
                        'every other day',
                        'every week',
                        'every 2 weeks',
                        'every a month',
                        'every 6 months',
                        'every year',
                        'every 2 years',
                        'every 5 years',
                        'every 10 years',
                        'never'
                    ]}
                    value={isBirthday ? 'every year' : frequency}
                    onChange={setFrequency}
                    readOnly={isBirthday || isInfo}
                    invisible={!repeats && !isBirthday}
                />
                <Group>
                    <Field
                        type='toggle'
                        title='Notificate on browser'
                        name='browserNotification'
                        value={browserNotification}
                        onChange={setBrowserNotification}
                        readOnly={isInfo}
                    />
                    <Field
                        type='toggle'
                        title='Notificate on email'
                        name='emailNotification'
                        value={emailNotification}
                        onChange={setEmailNotification}
                        readOnly={isInfo}
                    />
                </Group>
            </ModalForm>
        </Modal>
    );
}
