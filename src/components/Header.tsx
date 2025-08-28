import { useTheme } from "../theme/Themeprovider"
import LogoLight from "../../public/images/logo-light.svg"
import LogoDark from "../../public/images/logo.svg"
import { ThemeSwitcher } from "./ThemeSwitcher"


export const Header = () => {
    const { theme, toggle } = useTheme()
    return (

        <header className={`
                        flex items-center justify-between px-4
                        w-full h-[66px] rounded-[10px]
                        lg:h-[74px] ml:rounded-[20px]
                        md:h-[74px] md:rounded-[20px]
                        ${theme === "dark" ? "bg-neutral-0" : "bg-neutral-700"}
                        shadow-sm
                    `}>
            <div>
                <img src={theme === "dark" ? LogoDark : LogoLight} alt="Logo" />
            </div>

            <ThemeSwitcher />
        </header>

    )
}