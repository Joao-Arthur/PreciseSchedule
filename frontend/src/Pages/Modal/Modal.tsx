import { ReactChild } from 'react';

import {
    Block,
    Container,
    Header,
    Title,
    Content,
    Footer,
    Button
} from './Modal.styles';

export type modalProps = {
    children: ReactChild;
    title: string;
    onCancel: () => void;
    onConfirm: () => void;
};

export default function Modal({
    children,
    title,
    onCancel,
    onConfirm
}: modalProps) {
    return (
        <Block>
            <Container>
                <Header>
                    <Title>{title}</Title>
                </Header>
                <Content>{children}</Content>
                <Footer>
                    <Button onClick={onCancel} secondary>
                        CANCEL
                    </Button>
                    <Button onClick={onConfirm}>CONFIRM</Button>
                </Footer>
            </Container>
        </Block>
    );
}
