import { useState } from 'react';
import Modal from '../../Modal';
import { Container, Text, Actions, Close, Edit } from './Event.styles';

export default function Event() {
    const [isEditVisible, setIsEditVisible] = useState(false);
    const [isDeleteVisible, setIsDeleteVisible] = useState(false);

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
                        <>
                            <p>edit</p>
                        </>
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
