import Device from './Device';

const Responsive =
    ([desktop]: TemplateStringsArray) =>
    ([mobile]: TemplateStringsArray) =>
        Device.isMobile ? mobile : desktop;

export default Responsive;
