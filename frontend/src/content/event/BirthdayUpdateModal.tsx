import type { BirthdayEvent } from "@/features/event/event";
import { useEffect } from "react";
import { useQueryClient } from "react-query";
import { useUpdateBirthday } from "@/features/event/useEventAPI";
import { Modal } from "@/components/molecules/Modal";
import { BirthdayForm } from "./BirthdayForm";

type props = {
    readonly event: BirthdayEvent;
    readonly onCancel: () => void;
};

export function BirthdayUpdateModal({ event, onCancel }: props) {
    const { mutate, isSuccess, isLoading } = useUpdateBirthday();
    const queryClient = useQueryClient();

    useEffect(() => {
        if (isSuccess) {
            onCancel();
            queryClient.invalidateQueries("getEvents");
        }
    }, [queryClient, isSuccess, onCancel]);

    return (
        <Modal visible title={`EDIT "${event.name.toLocaleUpperCase()}"`} onCancel={onCancel}>
            <BirthdayForm event={event} disabled={isLoading} onSubmit={mutate} />
        </Modal>
    );
}