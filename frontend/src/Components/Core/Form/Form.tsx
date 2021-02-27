import { ReactChild, FormEvent } from 'react';
import { Container, CustomForm } from './Form.styles';
import Button from '../Button';

interface Props {
    title: string;
    loading?: boolean;
    onSubmit: () => void;
    children: ReactChild | ReactChild[];
}

export default function Form({ title, loading, onSubmit, children }: Props) {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <Container>
            <CustomForm onSubmit={handleSubmit}>
                {children}
                <Button disabled={loading}>{title}</Button>
            </CustomForm>
        </Container>
    );
}
