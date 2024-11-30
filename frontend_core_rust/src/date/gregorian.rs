use std::{cmp, fmt, ops};

use super::interval::{DayIntv, MonthIntv, WeekIntv, YearIntv};

#[derive(Debug, PartialEq)]
pub struct DtYear(pub u16);

#[derive(Debug, PartialEq)]
pub enum DtMonth {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec,
}

impl DtMonth {
    pub fn from_u8(m: u8) -> Option<Self> {
        match m {
            1 => Some(DtMonth::Jan),
            2 => Some(DtMonth::Feb),
            3 => Some(DtMonth::Mar),
            4 => Some(DtMonth::Apr),
            5 => Some(DtMonth::May),
            6 => Some(DtMonth::Jun),
            7 => Some(DtMonth::Jul),
            8 => Some(DtMonth::Aug),
            9 => Some(DtMonth::Sep),
            10 => Some(DtMonth::Oct),
            11 => Some(DtMonth::Nov),
            12 => Some(DtMonth::Dec),
            _ => None,
        }
    }

    pub fn to_u8(self: &Self) -> u8 {
        match self {
            DtMonth::Jan => 1,
            DtMonth::Feb => 2,
            DtMonth::Mar => 3,
            DtMonth::Apr => 4,
            DtMonth::May => 5,
            DtMonth::Jun => 6,
            DtMonth::Jul => 7,
            DtMonth::Aug => 8,
            DtMonth::Sep => 9,
            DtMonth::Oct => 10,
            DtMonth::Nov => 11,
            DtMonth::Dec => 12,
        }
    }
}

#[derive(Debug, PartialEq)]
pub struct DtDay(pub u8);

#[derive(Debug, PartialEq)]
pub struct Dt {
    pub y: DtYear,
    pub m: DtMonth,
    pub d: DtDay,
}

impl fmt::Display for Dt {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{:04}-{:02}-{:02}", self.y.0, self.m.to_u8(), self.d.0)
    }
}

impl Dt {
    pub fn from(y: u16, m: u8, d: u8) -> Self {
        Dt { y: DtYear(y), m: DtMonth::from_u8(m).unwrap(), d: DtDay(d) }
    }
}

impl ops::Add<YearIntv> for Dt {
    type Output = Dt;

    fn add(self, intv: YearIntv) -> Dt {
        let y = self.y.0 + intv.0;
        let m = self.m.to_u8();
        let d = cmp::min(self.d.0, days_in_month(DtYear(y), self.m).0);
        Dt::from(y, m, d)
    }
}

impl ops::Sub<YearIntv> for Dt {
    type Output = Dt;

    fn sub(self, intv: YearIntv) -> Dt {
        if intv.0 > self.y.0 {
            return Dt::from(0, 1, 1);
        }
        let y = self.y.0 - intv.0;
        let m = self.m.to_u8();
        let d = cmp::min(self.d.0, days_in_month(DtYear(y), self.m).0);
        Dt::from(self.y.0 - intv.0, m, d)
    }
}

impl ops::Add<MonthIntv> for Dt {
    type Output = Dt;

    fn add(self, intv: MonthIntv) -> Dt {
        let mut y = self.y.0;
        let mut m = u16::from(self.m.to_u8()) - 1 + intv.0;
        while m > 11 {
            y += 1;
            m -= 12;
        }
        let d = cmp::min(self.d.0, days_in_month(DtYear(y), DtMonth::from_u8(m as u8 + 1).unwrap()).0);
        Dt::from(y, m as u8 + 1, d)
    }
}

impl ops::Sub<MonthIntv> for Dt {
    type Output = Dt;

    fn sub(self, intv: MonthIntv) -> Dt {
        let mut y = self.y.0;
        let mut m = i32::from(self.m.to_u8()) - 1 - i32::from(intv.0);
        while m < 0 {
            if y == 0 {
                return Dt::from(0, 1, 1);
            }
            y -= 1;
            m += 12;
        }
        let d = cmp::min(self.d.0, days_in_month(DtYear(y), DtMonth::from_u8(m as u8 + 1).unwrap()).0);
        Dt::from(y, m as u8 + 1, d)
    }
}

