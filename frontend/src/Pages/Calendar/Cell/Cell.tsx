import { DayBox, DayLabel, InvisibleDayBox } from './Cell.styles';

type props = {
    day: number;
};

export default function Cell({ day }: props) {
    return day ? (
        <DayBox
            onClick={() => {
                //console.log(props.children)
            }}
        >
            <DayLabel>{day}</DayLabel>
        </DayBox>
    ) : (
        <InvisibleDayBox />
    );
}
