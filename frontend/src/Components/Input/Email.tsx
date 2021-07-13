import { InputTypes } from './Input.types';
import { Input } from './Input.styles';

export type emailProps = {
    type: InputTypes.email;
    name: string;
    value: string;
    onChange: (newValue: string) => void;
    required?: boolean;
};

export default function Email({ name, value, onChange, required }: emailProps) {
    return (
        <Input
            name={name}
            type='email'
            value={value}
            onChange={e => onChange(e.target.value)}
            required={required}
        />
    );
}
