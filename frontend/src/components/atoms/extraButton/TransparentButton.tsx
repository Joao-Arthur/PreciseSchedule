import type { ReactNode } from "react";
import { cl } from "@/lib/cl";

type props = {
    readonly onClick?: () => void;
    readonly children: ReactNode;
};

export function TransparentButton({ onClick, children }: props) {
    return (
        <button
            onClick={onClick}
            className={cl(
                "flex rounded border border-transparent",
                "hover:border-gray-300 active:border-gray-300",
                "dark:hover:border-gray-500 dark:active:border-gray-500",
                "hover:bg-gray-100 active:bg-gray-200",
                "dark:hover:bg-drk-dk dark:active:bg-drk",
            )}
        >
            {children}
        </button>
    );
}
