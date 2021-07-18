import { ReactComponent as hamburguer } from './SVG/hamburguer.svg';
import { ReactComponent as user } from './SVG/user.svg';
import { ReactComponent as settings } from './SVG/settings.svg';
import { ReactComponent as signOut } from './SVG/signOut.svg';
import { ReactComponent as close } from './SVG/close.svg';
import { ReactComponent as edit } from './SVG/edit.svg';
import { ReactComponent as info } from './SVG/info.svg';

const SVGs = { hamburguer, user, settings, signOut, close, edit, info };

export type names = keyof typeof SVGs;

type props = {
    name: names;
    className?: string;
};

export default function Icon({ name, className }: props) {
    const SelectedIcon = SVGs[name];

    return <SelectedIcon className={className} />;
}
