import { Column, Title, Button } from './Header.styles';

export default function Header() {
    return (
        <thead>
            <tr>
                <Column>
                    <Title>NAME</Title>
                    <Button>^</Button>
                </Column>
                <Column>
                    <Title>CATEGORY</Title>
                    <Button>^</Button>
                </Column>
                <Column>
                    <Title>IMPORTANCE</Title>
                    <Button>^</Button>
                </Column>
                <Column>
                    <Title>FROM</Title>
                    <Button>^</Button>
                </Column>
                <Column>
                    <Title>TO</Title>
                    <Button>^</Button>
                </Column>
                <Column>
                    <Title>REPEATS</Title>
                    <Button>^</Button>
                </Column>
            </tr>
        </thead>
    );
}
