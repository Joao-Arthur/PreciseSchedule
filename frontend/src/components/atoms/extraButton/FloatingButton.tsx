import type { ReactNode } from "react";
import cl from "classnames";

type props = {
    readonly onClick?: () => void;
    readonly children: ReactNode;
};

export function FloatingButton({ onClick, children }: props) {
    return (
        <button
            onClick={onClick}
            className={cl(
                "rounded-full bg-primary active:bg-primary-dark",
                "shadow-sm shadow-gray-800",
            )}
        >
            {children}
        </button>
    );
}
