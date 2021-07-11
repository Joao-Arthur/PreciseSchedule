import Device from './Device';

const Responsive =
    ([desktop]: TemplateStringsArray) =>
    ([mobile]: TemplateStringsArray) =>
        Device.isMobile ? mobile : desktop;

export const Mobile = ([mobile]: TemplateStringsArray) =>
    Device.isMobile ? mobile : '';

export const Desktop = ([desktop]: TemplateStringsArray) =>
    !Device.isMobile ? desktop : '';

export default Responsive;
