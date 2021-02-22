import { ReactChild } from 'react';
import { Container, Label, Observation } from './Field.styles';

interface Props {
    children: ReactChild;
    title: string;
    name: string;
    observation?: string;
}

export default function FormField({
    children,
    title,
    name,
    observation
}: Props) {
    return (
        <Container>
            <Label htmlFor={name}>{title}</Label>
            {children}
            {observation ? <Observation>{observation}</Observation> : null}
        </Container>
    );
}
