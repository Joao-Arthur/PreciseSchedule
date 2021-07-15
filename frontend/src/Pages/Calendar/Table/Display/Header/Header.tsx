import Device from '../../../../../Core/Device';
import { Row, Text, Column } from './Header.styles';

const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const daysOfWeekAbbrev = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function Header() {
    const days = Device.isMobile ? daysOfWeekAbbrev : daysOfWeek;

    return (
        <Row>
            {days.map(day => (
                <Column key={day}>
                    <Text>{day}</Text>
                </Column>
            ))}
        </Row>
    );
}
