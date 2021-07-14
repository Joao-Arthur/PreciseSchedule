import { Input } from './Input.styles';

export type dateProps = {
    type: 'date';
    name: string;
    value: Date | null;
    onChange: (newValue: Date | null) => void;
    required?: boolean;
};

export default function Date({ name, value, onChange, required }: dateProps) {
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
