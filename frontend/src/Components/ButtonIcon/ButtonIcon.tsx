import Icon from '../Icon';
import { names } from '../Icon/SVG/SVG';
import { Button } from './ButtonIcon.styles';

type props = {
    name: names;
    size: number;
    color: string;
    onClick: () => void;
    className?: string;
    buttonSize: number;
};

export default function ButtonIcon({
    onClick,
    name,
    size,
    color,
    buttonSize,
    className
}: props) {
    return (
        <Button onClick={onClick} buttonSize={buttonSize} className={className}>
            <Icon name={name} size={size} color={color} />
        </Button>
    );
}
