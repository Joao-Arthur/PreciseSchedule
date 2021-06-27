import { modalProps } from './Modal.manager';
import { Container } from './Modal.styles';

export default function Modal({ children }: modalProps) {
    return <Container>{children}</Container>;
}
