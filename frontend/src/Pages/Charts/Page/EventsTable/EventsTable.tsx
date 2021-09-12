import {
    Container,
    Column,
    Disabled,
    Left,
    Center
} from './EventsTable.styles';
import Header from './Header';

export default function EventsTable() {
    const data = [
        {
            name: 'Lorem ipsum dolor sit amet',
            category: 'apointment',
            importance: 'high',
            from: '12/10/2021 07:27',
            to: '12/10/2021 07:27',
            repeats: 'no'
        },
        {
            name: 'consectetur adipiscing elit',
            category: 'apointment',
            importance: 'average',
            from: '12/10/2021 07:27',
            to: '12/10/2021 07:27',
            repeats: 'yes'
        },
        {
            name: 'Curabitur ac pharetra orci',
            category: 'birthday',
            importance: 'average',
            from: '12/10/2021 07:27',
            to: '12/10/2021 07:27',
            repeats: 'yes'
        },
        {
            name: 'a lobortis nisi',
            category: 'meeting',
            importance: 'low',
            from: '12/10/2021 07:27',
            to: '12/10/2021 07:27',
            repeats: 'no'
        },
        {
            name: 'Quisque tristique congue purus',
            category: 'meeting',
            importance: 'low',
            from: '12/10/2021 07:27',
            to: '12/10/2021 07:27',
            repeats: 'no'
        }
    ];

    return (
        <Container>
            <Header />
            <tbody>
                {data.map(
                    ({ name, category, importance, from, to, repeats }) => (
                        <tr>
                            <Left>{name}</Left>
                            <Left>{category}</Left>
                            <Left>{importance}</Left>
                            <Left>{from}</Left>
                            <Left>{to}</Left>
                            <Center>{repeats}</Center>
                        </tr>
                    )
                )}
            </tbody>
            <tfoot>
                <tr>
                    <Disabled />
                    <Column>
                        apointment: 10% meeting: 10% birthday: 10% party: 10%
                        date: 10%
                    </Column>
                    <Column>high: 10% average: 10% low: 10%</Column>
                    <Disabled />
                    <Disabled />
                    <Column>yes: 75% no:25%</Column>
                </tr>
            </tfoot>
        </Container>
    );
}
