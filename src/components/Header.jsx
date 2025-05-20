
import { MagnifyingGlassIcon, BellIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function Header({ onSearch, onToggleDarkMode, isDarkMode }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <>
      <header
        className={`${
          isDarkMode ? "dark:bg-gray-800 dark:text-white" : "bg-white"
        } shadow-sm p-4 flex items-center justify-between md:ml-64 z-30`}
      >
        {/* Search bar */}
        <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg w-full max-w-xs sm:max-w-sm md:w-72">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            aria-label="Search"
            className="bg-transparent outline-none flex-grow"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-4 ml-4">
          <button
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            onClick={onToggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <SunIcon className="h-6 w-6 text-yellow-500" />
            ) : (
              <MoonIcon className="h-6 w-6 text-gray-600" />
            )}
          </button>

          <button
            className="p-2 hover:bg-gray-100 rounded-full"
            aria-label="Notifications"
          >
            <BellIcon className="h-6 w-6" />
          </button>

          <div className="hidden sm:block h-8 w-8 bg-blue-500 rounded-full"></div>
        </div>
      </header>
    </>
  );
}

export default Header;
