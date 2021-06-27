import ReactDOM from 'react-dom';
import { ReactChild } from 'react';
import Modal from './Modal';

export type modalProps = {
    children: ReactChild;
};

type managerProps = modalProps & {
    visible: boolean;
};

export default function ModalManager({ children, visible }: managerProps) {
    if (!visible) return null;
    const modalRoot = document.getElementById('modal');
    if (!modalRoot) return null;

    return ReactDOM.createPortal(<Modal>{children}</Modal>, modalRoot);
}
