import { DayBox, DayLabel, InvisibleDayBox } from './Cell.styles';

interface props {
    dia: number;
}

const Cell = ({ dia }: props) =>
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
