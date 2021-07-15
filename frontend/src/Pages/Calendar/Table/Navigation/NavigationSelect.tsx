import { Select } from './Navigation.styles';

export type props = {
    name: string;
    type: 'select';
    options: string[];
    value: string;
    onChange: (newValue: string) => void;
};

export default function NavigationSelect({
    name,
    options,
    value,
    onChange
}: props) {
    return (
        <Select
            name={name}
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            {options.map(option => (
                <option value={option} key={option}>
                    {option}
                </option>
            ))}
        </Select>
    );
}
