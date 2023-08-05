import type { AppointmentEvent } from "@/features/event/event";
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { useCreateAppointment } from "@/features/event/useEventAPI";
import { Modal } from "@/components/molecules/Modal";
import { AppointmentEventRegister } from "@/content/event/AppointmentEventRegister";
import { Action } from "./Action";

export function AppointmentAction() {
    const [open, setOpen] = useState(false);
    const { mutate, isLoading, isSuccess } = useCreateAppointment();
    const queryClient = useQueryClient();

    function submit(data: AppointmentEvent) {
        mutate(data);
    }

    useEffect(() => {
        if (isSuccess) {
            setOpen(false);
            queryClient.invalidateQueries("event/find");
        }
    }, [isSuccess]);

    return (
        <>
            <Action
                title="APPOINTMENT"
                icon="pencil"
                onClick={() => setOpen(!open)}
            />
            <Modal
                title="NEW APPOINTMENT"
                visible={open}
                formId="AppointmentEventRegister"
                onCancel={() => setOpen(false)}
                confirmLabel="SAVE"
            >
                <AppointmentEventRegister onSubmit={submit} isLoading={isLoading} />
            </Modal>
        </>
    );
}
