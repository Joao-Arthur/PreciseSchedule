import Icon from '../Icon';
import { names } from '../Icon/SVG';
import { Transparent, Button } from './ButtonIcon.styles';

type design = 'transparent' | 'button';

type props = {
    name: names;
    size: number;
    color: string;
    onClick: () => void;
    className?: string;
    design: design;
};

export default function ButtonIcon({
    onClick,
    name,
    size,
    color,
    className,
    design
}: props) {
    let Container;
    if (design === 'transparent') {
        Container = Transparent;
    } else {
        Container = Button;
    }

    return (
        <Container onClick={onClick} className={className}>
            <Icon name={name} size={size} color={color} />
        </Container>
    );
}
