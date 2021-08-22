import { useCallback } from 'react';
import {
    FaUserCircle,
    IoMdSettings,
    BiDoorOpen,
    RiCloseLine,
    BiInfoCircle,
    FaChartLine,
    MdEdit,
    BiCalendar,
    HiFilter
} from 'react-icons/all';
import styled from 'styled-components';

export type names =
    | 'user'
    | 'settings'
    | 'signOut'
    | 'close'
    | 'info'
    | 'chart'
    | 'edit'
    | 'calendar'
    | 'filter';

type props = {
    name: names;
    size: number;
    color: string;
    className?: string;
};

type iconProps = {
    size: number;
    color: string;
};

export default function Icon({ name, size, color, className }: props) {
    const IconComp = useCallback(() => {
        switch (name) {
            case 'user':
                return FaUserCircle;
            case 'settings':
                return IoMdSettings;
            case 'signOut':
                return BiDoorOpen;
            case 'close':
                return RiCloseLine;
            case 'info':
                return BiInfoCircle;
            case 'chart':
                return FaChartLine;
            case 'edit':
                return MdEdit;
            case 'calendar':
                return BiCalendar;
            case 'filter':
                return HiFilter;
        }
    }, [name]);

    const SVGIcon = styled(IconComp())<iconProps>`
        ${({ size }) =>
            `height: ${size}px;
         width: ${size}px;`}
        fill: ${({ color }) => color};
    `;

    return (
        <SVGIcon name={name} className={className} size={size} color={color} />
    );
}
