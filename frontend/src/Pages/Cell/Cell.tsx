import { DayBox, DayLabel, InvisibleDayBox } from './Cell.styles';

interface Props {
    day: number;
}

export default function Cell({ day }: Props) {
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
