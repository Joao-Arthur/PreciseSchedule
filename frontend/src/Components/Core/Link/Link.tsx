import { ReactChild } from 'react';
import CustomLink from './Link.styles';

interface Props {
    to: string;
    children: ReactChild;
    className?: string;
}

export default function Link({ to, children, className }: Props) {
    return (
        <CustomLink to={to} className={className}>
            {children}
        </CustomLink>
    );
}
