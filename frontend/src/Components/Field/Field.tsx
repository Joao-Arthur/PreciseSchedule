import { ReactElement } from 'react';
import Input from '../Input';
import { inputProps } from '../Input/Input';
import { Container, Label, Observation } from './Field.styles';

type fieldProps = {
    title: string;
    extraInfo?: ReactElement<any, any>;
    notice?: string;
};

type props = inputProps & fieldProps;

export default function Field(props: props) {
    return (
        <Container>
            <Label htmlFor={props.name}>
                {props.title} {props.extraInfo || null}
            </Label>
            <Input {...props} />
            {props.notice ? <Observation>{props.notice}</Observation> : null}
        </Container>
    );
}
