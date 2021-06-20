import { ReactChild } from 'react';
import ReactDOM from 'react-dom';
import { Container } from './Modal.styles';

type props = {
    children: ReactChild;
};

export default function Modal({ children }: props) {
    const modalRoot = document.getElementById('modal');
    return modalRoot
        ? ReactDOM.createPortal(<Container>{children}</Container>, modalRoot)
        : null;
}
