import type { ReactNode } from "react";
import clss from "classnames";

type props = {
    readonly children: ReactNode;
    readonly className?: string;
    readonly onClick?: () => void;
};

export function Text({ onClick, className, children }: props) {
    return (
        <span
            className={clss(
                "select-none",
                "transition-colors duration-500",
                "text-dark dark:text-pastel-gray",
                className,
            )}
            onClick={onClick}
        >
            {children}
        </span>
    );
}
