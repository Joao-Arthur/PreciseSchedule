import { useState } from 'react';
import Modal from '../../../Modal';
import { ModalForm, Field, Group } from '../../../../Components/Form';
import { Container, Text, Actions, Close, Edit } from './Event.styles';

export default function Event() {
    const [isEditVisible, setIsEditVisible] = useState(false);
    const [isDeleteVisible, setIsDeleteVisible] = useState(false);

    const [name, setName] = useState('');
    const [category, setCategory] = useState('apointment');
    const [importance, setImportance] = useState('low');
    const [repeat, setRepeat] = useState('never');
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [startTime, setStartTime] = useState('');
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [endTime, setEndTime] = useState('');

    return (
        <>
            <Container>
                <Text>jesse's birthday</Text>
                <Actions>
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
                            <Field title='Repeat' name='repeat' type='toggle' />
                            <Field
                                type='select'
                                title='repeat'
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
                            <Field
                                type='toggle'
                                title='Repeat on weekend'
                                name='weekendRepeat'
                            />
                            <Group>
                                <Field
                                    type='toggle'
                                    title='notificate on browser'
                                    name='browserNotification'
                                />
                                <Field
                                    type='toggle'
                                    title='notificate on email'
                                    name='emailNotification'
                                />
                            </Group>
                        </ModalForm>
                    </Modal>
                    <Close
                        onClick={() => setIsDeleteVisible(!isDeleteVisible)}
                    />
                    <Modal
                        visible={isDeleteVisible}
                        title='delete "jesses birthday"'
                        onCancel={() => setIsDeleteVisible(false)}
                        onConfirm={() => setIsDeleteVisible(false)}
                    >
                        <>
                            <p>This action can't be undone, are you sure?</p>
                        </>
                    </Modal>
                </Actions>
            </Container>
        </>
    );
}
