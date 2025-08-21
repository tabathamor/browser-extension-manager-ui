import React from 'react'
import { useTheme } from '../theme/Themeprovider'


export type Filter = "all" | "active" | "inactive"

type Props = {
    value: Filter;
    onChange: (f: Filter) => void;
    counts?: Partial<Record<Filter, number>>;

}

const FILTERS: Filter[] = ["all", "active", "inactive"];


export const FilterBar: React.FC<Props> = ({ value, onChange, counts }) => {
    const { theme } = useTheme();
    return (
        <div className='flex justify-between mt-800'>
            <p className={`font-bold text-preset-1 ${theme === 'dark' ? 'text-neutral-900' : 'text-neutral-0'} `}>Extensions List</p>
            <div className="flex gap-2">
                {FILTERS.map(f => {
                    const active = value === f;

                    return (
                        <button
                            key={f}
                            type="button"
                            onClick={() => onChange(f)}
                            aria-pressed={active}
                            className={`px-4 rounded-lg text-preset-4 transition 
                                ${active
                                    ? ` text-preset-4 ${theme === 'dark' ? 'bg-red-700 text-neutral-0' : 'dark:bg-red-400 dark:text-neutral-900'}`
                                    : ` text-preset-3 ${theme === 'dark'
                                        ? 'bg-neutral-700 dark:text-neutral-0 dark:border-neutral-600'
                                        : 'bg-neutral-0 text-neutral-700 border-neutral-200'
                                    }`
                                }`}
                        >
                            {labelFor(f)}
                            {typeof counts?.[f] === "number" && (
                                <span >{counts![f]}</span>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    )
}

function labelFor(f: Filter) {
    if (f === "all") return "All";
    if (f === "active") return "Active";
    return "Inactive";
}