impl ops::Add<DayIntv> for Dt {
    type Output = Dt;

    fn add(self, intv: DayIntv) -> Dt {
        let mut y = self.y.0;
        let mut m = self.m.to_u8() - 1;
        let mut d = u32::from(self.d.0) - 1 + intv.0;
        let mut m_days =
            u32::from(days_in_month(DtYear(y), DtMonth::from_u8(m as u8 + 1).unwrap()).0);
        while d >= m_days {
            m += 1;
            d -= m_days;
            if m > 11 {
                y += 1;
                m -= 12;
            }
            m_days = u32::from(days_in_month(DtYear(y), DtMonth::from_u8(m as u8 + 1).unwrap()).0);
        }
        Dt::from(y, m as u8 + 1, d as u8 + 1)
    }
}

impl ops::Sub<DayIntv> for Dt {
    type Output = Dt;

    fn sub(self, intv: DayIntv) -> Dt {
        let mut y = self.y.0;
        let mut m = i32::from(self.m.to_u8() - 1);
        let mut d = i64::from(self.d.0) - 1 - i64::from(intv.0);
        while d < 0 {
            m -= 1;
            if m < 0 {
                if y == 0 {
                    return Dt::from(0, 1, 1);
                }
                y -= 1;
                m += 12;
            }
            let m_days = i64::from(days_in_month(DtYear(y), DtMonth::from_u8(m as u8 + 1).unwrap()).0);
            d += m_days;
        }
        Dt::from(y, m as u8 + 1, d as u8 + 1)
    }
}

impl ops::Add<WeekIntv> for Dt {
    type Output = Dt;

    fn add(self, intv: WeekIntv) -> Dt {
        self + DayIntv(intv.0 * 7)
    }
}

impl ops::Sub<WeekIntv> for Dt {
    type Output = Dt;

    fn sub(self, intv: WeekIntv) -> Dt {
        self - DayIntv(intv.0 * 7)
    }
}

fn is_leap_year(y: DtYear) -> bool {
    if y.0 % 400 == 0 {
        return true;
    }
    if y.0 % 100 == 0 {
        return false;
    }
    return y.0 % 4 == 0;
}

fn days_in_month(y: DtYear, m: DtMonth) -> DtDay {
    match m {
        DtMonth::Jan => DtDay(31),
        DtMonth::Feb => {
            if is_leap_year(y) {
                DtDay(29)
            } else {
                DtDay(28)
            }
        }
        DtMonth::Mar => DtDay(31),
        DtMonth::Apr => DtDay(30),
        DtMonth::May => DtDay(31),
        DtMonth::Jun => DtDay(30),
        DtMonth::Jul => DtDay(31),
        DtMonth::Aug => DtDay(31),
        DtMonth::Sep => DtDay(30),
        DtMonth::Oct => DtDay(31),
        DtMonth::Nov => DtDay(30),
        DtMonth::Dec => DtDay(31),
    }
}

fn days_in_year(y: DtYear) -> u16 {
    if is_leap_year(y) {
        366
    } else {
        365
    }
}

fn leap_years_between(begin: DtYear, end: DtYear) -> u16 {
    let mut acc: u16 = 0;
    let mut y = begin.0;
    let rest = y % 4;
    if rest != 0 {
        y += 4 - y % 4;
    }
    while y <= end.0 {
        let dt_year = DtYear(y);
        if is_leap_year(dt_year) {
            acc += 1;
        }
        y += 4;
    }
    acc
}

