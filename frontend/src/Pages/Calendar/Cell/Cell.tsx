import { useDispatch } from 'react-redux';
import Calendar from '../../../Domains/Calendar';
import { DayBox, DayLabel, InvisibleDayBox } from './Cell.styles';

type props = {
    day: number;
    visible: boolean;
    date: Date;
};

export default function Cell({ day, visible, date }: props) {
    const dispatch = useDispatch();

    return day ? (
        <DayBox
            onClick={() => {
                dispatch(Calendar.Creators.setSelectedDay(date));
            }}
        >
            <DayLabel>{day}</DayLabel>
        </DayBox>
    ) : (
        <InvisibleDayBox />
    );
}
