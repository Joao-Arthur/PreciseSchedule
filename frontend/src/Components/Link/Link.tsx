import { ReactChild } from 'react';
import CustomLink from './Link.styles';

type props = {
    to: string;
    children: ReactChild;
    className?: string;
};

export default function Link({ to, children, className }: props) {
    return (
        <CustomLink to={to} className={className}>
            {children}
        </CustomLink>
    );
}
