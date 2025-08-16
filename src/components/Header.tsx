import { useTheme } from "../theme/Themeprovider"
import LogoLight from "../assets/images/logo-light.svg"
import LogoDark from "../assets/images/logo.svg"
import IconSun from "../assets/images/icon-sun.svg"
import IconMoon from "../assets/images/icon-moon.svg"

export const Header = () => {
    const { theme, toggle } = useTheme()
    return (

        <div className="w-full py-4">
            <div className="mx-auto px-4">
                <div className="mx-auto w-full max-w-[1170px]">
                    <header className={`
                        flex items-center justify-between px-4
                        w-full h-[74px] rounded-[20px]
                        md:h-[74px] md:rounded-[20px]
                        sm:h-[66px] sm:rounded-[10px]
                        ${theme === "dark" ? "bg-neutral-100" : "bg-neutral-800"}
                        shadow-sm
                    `}>
                        <div>
                            <img src={theme === "dark" ? LogoDark : LogoLight} alt="Logo" />
                        </div>

                        <div>
                            <button
                                onClick={toggle}
                                aria-label="Toggle theme"
                                className={`p-2 rounded-lg border ${theme === "dark"
                                    ? "border-gray-700 bg-gray-800 hover:bg-gray-700"
                                    : "border-gray-300 bg-white hover:bg-gray-100"
                                    }`}
                            >
                                <img
                                    src={theme === "dark" ? IconSun : IconMoon}
                                    alt={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                                    className="h-5 w-5"
                                />
                            </button>
                        </div>
                    </header>
                </div>
            </div>
        </div>
    )
}