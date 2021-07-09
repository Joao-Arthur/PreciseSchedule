import Device from './Device';

export default function MobileStyle([styles]: TemplateStringsArray) {
    return Device.isMobile ? styles : '';
}
