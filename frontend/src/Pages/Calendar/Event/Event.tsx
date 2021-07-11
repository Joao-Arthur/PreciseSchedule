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
                    <Close
                        onClick={() => setIsDeleteVisible(!isDeleteVisible)}
                    />
                </Actions>
            </Container>
            <Modal visible={isEditVisible}>
                <>
                    <p>editar</p>
                    <button>editar</button>
                </>
            </Modal>
            <Modal visible={isDeleteVisible}>
                <>
                    <p>excluir</p>
                    <button>excluir</button>
                </>
            </Modal>
        </>
    );
}
