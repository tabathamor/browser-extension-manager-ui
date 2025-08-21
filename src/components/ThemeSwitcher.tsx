import React from 'react'
import { useTheme } from '../theme/Themeprovider'
import IconSun from "../assets/images/icon-sun.svg"
import IconMoon from "../assets/images/icon-moon.svg"

export const ThemeSwitcher = () => {
    const { theme, toggle } = useTheme()
    return (
        <button
            onClick={toggle}
            aria-label="Toggle theme"
            className={`p-2 rounded-[12px]  ${theme === "dark"
                ? "border-gray-300 bg-neutral-100 hover:bg-gray-100"
                : "border-gray-700 bg-gray-800 hover:bg-gray-700"
                }`}
        >
            <img
                src={theme === "dark" ? IconMoon : IconSun}
                alt={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                className="h-5 w-5"
            />
        </button>
    )
}
