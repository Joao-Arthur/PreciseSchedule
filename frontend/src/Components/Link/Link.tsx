import { ReactChild } from 'react';
import CustomLink from './Link.styles';

type props = {
    to: string;
    underline?: boolean;
    children: ReactChild;
    className?: string;
};

export default function Link({ to, underline, children, className }: props) {
    return (
        <CustomLink to={to} underline={underline} className={className}>
            {children}
        </CustomLink>
    );
}
