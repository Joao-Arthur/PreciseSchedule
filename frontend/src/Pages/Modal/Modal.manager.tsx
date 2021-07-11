import ReactDOM from 'react-dom';
import Modal, { modalProps } from './Modal';

export type managerProps = modalProps & {
    visible: boolean;
};

export default function ModalManager({
    children,
    visible,
    ...props
}: managerProps) {
    if (!visible) return null;
    const modalRoot = document.getElementById('modal');
    if (!modalRoot) return null;

    return ReactDOM.createPortal(
        <Modal {...props}>{children}</Modal>,
        modalRoot
    );
}
