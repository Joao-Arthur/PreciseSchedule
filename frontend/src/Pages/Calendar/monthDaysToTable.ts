export default function monthDaysToTable(year: number, month: number) {
    const firstDayOfWeekInMonth = new Date(year, month, 1).getDay();
    return new Array(6)
        .fill(new Array(7).fill(undefined))
        .map((week: number[], weekIndex) =>
            week.map((_, dayIndex) => {
                const cellIndex = weekIndex * 7 + dayIndex;
                const dayInMonth = cellIndex + 1 - firstDayOfWeekInMonth;
                return dayInMonth;
            })
        );
}
