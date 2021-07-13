import { SelectInput } from './Select.styles';

type props = {
    name: string;
    options: string[];
    value: string;
    onChange: (newValue: string) => void;
};

export default function Select({ name, options, value, onChange }: props) {
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
