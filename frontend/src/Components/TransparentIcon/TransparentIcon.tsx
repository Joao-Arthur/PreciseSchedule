import Icon from '../Icon';
import { names } from '../Icon/SVG';
import { Button } from './TransparentIcon.styles';

type props = {
    name: names;
    size: number;
    color: string;
    onClick: () => void;
};

export default function TransparentIcon({ onClick, name, size, color }: props) {
    return (
        <Button onClick={onClick}>
            <Icon name={name} size={size} color={color} />
        </Button>
    );
}
