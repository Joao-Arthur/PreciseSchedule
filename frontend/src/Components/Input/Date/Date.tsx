import { Input } from '../Input.styles';

type props = {
    name: string;
    value: Date | null;
    onChange: (newValue: Date | null) => void;
    required?: boolean;
};

export default function Date({ name, value, onChange, required }: props) {
    return (
        <Input
            name={name}
            type='date'
            value={value?.toISOString().slice(0, 10)}
            onChange={e => onChange(e.target.valueAsDate)}
            required={required}
        />
    );
}
