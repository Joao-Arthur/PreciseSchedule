import { SelectInput } from './Input.styles';

export type selectProps = {
    type: 'select';
    name: string;
    options: string[];
    value: string;
    onChange: (newValue: string) => void;
};

export default function Select({
    name,
    options,
    value,
    onChange
}: selectProps) {
    return (
        <SelectInput
            name={name}
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            {options.map(option => (
                <option value={option} key={option}>
                    {option}
                </option>
            ))}
        </SelectInput>
    );
}
