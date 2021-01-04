const monthDays = [31, NaN, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const februaryDays = [28, 29];

export const nomeDosMeses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
];

export const diasDaSemana = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado'
];

export const getMonthTotalDays = (year: number, month: number): number =>
    month !== 1
        ? monthDays[month]
        : februaryDays[
              Number((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
          ];

export const monthDaysToGrid = (year: number, month: number): number[][] => {
    const firstDayOfWeekInMonth = new Date(year, month, 1).getDay();
    const monthDays = getMonthTotalDays(year, month);
    const grid: number[][] = [
        new Array(7).fill(undefined),
        new Array(7).fill(undefined),
        new Array(7).fill(undefined),
        new Array(7).fill(undefined),
        new Array(7).fill(undefined),
        new Array(7).fill(undefined)
    ].map((week, weekIndex) =>
        week.map((day, dayIndex) => {
            const cellIndex = weekIndex * 7 + dayIndex;
            if (cellIndex < firstDayOfWeekInMonth) return NaN;
            if (cellIndex + 1 - firstDayOfWeekInMonth > monthDays) return NaN;
            return cellIndex + 1 - firstDayOfWeekInMonth;
        })
    );
    return grid;
    //    let valores = [];
    //    for (
    //        let i = 1 - firstDayOfWeekInMonth;
    //        i <= 42 - firstDayOfWeekInMonth;
    //        i++
    //    ) {
    //        if (i >= 1 && i <= monthDays) {
    //            valores.push(i);
    //            continue;
    //        }
    //
    //        valores.push(NaN);
    //    }
    //    let novosElementos = [];
    //    novosElementos.push(valores.splice(0, 7));
    //    novosElementos.push(valores.splice(0, 7));
    //    novosElementos.push(valores.splice(0, 7));
    //    novosElementos.push(valores.splice(0, 7));
    //    novosElementos.push(valores.splice(0, 7));
    //    novosElementos.push(valores.splice(0, 7));
    //    return novosElementos;
};
