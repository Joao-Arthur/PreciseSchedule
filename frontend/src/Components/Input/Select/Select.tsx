import { SelectInput } from './Select.styles';

type props = {
    options: string[];
    value: string;
    onChange: (newValue: string) => void;
};

export default function Select({ options, value, onChange }: props) {
    return (
        <SelectInput value={value} onChange={e => onChange(e.target.value)}>
            {options.map(option => (
                <option value={option} key={option}>
                    {option}
                </option>
            ))}
        </SelectInput>
    );
}
