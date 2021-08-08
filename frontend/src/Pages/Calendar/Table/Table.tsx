import { useState } from 'react';
import Device from '../../../Core/Device';
import Display from './Display';
import Navigation from './Navigation';
import {
    Container,
    ContainerMobile,
    Content,
    SubContent
} from './Table.styles';

const now = new Date();

export default function Table() {
    const [year, setYear] = useState(now.getFullYear());
    const [month, setMonth] = useState(now.getMonth());

    function setPreviousYear() {
        setYear(year - 1);
    }

    function setNextYear() {
        setYear(year + 1);
    }

    function setPreviousMonth() {
        if (month > 0) return setMonth(month - 1);
        setMonth(11);
        setPreviousYear();
    }

    function setNextMonth() {
        if (month < 11) return setMonth(month + 1);
        setMonth(0);
        setNextYear();
    }

    function setToday() {
        const now = new Date();
        setYear(now.getFullYear());
        setMonth(now.getMonth());
    }

    return Device.isMobile ? (
        <ContainerMobile>
            <Content>
                <SubContent>
                    <Navigation
                        setPreviousYear={setPreviousYear}
                        setNextYear={setNextYear}
                        setYear={setYear}
                        setPreviousMonth={setPreviousMonth}
                        setNextMonth={setNextMonth}
                        setMonth={setMonth}
                        setToday={setToday}
                        month={month}
                        year={year}
                    />
                    <Display year={year} month={month} />
                </SubContent>
            </Content>
        </ContainerMobile>
    ) : (
        <Container>
            <Navigation
                setPreviousYear={setPreviousYear}
                setNextYear={setNextYear}
                setYear={setYear}
                setPreviousMonth={setPreviousMonth}
                setNextMonth={setNextMonth}
                setMonth={setMonth}
                setToday={setToday}
                month={month}
                year={year}
            />
            <Display year={year} month={month} />
        </Container>
    );
}
