import { DayBox, DayLabel, InvisibleDayBox } from './Cell.styles';

interface Props {
    dia: number;
}

const Cell = ({ dia }: Props) =>
    dia ? (
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

export default Cell;
