import SVG, { names } from './SVG';
import styled from 'styled-components';

interface Props {
    name: names;
    size: number;
    color: string;
    className?: string;
}

interface IconProps {
    size: number;
    color: string;
}

const SVGIcon = styled(SVG)<IconProps>`
    ${({ size }) =>
        `height: ${size}px;
         width: ${size}px;`}
    fill: ${({ color }) => color};
`;

export default function Icon({ name, size, className, color }: Props) {
    return (
        <SVGIcon name={name} className={className} size={size} color={color} />
    );
}
