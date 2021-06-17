import toast from 'react-hot-toast';

type messages = {
    loading: string;
    error: string;
    success: string;
};

export default function Toast<T>(promise: Promise<T>, messages: messages) {
    return toast.promise(promise, messages, {
        style: {
            minWidth: '250px'
        }
    });
}
