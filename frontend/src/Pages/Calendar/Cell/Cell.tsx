import { useDispatch } from 'react-redux';
import Calendar from '../../../Domains/Calendar';
import { DayBox, DayLabel, InvisibleDayBox } from './Cell.styles';

type props = {
    year: number;
    month: number;
    day: number;
};

export default function Cell({ year, month, day }: props) {
    const dispatch = useDispatch();
    const date = new Date(year, month, day);
    const isInMonth = date.getMonth() === month;

    return (
        <DayBox
            onClick={() => {
                dispatch(Calendar.Creators.setSelectedDay(date));
            }}
        >
            <DayLabel isInMonth={isInMonth}>{date.getDate()}</DayLabel>
        </DayBox>
    );
}
