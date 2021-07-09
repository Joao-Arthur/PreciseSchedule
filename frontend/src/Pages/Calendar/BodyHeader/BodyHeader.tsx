import Device from '../../../Core/Device';
import { Row, Text } from './BodyHeader.styles';
import { Column } from '../Table/Table.styles';

const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const daysOfWeekAbbreviated = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function BodyHeader() {
    const days = Device.isMobile ? daysOfWeekAbbreviated : daysOfWeek;

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
