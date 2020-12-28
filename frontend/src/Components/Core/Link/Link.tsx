import { ReactChild } from 'react';
import CustomLink from './Link.styles';

interface Props {
    to: string;
    children: ReactChild;
    className?: string;
}

const Link = ({ to, children, className }: Props) => (
    <CustomLink to={to} className={className}>
        {children}
    </CustomLink>
);

export default Link;
