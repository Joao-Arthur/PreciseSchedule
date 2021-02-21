import Icon from '../Icon';
import { names } from '../Icon/SVG';
import { Button } from './ButtonIcon.styles';

interface Props {
    name: names;
    size: number;
    color: string;
    onClick: () => void;
}

export default function ButtonIcon({ onClick, name, size, color }: Props) {
    return (
        <Button onClick={onClick}>
            <Icon name={name} size={size} color={color} />
        </Button>
    );
}
