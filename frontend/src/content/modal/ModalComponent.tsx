import type { ReactNode } from "react";
import { useDevice } from "@/lib/device/useDevice";
import { DesktopModal } from "./DesktopModal";
import { MobileModal } from "./MobileModal";

export type modalProps = {
    readonly children: ReactNode;
    readonly title: string;
    readonly onCancel: () => void;
    readonly onConfirm?: () => void;
};

export function ModalComponent({
    children,
    title,
    onCancel,
    onConfirm,
}: modalProps) {
    const device = useDevice();
    const isMobile = device.isMobile();

    if (isMobile) {
        return (
            <MobileModal
                title={title}
                onCancel={onCancel}
                onConfirm={onConfirm}
            >
                {children}
            </MobileModal>
        );
    }
    return (
        <DesktopModal
            title={title}
            onCancel={onCancel}
            onConfirm={onConfirm}
        >
            {children}
        </DesktopModal>
    );
}
