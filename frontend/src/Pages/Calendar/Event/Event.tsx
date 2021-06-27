import { useState } from 'react';
import Modal from '../../Modal';
import ButtonIcon from '../../../Components/ButtonIcon';
import { Container, Actions } from './Event.styles';

export default function Event() {
    const [isEditVisible, setIsEditVisible] = useState(false);
    const [isDeleteVisible, setIsDeleteVisible] = useState(false);

    return (
        <>
            <Container>
                <span>jesse's birthday</span>
                <Actions>
                    <ButtonIcon
                        name='edit'
                        size={15}
                        color='gray'
                        buttonSize={30}
                        onClick={() => setIsEditVisible(!isEditVisible)}
                    />
                    <ButtonIcon
                        name='close'
                        size={15}
                        color='gray'
                        buttonSize={30}
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
