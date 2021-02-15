import SVG from './SVG';
import styled from 'styled-components';

interface Props {
    name: string;
    size: number;
    className?: string;
}

const Icon = ({ name, size, className }: Props) => {
    const SVGIcon = styled(SVG[name])`
        height: ${size}px;
        width: ${size}px;
    `;

    return <SVGIcon className={className} />;
};

export default Icon;
