import { ReactComponent as hamburguer } from './hamburguer.svg';

const SVGs = { hamburguer };

export type names = keyof typeof SVGs;

interface Props {
    name: names;
    className?: string;
}

export default function Icon({ name, className }: Props) {
    const SelectedIcon = SVGs[name];

    return <SelectedIcon className={className} />;
}
