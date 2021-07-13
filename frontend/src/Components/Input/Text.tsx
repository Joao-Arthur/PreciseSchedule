import { InputTypes } from './Input.types';
import { Input } from './Input.styles';

export type textProps = {
    type: InputTypes.text;
    name: string;
    value: string;
    onChange: (newValue: string) => void;
    required?: boolean;
};

export default function Text({ name, value, onChange, required }: textProps) {
    return (
        <Input
            name={name}
            type='text'
            value={value}
            onChange={e => onChange(e.target.value)}
            required={required}
        />
    );
}
