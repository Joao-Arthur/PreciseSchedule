import { ReactComponent as hamburguer } from './hamburguer.svg';
import { ReactComponent as user } from './user.svg';
import { ReactComponent as settings } from './settings.svg';
import { ReactComponent as signOut } from './signOut.svg';
import { ReactComponent as close } from './close.svg';
import { ReactComponent as edit } from './edit.svg';

const SVGs = { hamburguer, user, settings, signOut, close, edit };

export type names = keyof typeof SVGs;

type props = {
    name: names;
    className?: string;
};

export default function Icon({ name, className }: props) {
    const SelectedIcon = SVGs[name];

    return <SelectedIcon className={className} />;
}
