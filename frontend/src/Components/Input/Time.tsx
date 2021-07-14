import { everyInputProps } from './type';
import { Input } from './Input.styles';

export type timeProps = everyInputProps & {
    type: 'time';
    value: string;
    onChange: (newValue: string) => void;
};

export default function Time({
    name,
    value,
    onChange,
    required,
    readOnly
}: timeProps) {
    return (
        <Input
            name={name}
            type='time'
            value={value}
            onChange={e => onChange(e.target.value)}
            required={required}
            readOnly={readOnly}
        />
    );
}
