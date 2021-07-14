import { Input } from './Input.styles';

export type passwordProps = {
    type: 'password';
    name: string;
    value: string;
    onChange: (newValue: string) => void;
    required?: boolean;
    minLength?: number;
};

export default function Password({
    name,
    value,
    onChange,
    required
}: passwordProps) {
    return (
        <Input
            name={name}
            type='password'
            value={value}
            onChange={e => onChange(e.target.value)}
            required={required}
        />
    );
}