/*fn interval_between(a: Dt, b: Dt) -> DtIntv {
    let mut y = b.y.0 - a.y.0;
    if y > 0 && ((b.m.0 < a.m.0) || (b.m.0 == a.m.0 && b.d.0 < a.d.0)) {
        y -= 1;
    }
    let mut m = ((b.y.0 as i16 * 12 + b.m.0 as i16) - (a.y.0 as i16 * 12 + a.m.0 as i16)) as u16;
    if m.0 > 0 && b.d.0 < a.d.0 {
        m.0 -= 1;
    }
    let d = diff.num_days();
    let w = diff.num_days() / 7;

    DtIntv { d: d as u32, w: w as u32, m, y }
}*/

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn test_date_month_from_u8() {
        assert_eq!(DtMonth::from_u8(0), None);
        assert_eq!(DtMonth::from_u8(1), Some(DtMonth::Jan));
        assert_eq!(DtMonth::from_u8(2), Some(DtMonth::Feb));
        assert_eq!(DtMonth::from_u8(3), Some(DtMonth::Mar));
        assert_eq!(DtMonth::from_u8(4), Some(DtMonth::Apr));
        assert_eq!(DtMonth::from_u8(5), Some(DtMonth::May));
        assert_eq!(DtMonth::from_u8(6), Some(DtMonth::Jun));
        assert_eq!(DtMonth::from_u8(7), Some(DtMonth::Jul));
        assert_eq!(DtMonth::from_u8(8), Some(DtMonth::Aug));
        assert_eq!(DtMonth::from_u8(9), Some(DtMonth::Sep));
        assert_eq!(DtMonth::from_u8(10), Some(DtMonth::Oct));
        assert_eq!(DtMonth::from_u8(11), Some(DtMonth::Nov));
        assert_eq!(DtMonth::from_u8(12), Some(DtMonth::Dec));
        assert_eq!(DtMonth::from_u8(13), None);
        assert_eq!(DtMonth::from_u8(14), None);
    }

    #[test]
    fn test_date_month_to_u8() {
        assert_eq!(DtMonth::Jan.to_u8(), 1);
        assert_eq!(DtMonth::Feb.to_u8(), 2);
        assert_eq!(DtMonth::Mar.to_u8(), 3);
        assert_eq!(DtMonth::Apr.to_u8(), 4);
        assert_eq!(DtMonth::May.to_u8(), 5);
        assert_eq!(DtMonth::Jun.to_u8(), 6);
        assert_eq!(DtMonth::Jul.to_u8(), 7);
        assert_eq!(DtMonth::Aug.to_u8(), 8);
        assert_eq!(DtMonth::Sep.to_u8(), 9);
        assert_eq!(DtMonth::Oct.to_u8(), 10);
        assert_eq!(DtMonth::Nov.to_u8(), 11);
        assert_eq!(DtMonth::Dec.to_u8(), 12);
    }

    #[test]
    fn test_date() {
        let dt = Dt::from(876, 7, 4);
        assert_eq!(dt, Dt { y: DtYear(876), m: DtMonth::Jul, d: DtDay(4) });
        assert_eq!(format!("{dt}"), "0876-07-04");
    }

    #[test]
    fn test_dt_add_year() {
        assert_eq!(Dt::from(2020, 7, 4) + YearIntv(0), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2020, 7, 4) + YearIntv(1), Dt::from(2021, 7, 4));
        assert_eq!(Dt::from(2020, 7, 4) + YearIntv(2), Dt::from(2022, 7, 4));
        assert_eq!(Dt::from(2020, 7, 4) + YearIntv(3), Dt::from(2023, 7, 4));
        assert_eq!(Dt::from(2020, 7, 4) + YearIntv(4), Dt::from(2024, 7, 4));
    }

    #[test]
    fn test_dt_sub_year() {
        assert_eq!(Dt::from(2020, 7, 4) - YearIntv(0), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2021, 7, 4) - YearIntv(1), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2022, 7, 4) - YearIntv(2), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2023, 7, 4) - YearIntv(3), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2024, 7, 4) - YearIntv(4), Dt::from(2020, 7, 4));
    }

    #[test]
    fn test_dt_add_month() {
        assert_eq!(Dt::from(2020, 7, 4) + MonthIntv(0), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2020, 7, 4) + MonthIntv(1), Dt::from(2020, 8, 4));
        assert_eq!(Dt::from(2020, 7, 4) + MonthIntv(2), Dt::from(2020, 9, 4));
        assert_eq!(Dt::from(2020, 7, 4) + MonthIntv(3), Dt::from(2020, 10, 4));
        assert_eq!(Dt::from(2020, 7, 4) + MonthIntv(4), Dt::from(2020, 11, 4));
        assert_eq!(Dt::from(2020, 7, 4) + MonthIntv(5), Dt::from(2020, 12, 4));
        assert_eq!(Dt::from(2020, 7, 4) + MonthIntv(6), Dt::from(2021, 1, 4));
        assert_eq!(Dt::from(2020, 7, 4) + MonthIntv(7), Dt::from(2021, 2, 4));
        assert_eq!(Dt::from(2020, 7, 4) + MonthIntv(12), Dt::from(2021, 7, 4));
        assert_eq!(Dt::from(2020, 7, 4) + MonthIntv(24), Dt::from(2022, 7, 4));
        assert_eq!(Dt::from(2020, 7, 4) + MonthIntv(36), Dt::from(2023, 7, 4));
        assert_eq!(Dt::from(2020, 7, 4) + MonthIntv(48), Dt::from(2024, 7, 4));
        assert_eq!(Dt::from(2020, 7, 4) + MonthIntv(60), Dt::from(2025, 7, 4));
    }

    #[test]
    fn test_dt_sub_month() {
        assert_eq!(Dt::from(2020, 7, 4) - MonthIntv(0), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2020, 8, 4) - MonthIntv(1), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2020, 9, 4) - MonthIntv(2), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2020, 10, 4) - MonthIntv(3), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2020, 11, 4) - MonthIntv(4), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2020, 12, 4) - MonthIntv(5), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2021, 1, 4) - MonthIntv(6), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2021, 2, 4) - MonthIntv(7), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2021, 7, 4) - MonthIntv(12), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2022, 7, 4) - MonthIntv(24), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2023, 7, 4) - MonthIntv(36), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2024, 7, 4) - MonthIntv(48), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2025, 7, 4) - MonthIntv(60), Dt::from(2020, 7, 4));
    }

    #[test]
    fn test_dt_add_week() {
        assert_eq!(Dt::from(2020, 7, 4) + WeekIntv(0), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2020, 7, 4) + WeekIntv(1), Dt::from(2020, 7, 11));
        assert_eq!(Dt::from(2020, 7, 4) + WeekIntv(2), Dt::from(2020, 7, 18));
        assert_eq!(Dt::from(2020, 7, 4) + WeekIntv(3), Dt::from(2020, 7, 25));
        assert_eq!(Dt::from(2020, 7, 4) + WeekIntv(4), Dt::from(2020, 8, 1));
        assert_eq!(Dt::from(2020, 7, 4) + WeekIntv(5), Dt::from(2020, 8, 8));
        assert_eq!(Dt::from(2020, 7, 4) + WeekIntv(10), Dt::from(2020, 9, 12));
        assert_eq!(Dt::from(2020, 7, 4) + WeekIntv(20), Dt::from(2020, 11, 21));
        assert_eq!(Dt::from(2020, 7, 4) + WeekIntv(30), Dt::from(2021, 1, 30));
        assert_eq!(Dt::from(2020, 7, 4) + WeekIntv(40), Dt::from(2021, 4, 10));
        assert_eq!(Dt::from(2020, 7, 4) + WeekIntv(50), Dt::from(2021, 6, 19));
        assert_eq!(Dt::from(2020, 7, 4) + WeekIntv(52), Dt::from(2021, 7, 3));
    }

    #[test]
    fn test_dt_sub_week() {
        assert_eq!(Dt::from(2020, 7, 4) - WeekIntv(0), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2020, 7, 11) - WeekIntv(1), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2020, 7, 18) - WeekIntv(2), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2020, 7, 25) - WeekIntv(3), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2020, 8, 1) - WeekIntv(4), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2020, 8, 8) - WeekIntv(5), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2020, 9, 12) - WeekIntv(10), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2020, 11, 21) - WeekIntv(20), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2021, 1, 30) - WeekIntv(30), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2021, 4, 10) - WeekIntv(40), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2021, 6, 19) - WeekIntv(50), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2021, 7, 3) - WeekIntv(52), Dt::from(2020, 7, 4));
    }

    #[test]
    fn test_dt_add_day() {
        assert_eq!(Dt::from(2020, 7, 4) + DayIntv(0), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2020, 7, 4) + DayIntv(1), Dt::from(2020, 7, 5));
        assert_eq!(Dt::from(2020, 7, 4) + DayIntv(10), Dt::from(2020, 7, 14));
        assert_eq!(Dt::from(2020, 7, 4) + DayIntv(20), Dt::from(2020, 7, 24));
        assert_eq!(Dt::from(2020, 7, 4) + DayIntv(21), Dt::from(2020, 7, 25));
        assert_eq!(Dt::from(2020, 7, 4) + DayIntv(22), Dt::from(2020, 7, 26));
        assert_eq!(Dt::from(2020, 7, 4) + DayIntv(23), Dt::from(2020, 7, 27));
        assert_eq!(Dt::from(2020, 7, 4) + DayIntv(24), Dt::from(2020, 7, 28));
        assert_eq!(Dt::from(2020, 7, 4) + DayIntv(25), Dt::from(2020, 7, 29));
        assert_eq!(Dt::from(2020, 7, 4) + DayIntv(26), Dt::from(2020, 7, 30));
        assert_eq!(Dt::from(2020, 7, 4) + DayIntv(27), Dt::from(2020, 7, 31));
        assert_eq!(Dt::from(2020, 7, 4) + DayIntv(28), Dt::from(2020, 8, 1));
        assert_eq!(Dt::from(2020, 7, 4) + DayIntv(29), Dt::from(2020, 8, 2));
        assert_eq!(Dt::from(2020, 7, 4) + DayIntv(30), Dt::from(2020, 8, 3));
        assert_eq!(Dt::from(2020, 7, 4) + DayIntv(31), Dt::from(2020, 8, 4));
        assert_eq!(Dt::from(2020, 7, 4) + DayIntv(62), Dt::from(2020, 9, 4));
        assert_eq!(Dt::from(2020, 7, 4) + DayIntv(92), Dt::from(2020, 10, 4));
        assert_eq!(Dt::from(2020, 7, 4) + DayIntv(365), Dt::from(2021, 7, 4));
        assert_eq!(Dt::from(2020, 7, 4) + DayIntv(365 * 2), Dt::from(2022, 7, 4));
        assert_eq!(Dt::from(2020, 7, 4) + DayIntv(365 * 3), Dt::from(2023, 7, 4));
        assert_eq!(Dt::from(2020, 7, 4) + DayIntv(365 * 4), Dt::from(2024, 7, 3));
    }

    #[test]
    fn test_dt_sub_day() {
        assert_eq!(Dt::from(2020, 7, 4) - DayIntv(0), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2020, 7, 5) - DayIntv(1), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2020, 7, 14) - DayIntv(10), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2020, 7, 24) - DayIntv(20), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2020, 7, 25) - DayIntv(21), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2020, 7, 26) - DayIntv(22), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2020, 7, 27) - DayIntv(23), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2020, 7, 28) - DayIntv(24), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2020, 7, 29) - DayIntv(25), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2020, 7, 30) - DayIntv(26), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2020, 7, 31) - DayIntv(27), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2020, 8, 1) - DayIntv(28), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2020, 8, 2) - DayIntv(29), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2020, 8, 3) - DayIntv(30), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2020, 8, 4) - DayIntv(31), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2020, 9, 4) - DayIntv(62), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2020, 10, 4) - DayIntv(92), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2021, 7, 4) - DayIntv(365), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2022, 7, 4) - DayIntv(365 * 2), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2023, 7, 4) - DayIntv(365 * 3), Dt::from(2020, 7, 4));
        assert_eq!(Dt::from(2024, 7, 3) - DayIntv(365 * 4), Dt::from(2020, 7, 4));
    }

    #[test]
    fn test_dt_sub_y0() {
        assert_eq!(Dt::from(2024, 7, 4) - YearIntv(2024), Dt::from(0, 7, 4));
        assert_eq!(Dt::from(2024, 7, 4) - MonthIntv(2024 * 12), Dt::from(0, 7, 4));
        assert_eq!(Dt::from(2024, 7, 4) - WeekIntv((2024 * 52) + 359), Dt::from(0, 7, 6));
        assert_eq!(Dt::from(2024, 7, 4) - DayIntv(2024 * 365 + 491), Dt::from(0, 7, 4));
    }

    #[test]
    fn test_dt_end_of_month() {
        assert_eq!(Dt::from(2024, 2, 29) + YearIntv(1), Dt::from(2025, 2, 28));
        assert_eq!(Dt::from(2024, 2, 29) - YearIntv(1), Dt::from(2023, 2, 28));
        assert_eq!(Dt::from(2024, 2, 29) + MonthIntv(12), Dt::from(2025, 2, 28));
        assert_eq!(Dt::from(2024, 2, 29) - MonthIntv(12), Dt::from(2023, 2, 28));
        assert_eq!(Dt::from(2025, 10, 31) + MonthIntv(1), Dt::from(2025, 11, 30));
        assert_eq!(Dt::from(2025, 10, 31) - MonthIntv(1), Dt::from(2025, 9, 30));
    }

    #[test]
    fn test_dt_sub_overflow() {
        assert_eq!(Dt::from(2024, 7, 4) - YearIntv(2025), Dt::from(0, 1, 1));
        assert_eq!(Dt::from(2024, 7, 4) - MonthIntv(2025 * 12), Dt::from(0, 1, 1));
        assert_eq!(Dt::from(2024, 7, 4) - WeekIntv((2025 * 52) + 500), Dt::from(0, 1, 1));
        assert_eq!(Dt::from(2024, 7, 4) - DayIntv(2025 * 365 + 491), Dt::from(0, 1, 1));
    }

    #[test]
    fn test_is_leap_year_divisable_by_four() {
        assert_eq!(is_leap_year(DtYear(2004)), true);
        assert_eq!(is_leap_year(DtYear(2008)), true);
        assert_eq!(is_leap_year(DtYear(2012)), true);
        assert_eq!(is_leap_year(DtYear(2016)), true);
        assert_eq!(is_leap_year(DtYear(2020)), true);
        assert_eq!(is_leap_year(DtYear(2024)), true);
    }

    #[test]
    fn test_is_leap_year_divisable_by_one_hundred() {
        assert_eq!(is_leap_year(DtYear(1300)), false);
        assert_eq!(is_leap_year(DtYear(1400)), false);
        assert_eq!(is_leap_year(DtYear(1500)), false);
        assert_eq!(is_leap_year(DtYear(1700)), false);
        assert_eq!(is_leap_year(DtYear(1800)), false);
        assert_eq!(is_leap_year(DtYear(1900)), false);
    }

    #[test]
    fn test_is_leap_year_divisable_by_four_hundred() {
        assert_eq!(is_leap_year(DtYear(400)), true);
        assert_eq!(is_leap_year(DtYear(800)), true);
        assert_eq!(is_leap_year(DtYear(1200)), true);
        assert_eq!(is_leap_year(DtYear(1600)), true);
        assert_eq!(is_leap_year(DtYear(2000)), true);
    }

    #[test]
    fn test_is_leap_year_other_years() {
        assert_eq!(is_leap_year(DtYear(1900)), false);
        assert_eq!(is_leap_year(DtYear(1901)), false);
        assert_eq!(is_leap_year(DtYear(1902)), false);
        assert_eq!(is_leap_year(DtYear(1903)), false);
        assert_eq!(is_leap_year(DtYear(2001)), false);
        assert_eq!(is_leap_year(DtYear(2002)), false);
        assert_eq!(is_leap_year(DtYear(2003)), false);
    }

    #[test]
    fn test_days_in_month_except_febrary() {
        assert_eq!(days_in_month(DtYear(2000), DtMonth::Jan), DtDay(31));
        assert_eq!(days_in_month(DtYear(2000), DtMonth::Mar), DtDay(31));
        assert_eq!(days_in_month(DtYear(2000), DtMonth::Apr), DtDay(30));
        assert_eq!(days_in_month(DtYear(2000), DtMonth::May), DtDay(31));
        assert_eq!(days_in_month(DtYear(2000), DtMonth::Jun), DtDay(30));
        assert_eq!(days_in_month(DtYear(2000), DtMonth::Jul), DtDay(31));
        assert_eq!(days_in_month(DtYear(2000), DtMonth::Aug), DtDay(31));
        assert_eq!(days_in_month(DtYear(2000), DtMonth::Sep), DtDay(30));
        assert_eq!(days_in_month(DtYear(2000), DtMonth::Oct), DtDay(31));
        assert_eq!(days_in_month(DtYear(2000), DtMonth::Nov), DtDay(30));
        assert_eq!(days_in_month(DtYear(2000), DtMonth::Dec), DtDay(31));
    }

    #[test]
    fn test_days_in_month_february() {
        assert_eq!(days_in_month(DtYear(2000), DtMonth::Feb), DtDay(29));
        assert_eq!(days_in_month(DtYear(2004), DtMonth::Feb), DtDay(29));
        assert_eq!(days_in_month(DtYear(2008), DtMonth::Feb), DtDay(29));
        assert_eq!(days_in_month(DtYear(1900), DtMonth::Feb), DtDay(28));
        assert_eq!(days_in_month(DtYear(1901), DtMonth::Feb), DtDay(28));
        assert_eq!(days_in_month(DtYear(2001), DtMonth::Feb), DtDay(28));
        assert_eq!(days_in_month(DtYear(2002), DtMonth::Feb), DtDay(28));
    }

    #[test]
    fn test_days_in_year() {
        assert_eq!(days_in_year(DtYear(400)), 366);
        assert_eq!(days_in_year(DtYear(800)), 366);
        assert_eq!(days_in_year(DtYear(1200)), 366);
        assert_eq!(days_in_year(DtYear(1600)), 366);
        assert_eq!(days_in_year(DtYear(2000)), 366);
        assert_eq!(days_in_year(DtYear(2004)), 366);
        assert_eq!(days_in_year(DtYear(2008)), 366);
        assert_eq!(days_in_year(DtYear(2012)), 366);
        assert_eq!(days_in_year(DtYear(2016)), 366);
        assert_eq!(days_in_year(DtYear(2020)), 366);
        assert_eq!(days_in_year(DtYear(2024)), 366);
        assert_eq!(days_in_year(DtYear(1300)), 365);
        assert_eq!(days_in_year(DtYear(1400)), 365);
        assert_eq!(days_in_year(DtYear(1500)), 365);
        assert_eq!(days_in_year(DtYear(1700)), 365);
        assert_eq!(days_in_year(DtYear(1800)), 365);
        assert_eq!(days_in_year(DtYear(1900)), 365);
        assert_eq!(days_in_year(DtYear(1900)), 365);
        assert_eq!(days_in_year(DtYear(1901)), 365);
        assert_eq!(days_in_year(DtYear(1902)), 365);
        assert_eq!(days_in_year(DtYear(1903)), 365);
        assert_eq!(days_in_year(DtYear(2001)), 365);
        assert_eq!(days_in_year(DtYear(2002)), 365);
        assert_eq!(days_in_year(DtYear(2001)), 365);
        assert_eq!(days_in_year(DtYear(2002)), 365);
        assert_eq!(days_in_year(DtYear(2003)), 365);
    }

    #[test]
    fn test_leap_years_between_0() {
        assert_eq!(leap_years_between(DtYear(1897), DtYear(1903)), 0);
        assert_eq!(leap_years_between(DtYear(2001), DtYear(2001)), 0);
        assert_eq!(leap_years_between(DtYear(2002), DtYear(2002)), 0);
        assert_eq!(leap_years_between(DtYear(2003), DtYear(2003)), 0);
        assert_eq!(leap_years_between(DtYear(2001), DtYear(2003)), 0);
        assert_eq!(leap_years_between(DtYear(2002), DtYear(2003)), 0);
        assert_eq!(leap_years_between(DtYear(2001), DtYear(2002)), 0);
    }

    #[test]
    fn test_leap_years_between_1() {
        assert_eq!(leap_years_between(DtYear(1897), DtYear(1904)), 1);
        assert_eq!(leap_years_between(DtYear(1997), DtYear(2003)), 1);
        assert_eq!(leap_years_between(DtYear(1997), DtYear(2000)), 1);
        assert_eq!(leap_years_between(DtYear(2000), DtYear(2003)), 1);
        assert_eq!(leap_years_between(DtYear(2003), DtYear(2007)), 1);
        assert_eq!(leap_years_between(DtYear(2005), DtYear(2009)), 1);
    }

    #[test]
    fn test_leap_years_between_2() {
        assert_eq!(leap_years_between(DtYear(1896), DtYear(1904)), 2);
        assert_eq!(leap_years_between(DtYear(1996), DtYear(2003)), 2);
        assert_eq!(leap_years_between(DtYear(1997), DtYear(2004)), 2);
        assert_eq!(leap_years_between(DtYear(2000), DtYear(2004)), 2);
        assert_eq!(leap_years_between(DtYear(2004), DtYear(2008)), 2);
    }

    #[test]
    fn test_leap_years_between() {
        assert_eq!(leap_years_between(DtYear(2000), DtYear(2024)), 7);
    }

    /*#[test]
    fn test_interval_between_1() {
        assert_eq!(
            interval_between(Dt::from(2024, 11, 25), Dt::from(2024, 11, 26)),
            DateInterval { d: 1, w: 0, m: 0, y: 0 }
        );
        assert_eq!(
            interval_between(Dt::from(2024, 11, 19), Dt::from(2024, 11, 26)),
            DateInterval { d: 7, w: 1, m: 0, y: 0 }
        );
        assert_eq!(
            interval_between(Dt::from(2024, 10, 26), Dt::from(2024, 11, 26)),
            DateInterval { d: 31, w: 4, m: 1, y: 0 }
        );
        assert_eq!(
            interval_between(Dt::from(2023, 11, 26), Dt::from(2024, 11, 26)),
            DateInterval { d: 366, w: 52, m: 12, y: 1 }
        );
    }

    #[test]
    fn test_interval_between_0() {
        assert_eq!(
            interval_between(Dt::from(2024, 11, 26), Dt::from(2024, 11, 26)),
            DateInterval { d: 0, w: 0, m: 0, y: 0 }
        );
        assert_eq!(
            interval_between(Dt::from(2024, 11, 20), Dt::from(2024, 11, 26)),
            DateInterval { d: 6, w: 0, m: 0, y: 0 }
        );
        assert_eq!(
            interval_between(Dt::from(2024, 10, 29), Dt::from(2024, 11, 26)),
            DateInterval { d: 28, w: 4, m: 0, y: 0 }
        );
        assert_eq!(
            interval_between(Dt::from(2024, 10, 27), Dt::from(2024, 11, 26)),
            DateInterval { d: 30, w: 4, m: 0, y: 0 }
        );
        assert_eq!(
            interval_between(Dt::from(2023, 11, 27), Dt::from(2024, 11, 26)),
            DateInterval { d: 365, w: 52, m: 11, y: 0 }
        );
    }

    #[test]
    fn test_interval_between_big_distance() {
        assert_eq!(
            interval_between(Dt::from(1984, 01, 01), Dt::from(2039, 12, 31)),
            DateInterval { d: 20453, w: 2921, m: 671, y: 55 }
        );
    }*/
}
