import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

type linkProps = {
    underline?: boolean;
};

const underlineCSS = css`
    :hover {
        text-decoration: underline;
    }
`;

const CustomLink = styled(Link)<linkProps>`
    text-decoration: none;
    ${({ underline }) => (underline ? underlineCSS : '')}
`;

export default CustomLink;
