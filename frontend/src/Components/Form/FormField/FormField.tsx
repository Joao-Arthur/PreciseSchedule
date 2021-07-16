import { ReactElement } from 'react';
import Input, { inputProps } from '../../Input';
import { Container, Label, Observation } from './FormField.styles';

type formFieldProps = {
    title: string;
    extraInfo?: ReactElement<any, any>;
    notice?: string;
    invisible?: boolean;
};

type props = inputProps & formFieldProps;

export default function FormField(props: props) {
    return !props.invisible ? (
        <Container>
            <Label htmlFor={props.name}>
                {props.title} {props.extraInfo || null}
            </Label>
            <Input {...props} />
            {props.notice ? <Observation>{props.notice}</Observation> : null}
        </Container>
    ) : null;
}
