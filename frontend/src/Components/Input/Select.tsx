import { everyInputProps } from './type';
import { SelectInput } from './Input.styles';

export type selectProps = everyInputProps & {
    type: 'select';
    options: string[];
    value: string;
    onChange: (newValue: string) => void;
};

export default function Select({
    name,
    options,
    value,
    onChange,
    readOnly
}: selectProps) {
    return (
        <SelectInput
            name={name}
            value={value}
            onChange={e => onChange(e.target.value)}
            disabled={readOnly}
        >
            {options.map(option => (
                <option value={option} key={option}>
                    {option}
                </option>
            ))}
        </SelectInput>
    );
}
