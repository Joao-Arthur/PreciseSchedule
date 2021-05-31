import { Input } from '../Input.styles';

type props = {
    name: string;
    value: string;
    onChange: (newValue: string) => void;
    required?: boolean;
};

export default function Email({ name, value, onChange, required }: props) {
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
