import type { ReactNode } from "react";
import clss from "classnames";

type props = {
    readonly children: ReactNode;
    readonly className: string;
};

export function DisabledText({ className, children }: props) {
    return (
        <span
            className={clss(
                "select-none",
                "transition-colors duration-500",
                "text-gray-500 dark:text-gray-500",
                className,
            )}
        >
            {children}
        </span>
    );
}
