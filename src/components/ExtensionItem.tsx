import React from 'react';
import type { Extension } from '../types';
import { useTheme } from '../theme/Themeprovider';


type Props = {
    ext: Extension;
    onToggle: (id: string, next: boolean) => void;
    onRemove: (id: string) => void;
};

export default function ExtensionsItem({ ext, onToggle, onRemove }: Props) {
    const { theme } = useTheme()

    return (
        <article className={` rounded-lg shadow-inset-1 min-h-[200px] min-w-[346px] gap-2 ${theme === 'dark' ? 'bg-neutral-0 shadow-neutral-200 ' : 'bg-neutral-800 shadow-neutral-600'}`}>

            <div className='flex flex-col'>
                <div className='flex flex-row m-250 items-start space-x-200'>
                    <div className='flex-none'>
                        <img
                            src={ext.icon}
                            alt={`${ext.name} icon`}
                            className="h-full"
                        />
                    </div>
                    <div className='flex flex-col space-y-100'>
                        <p className={`text-preset-2 font-bold ${theme === 'dark' ? 'text-neutral-900' : 'text-neutral-0'}`}>{ext.name}</p>
                        <p className={`text-preset-5 ${theme === 'dark' ? 'text-neutral-600' : 'text-neutral-300'}`}>{ext.description}</p>
                    </div>
                </div>

                <div className="flex items-center m-250 justify-between mt-4">
                    <button
                        type="button"
                        onClick={() => onRemove(ext.id)}
                        className={`w-[91px] h-[38px] text-preset-6 border rounded-lg 
                            ${theme === 'dark' ? 'text-neutral-600 border-neutral-300 ' : ' text-neutral-0 border-neutral-600 '}`}
                    >
                        Remove
                    </button>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={ext.active}
                            onChange={() => onToggle(ext.id, !ext.active)}
                            className="sr-only peer"
                        />
                        <div className=
                            {`
            w-[38px] h-[20px] rounded-full relative transition-colors duration-300
            ${ext.active
                                    ? theme === 'dark'
                                        ? 'bg-red-400'
                                        : 'bg-red-700'
                                    : theme === 'dark'
                                        ? 'bg-neutral-300'
                                        : 'bg-neutral-600'
                                }
            
            // This is the sliding thumb of the toggle
            after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:w-4 after:h-4 after:rounded-full after:bg-neutral-0
            after:transition-transform after:duration-300
            
            // The thumb's position is now controlled by the active state
            ${ext.active ? 'after:translate-x-[18px]' : ''}
        `}></div>                    </label>
                </div>
            </div>


            {/* <header className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 shadow-md p-1">
                        <img
                            src={ext.icon}
                            alt={`${ext.name} icon`}
                            className="h-full w-full object-contain"

                        />
                    </div>
                    <div>
                        <h3 className={`text-preset-2 ${theme === 'dark' ? 'text-neutral-900' : 'text-neutral-0'}`}>{ext.name}</h3>
                        <p className="text-sm text-neutral-400">{ext.description}</p>
                    </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        checked={ext.active}
                        onChange={() => onToggle(ext.id, !ext.active)}
                        className="sr-only peer"
                    />
                    <div className="w-14 h-8 bg-neutral-600 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-fuchsia-600"></div>
                </label>
            </header> 

            <footer className="mt-4 flex justify-end">
                <button
                    type="button"
                    onClick={() => onRemove(ext.id)}
                    className="px-3 py-1.5 text-xs font-medium text-red-500 rounded-lg hover:bg-neutral-700 transition-colors"
                >
                    Remove
                </button>
            </footer>*/}
        </article>
    );
}
