import { InputTypes } from './Input.types';
import { Label, Input, Span } from './Toggle.styles';

export type toggleProps = {
    type: InputTypes.toggle;
    name: string;
};

export default function Toggle({ name }: toggleProps) {
    return (
        <Label>
            <Input type='checkbox' name={name} />
            <Span />
        </Label>
    );
}
