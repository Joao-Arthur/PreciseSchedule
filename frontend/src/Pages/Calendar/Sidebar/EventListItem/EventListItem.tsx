import { useState } from 'react';
import Modal from '../../../Modal';
import EventRegister from '../../EventRegister';
import {
    Container,
    Text,
    Actions,
    Info,
    Edit,
    Delete
} from './EventListItem.styles';

export default function Event() {
    const [isInfoVisible, setIsInfoVisible] = useState(false);
    const [isEditVisible, setIsEditVisible] = useState(false);
    const [isDeleteVisible, setIsDeleteVisible] = useState(false);

    return (
        <Container>
            <Text>jesse's birthday</Text>
            <Actions>
                <Info onClick={() => setIsInfoVisible(true)} />
                <EventRegister
                    visible={isInfoVisible}
                    hide={() => setIsInfoVisible(false)}
                    day={new Date()}
                    mode='INFO'
                />
                <Edit onClick={() => setIsEditVisible(true)} />
                <EventRegister
                    visible={isEditVisible}
                    hide={() => setIsEditVisible(false)}
                    day={new Date()}
                    mode='EDIT'
                />
                <Delete onClick={() => setIsDeleteVisible(true)} />
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
    );
}
