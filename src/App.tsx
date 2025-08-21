import React, { useState } from 'react';
import './App.css'
import { FilterBar, Filter } from './components/FilterBar';
import { Header } from './components/Header'
import { useTheme } from './theme/Themeprovider';



function App() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const { theme } = useTheme();

  const handleFilterChange = (newFilter: Filter) => {
    setActiveFilter(newFilter);
  };

  return (
    <>

      <div className={`
        min-h-screen
        ${theme === "dark" ? "bg-neutral-200" : "bg-neutral-800"}`}>
        <div className="w-full py-4">
          <div className="mx-auto px-4">
            <div className="mx-auto w-full min-w-[343px] lg:max-w-[1170px]">
              <Header />
              <FilterBar value={activeFilter} onChange={handleFilterChange} />

            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default App
