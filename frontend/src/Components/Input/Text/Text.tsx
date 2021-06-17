import { Input } from '../Input.styles';

type props = {
    name: string;
    value: string;
    onChange: (newValue: string) => void;
    required?: boolean;
};

export default function Text({ name, value, onChange, required }: props) {
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
