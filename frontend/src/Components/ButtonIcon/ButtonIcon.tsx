import Icon from '../IconOld';
import { names } from '../IconOld/SVG';
import { Button } from './ButtonIcon.styles';

type props = {
    name: names;
    title?: string;
    size: number;
    color: string;
    onClick: () => void;
    className?: string;
    buttonSize: number;
};

export default function ButtonIcon({
    name,
    title,
    size,
    color,
    onClick,
    className,
    buttonSize
}: props) {
    return (
        <Button
            title={title}
            onClick={onClick}
            buttonSize={buttonSize}
            className={className}
        >
            <Icon name={name} size={size} color={color} />
        </Button>
    );
}
