import { cl } from "@/lib/cl";
import { useTheme } from "@/features/theme/useTheme";
import { useSession } from "@/features/session/useSession";
import { Toggle } from "@/components/atoms/input/Toggle";
import { AnonimousActions } from "./AnonimousActions";
import { UserActions } from "./UserActions";

export function Header() {
    const logged = useSession().logged();
    const [theme, setTheme] = useTheme();

    return (
        <header
            className={cl(
                "flex px-2 justify-between h-9 gap-3 items-center",
                "bg-primary-dark dark:bg-primary-darker",
                "transition-colors duration-500",
            )}
        >
            <Toggle
                value={theme === "dark"}
                onChange={setTheme}
                display={{ on: "🌑", off: "☀️" }}
            />
            {logged ? <UserActions /> : <AnonimousActions />}
        </header>
    );
}
