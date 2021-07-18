import EventRegister from '../EventRegister';

type props = {
    visible: boolean;
    hide: () => void;
    day: Date;
};

export default function EditEvent({ visible, hide, day }: props) {
    return (
        <EventRegister visible={visible} hide={hide} day={day} mode='EDIT' />
    );
}
