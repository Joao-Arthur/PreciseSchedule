import EventRegister from '../EventRegister';

type props = {
    visible: boolean;
    hide: () => void;
    day: Date;
};

export default function InfoEvent({ visible, hide, day }: props) {
    return (
        <EventRegister visible={visible} hide={hide} day={day} mode='INFO' />
    );
}
