import { Input } from '../Input.styles';

type props = {
    name: string;
    value: string;
    onChange: (newValue: string) => void;
    required?: boolean;
    minLength?: number;
};

export default function Password({ name, value, onChange, required }: props) {
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
