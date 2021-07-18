import { useState } from 'react';
import Modal from '../../../Modal';
import { ModalForm, Field, Group } from '../../../../Components/Form';
import {
    Container,
    Text,
    Actions,
    Info,
    Edit,
    Delete
} from './EventListItem.styles';

export default function Event() {
    const [isEditVisible, setIsEditVisible] = useState(false);
    const [isDeleteVisible, setIsDeleteVisible] = useState(false);

    const [name, setName] = useState('');
    const [category, setCategory] = useState('apointment');
    const [importance, setImportance] = useState('low');
    const [repeats, setRepeats] = useState(false);
    const [frequency, setFrequency] = useState('never');
    const [weekendRepeat, setWeekendRepeat] = useState(false);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [startTime, setStartTime] = useState('');
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [endTime, setEndTime] = useState('');
    const [browserNotification, setBrowserNotification] = useState(false);
    const [emailNotification, setEmailNotification] = useState(false);

    return (
        <>
            <Container>
                <Text>jesse's birthday</Text>
                <Actions>
                    <Info onClick={() => {}} />
                    <Edit onClick={() => setIsEditVisible(!isEditVisible)} />
                    <Modal
                        visible={isEditVisible}
                        title='edit "jesses birthday"'
                        onCancel={() => setIsEditVisible(false)}
                        onConfirm={() => setIsEditVisible(false)}
                    >
                        <ModalForm onSubmit={() => {}}>
                            <Field
                                type='text'
                                title='Name'
                                name='name'
                                value={name}
                                onChange={setName}
                                required
                            />
                            <Field
                                type='select'
                                title='Category'
                                name='category'
                                options={[
                                    'apointment',
                                    'meeting',
                                    'aniversary'
                                ]}
                                value={category}
                                onChange={setCategory}
                            />
                            <Group>
                                <Field
                                    type='date'
                                    title='Date Start'
                                    name='datestart'
                                    value={startDate}
                                    onChange={setStartDate}
                                    required
                                />
                                <Field
                                    type='time'
                                    title='Time Start'
                                    name='timestart'
                                    value={startTime}
                                    onChange={setStartTime}
                                    required
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
                                />
                                <Field
                                    type='time'
                                    title='Time end'
                                    name='timeend'
                                    value={endTime}
                                    onChange={setEndTime}
                                    required
                                />
                            </Group>
                            <Field
                                type='select'
                                title='Importance'
                                name='importance'
                                options={['high', 'average', 'low']}
                                value={importance}
                                onChange={setImportance}
                            />
                            <Field
                                type='toggle'
                                title='Repeat'
                                name='repeat'
                                value={repeats}
                                onChange={setRepeats}
                            />
                            <Field
                                type='select'
                                title='Frequency'
                                name='frequency'
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
                                value={frequency}
                                onChange={setFrequency}
                            />
                            <Field
                                type='toggle'
                                title='Repeat on weekend'
                                name='weekendRepeat'
                                value={weekendRepeat}
                                onChange={setWeekendRepeat}
                            />
                            <Group>
                                <Field
                                    type='toggle'
                                    title='Notificate on browser'
                                    name='browserNotification'
                                    value={browserNotification}
                                    onChange={setBrowserNotification}
                                />
                                <Field
                                    type='toggle'
                                    title='Notificate on email'
                                    name='emailNotification'
                                    value={emailNotification}
                                    onChange={setEmailNotification}
                                />
                            </Group>
                        </ModalForm>
                    </Modal>
                    <Delete
                        onClick={() => setIsDeleteVisible(!isDeleteVisible)}
                    />
                    <Modal
                        visible={isDeleteVisible}
                        title='delete "jesses birthday"'
                        onCancel={() => setIsDeleteVisible(false)}
                        onConfirm={() => setIsDeleteVisible(false)}
                    >
                        <p>This action can't be undone, are you sure?</p>
                    </Modal>
                </Actions>
            </Container>
        </>
    );
}
