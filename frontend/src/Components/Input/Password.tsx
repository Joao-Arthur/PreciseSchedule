import { everyInputProps } from './type';
import { Input } from './Input.styles';

export type passwordProps = everyInputProps & {
    type: 'password';
    value: string;
    onChange: (newValue: string) => void;
    minLength?: number;
};

export default function Password({
    name,
    value,
    onChange,
    required,
    readOnly
}: passwordProps) {
    return (
        <Input
            name={name}
            type='password'
            value={value}
            onChange={e => onChange(e.target.value)}
            required={required}
            readOnly={readOnly}
        />
    );
}
