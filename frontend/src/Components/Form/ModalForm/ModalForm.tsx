import { ReactChild, FormEvent } from 'react';
import { Container, CustomForm } from './ModalForm.styles';

type props = {
    onSubmit: () => void;
    children: ReactChild | ReactChild[];
};

export default function ModalForm({ onSubmit, children }: props) {
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        onSubmit();
    }

    return (
        <Container>
            <CustomForm onSubmit={handleSubmit}>{children}</CustomForm>
        </Container>
    );
}
