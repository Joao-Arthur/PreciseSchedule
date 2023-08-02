import type { ReactNode } from "react";
import clss from "classnames";

type props = {
    readonly children: ReactNode;
};

export function TextSmall({ children }: props) {
    return (
        <span
            className={clss(
                "select-none",
                "transition-colors duration-500",
                "dark:text-pastel-gray",
                "text-xs",
            )}
        >
            {children}
        </span>
    );
}
