import SVG, { names } from './SVG/SVG';
import styled from 'styled-components';

type props = {
    name: names;
    size: number;
    color: string;
    className?: string;
};

type iconProps = {
    size: number;
    color: string;
};

const SVGIcon = styled(SVG)<iconProps>`
    ${({ size }) =>
        `height: ${size}px;
         width: ${size}px;`}
    fill: ${({ color }) => color};
`;

export default function Icon({ name, size, className, color }: props) {
    return (
        <SVGIcon name={name} className={className} size={size} color={color} />
    );
}
