import { ReactChild, FormEvent } from 'react';
import {
    Container,
    Button,
    Title,
    FormContainer,
    CustomForm,
    FooterContainer,
    FooterContent
} from './Form.styles';

type props = {
    title: string;
    action: string;
    loading?: boolean;
    onSubmit: () => void;
    footer?: ReactChild | ReactChild[];
    children: ReactChild | ReactChild[];
};

export default function Form({
    title,
    action,
    loading,
    onSubmit,
    footer,
    children
}: props) {
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        onSubmit();
    }

    return (
        <Container>
            <Title>{title}</Title>
            <FormContainer>
                <CustomForm onSubmit={handleSubmit}>
                    {children}
                    <Button disabled={loading}>{action}</Button>
                </CustomForm>
            </FormContainer>
            {footer ? (
                <FooterContainer>
                    <FooterContent>{footer}</FooterContent>
                </FooterContainer>
            ) : null}
        </Container>
    );
}
