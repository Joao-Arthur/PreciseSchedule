import { everyInputProps } from './type';
import { Input } from './Input.styles';

export type emailProps = everyInputProps & {
    type: 'email';
    value: string;
    onChange: (newValue: string) => void;
};

export default function Email({
    name,
    value,
    onChange,
    required,
    readOnly
}: emailProps) {
    return (
        <Input
            name={name}
            type='email'
            value={value}
            onChange={e => onChange(e.target.value)}
            required={required}
            readOnly={readOnly}
        />
    );
}
