import { everyInputProps } from './type';
import { Label, Input, Span } from './Toggle.styles';

export type toggleProps = everyInputProps & {
    type: 'toggle';
};

export default function Toggle({ name, readOnly }: toggleProps) {
    return (
        <Label>
            <Input type='checkbox' name={name} readOnly={readOnly} />
            <Span />
        </Label>
    );
}
