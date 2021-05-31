import { ReactChild } from 'react';
import { Container, Label, Observation } from './Field.styles';

interface Props {
    children: ReactChild;
    title: string;
    name: string;
    notice?: string;
}

export default function FormField({ children, title, name, notice }: Props) {
    return (
        <Container>
            <Label htmlFor={name}>{title}</Label>
            {children}
            {notice ? <Observation>{notice}</Observation> : null}
        </Container>
    );
}
