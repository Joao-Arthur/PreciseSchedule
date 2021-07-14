import { everyInputProps } from './type';
import { Input } from './Input.styles';

export type dateProps = everyInputProps & {
    type: 'date';
    value: Date | null;
    onChange: (newValue: Date | null) => void;
};

export default function Date({
    name,
    value,
    onChange,
    required,
    readOnly
}: dateProps) {
    return (
        <Input
            name={name}
            type='date'
            value={value?.toISOString().slice(0, 10)}
            onChange={e => onChange(e.target.valueAsDate)}
            required={required}
            readOnly={readOnly}
        />
    );
}
