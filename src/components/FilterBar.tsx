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
        <div className='flex flex-col  mt-500 mb-500 md:flex-row md:justify-between lg:mt-800 lg:mb-400 '>
            <p className={`font-bold text-center text-preset-1 mb-300 md: ${theme === 'dark' ? 'text-neutral-900' : 'text-neutral-0'} `}>Extensions List</p>
            <div className="flex place-content-center gap-2">
                {FILTERS.map(f => {
                    const active = value === f;

                    return (
                        <button
                            key={f}
                            type="button"
                            onClick={() => onChange(f)}
                            aria-pressed={active}
                            className={`w-[95px] h-[46px] px-4 rounded-lg text-preset-4 transition
        ${active
                                    ? `${theme === 'dark' ? 'bg-red-400 text-neutral-0' : 'bg-red-700 text-neutral-900'}`
                                    : `${theme === 'dark'
                                        ? 'bg-neutral-0 text-neutral-700 border border-neutral-200'
                                        : 'bg-neutral-700 text-neutral-0 border border-neutral-600'
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