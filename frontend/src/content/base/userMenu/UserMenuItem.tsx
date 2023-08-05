import type { IconName } from "@/components/atoms/Icon";
import { cl } from "@/lib/cl";
import { Icon } from "@/components/atoms/Icon";
import { Text } from "@/components/atoms/Text";

type props = {
    readonly name: string;
    readonly icon: IconName;
};

export function UserMenuItem({ name, icon }: props) {
    return (
        <li
            className={cl(
                "py-3 pr-7 pl-5 cursor-pointer flex items-center rounded",
                "hover:bg-gray-100 dark:hover:bg-dark",
                "gap-5",
            )}
        >
            <Icon
                name={icon}
                fill="primary"
                size={6}
            />
            <Text>{name}</Text>
        </li>
    );
}
