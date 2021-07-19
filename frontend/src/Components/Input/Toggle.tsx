import { everyInputProps } from './type';
import { Label, Input, Span } from './Toggle.styles';

export type toggleProps = everyInputProps & {
    type: 'toggle';
    value: boolean;
    onChange: (newValue: boolean) => void;
};

export default function Toggle({
    name,
    value,
    onChange,
    readOnly
}: toggleProps) {
    return (
        <Label>
            <Input
                type='checkbox'
                name={name}
                checked={value}
                disabled={readOnly}
                onChange={e => onChange(e.target.checked)}
            />
            <Span />
        </Label>
    );
}
