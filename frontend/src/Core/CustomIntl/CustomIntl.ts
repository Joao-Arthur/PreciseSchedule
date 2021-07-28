function getDayNames(format: Intl.DateTimeFormatOptions['weekday']) {
    return ['01', '02', '03', '04', '05', '06', '07'].map(day =>
        new Date(`2021-01-${day}T00:00:00+00:000Z`).toLocaleString(undefined, {
            weekday: format,
            timeZone: 'UTC'
        })
    );
}

function getMonthNames(format: Intl.DateTimeFormatOptions['month']) {
    return [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12'
    ].map(month =>
        new Date(`2021-${month}-01T00:00:00+00:000Z`).toLocaleString(
            undefined,
            {
                month: format,
                timeZone: 'UTC'
            }
        )
    );
}

const CustomIntl = { getMonthNames };

export default CustomIntl;
