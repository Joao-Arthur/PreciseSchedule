import { everyInputProps } from './type';
import { Input } from './Input.styles';

export type textProps = everyInputProps & {
    type: 'text';
    value: string;
    onChange: (newValue: string) => void;
};

export default function Text({
    name,
    value,
    onChange,
    required,
    readOnly
}: textProps) {
    return (
        <Input
            name={name}
            type='text'
            value={value}
            onChange={e => onChange(e.target.value)}
            required={required}
            readOnly={readOnly}
        />
    );
}
