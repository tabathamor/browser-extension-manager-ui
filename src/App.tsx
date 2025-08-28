import React, { useMemo, useState } from 'react';
import './App.css'
import { FilterBar, Filter } from './components/FilterBar';
import { Header } from './components/Header'
import { useTheme } from './theme/Themeprovider';
import { ExtensionsList } from './components/ExtensionList';
import { mapExtensions } from './utils/mapExtensions';
import { Extension, RawExtension } from './types';
import raw from "./data/data.json";




function App() {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [items, setItems] = useState<Extension[]>(
    () => mapExtensions(raw as RawExtension[])
  );

  const counts = useMemo(() => {
    const active = items.filter(i => i.active).length;
    return { all: items.length, active, inactive: items.length - active };
  }, [items]);

  const handleFilterChange = (newFilter: Filter) => setActiveFilter(newFilter);

  const handleToggle = (id: string, next: boolean) => {
    setItems(prev => prev.map(it => it.id === id ? { ...it, active: next } : it));
  };

  const handleRemove = (id: string) => {
    setItems(prev => prev.filter(it => it.id !== id));
  };

  return (
    <>

      <div className={`
        min-h-screen
        ${theme === "dark" ? "bg-gradient-light" : "bg-gradient-dark"}`}>
        <div className="w-full p-200 md:p-400  ">
          <div className="mx-auto ">
            <div className="mx-auto w-full min-w-[343px] lg:max-w-[1170px]">
              <Header />
              <FilterBar value={activeFilter} onChange={handleFilterChange} />
              <ExtensionsList
                items={items}
                filter={activeFilter}
                onToggle={handleToggle}
                onRemove={handleRemove}
              />
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default App
