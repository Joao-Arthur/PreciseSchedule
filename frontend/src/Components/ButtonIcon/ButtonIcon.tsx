import Icon from '../Icon';
import { names } from '../Icon/SVG';
import { Button } from './ButtonIcon.styles';

type props = {
    name: names;
    size: number;
    color: string;
    onClick: () => void;
    className?: string;
};

export default function ButtonIcon({
    onClick,
    name,
    size,
    color,
    className
}: props) {
    return (
        <Button onClick={onClick} className={className}>
            <Icon name={name} size={size} color={color} />
        </Button>
    );
}
