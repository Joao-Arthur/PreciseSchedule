import { Input } from './Input.styles';

export type timeProps = {
    type: 'time';
    name: string;
    value: string;
    onChange: (newValue: string) => void;
    required?: boolean;
};

export default function Time({ name, value, onChange, required }: timeProps) {
    return (
        <Input
            name={name}
            type='time'
            value={value}
            onChange={e => onChange(e.target.value)}
            required={required}
        />
    );
}
