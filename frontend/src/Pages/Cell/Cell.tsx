import { DayBox, DayLabel, InvisibleDayBox } from './Cell.styles';

interface Props {
    dia: number;
}

export default function Cell({ dia }: Props) {
    return dia ? (
        <DayBox
            onClick={() => {
                //console.log(props.children)
            }}
        >
            <DayLabel>{dia}</DayLabel>
        </DayBox>
    ) : (
        <InvisibleDayBox />
    );
}
