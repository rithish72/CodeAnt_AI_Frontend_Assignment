import plus from '../../assets/plus.svg';
import refresh from '../../assets/refresh.svg';
import search from '../../assets/search.svg';
import { repoList } from '../../data/repoList';
import RepoCard from '../repoCard/repoCard';

export default function MainApp() {
  const value = repoList.length;
  return (
    <div className="flex flex-col divide-y divide-gray-300 border-[1.5px] bg-white m-[5px] sm:m-[10px] lg:rounded-lg">
      {/* Header Section */}
      <div className="flex flex-col gap-2 sm:gap-3 bg-white p-3 sm:p-4 lg:rounded-lg">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          {/* Title and Count */}
          <div>
            <h2 className="text-lg font-semibold text-[#181D27] sm:text-xl">
              Repositories
            </h2>
            <span className="text-xs text-gray-500 sm:text-sm">
              {value} total repositories
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-2 sm:mt-3 flex flex-wrap gap-2 sm:gap-3">
            {/* Refresh Button */}
            <button
              className="group flex min-h-[35px] min-w-[120px] sm:min-h-[40px] sm:min-w-[150px] touch-manipulation items-center gap-2 rounded-lg border bg-white px-3 py-2 sm:px-4 border-gray-300 transition-all duration-200 active:translate-y-0.5 active:shadow-sm hover:-translate-y-0.5 hover:shadow-lg"
            >
              <img
                src={refresh}
                alt="Refresh Icon"
                className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:rotate-180"
              />
              <span className="text-sm sm:text-base">Refresh All</span>
            </button>

            {/* Add Repository Button */}
            <button className="group flex min-h-[35px] min-w-[120px] sm:min-h-[40px] sm:min-w-[150px] touch-manipulation items-center gap-2 rounded-lg bg-[#1570EF] px-3 py-1 text-xs sm:text-sm text-white shadow-inner transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0.5 active:shadow-sm">
              <img src={plus} className="h-3 w-3 sm:h-4 sm:w-4 brightness-0 invert" />
              <span>Add Repository</span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative min-w-[60%] sm:min-w-[30%] mt-2 sm:mt-[10px]">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <img
              src={search}
              className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
              alt="Search icon"
            />
          </div>
          <input
            type="search"
            id="search"
            className="w-full rounded-lg border py-1 sm:py-2 pl-9 sm:pl-10 pr-2 sm:pr-3 shadow-sm text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search repositories..."
          />
        </div>
      </div>

      {/* Repository List */}
      <div className="snap-y divide-y divide-gray-300 overflow-y-auto ml-[5px] sm:ml-[10px] mt-[5px]">
        {repoList.map((repo) => (
          <div
            key={repo.name}
            className="flex snap-end items-center overflow-auto pb-3 sm:pb-4 pl-3 sm:pl-4 m-[2px] sm:m-[5px] transition-colors duration-300 ease-in-out hover:bg-[#f5f5f5]"
          >
            <RepoCard {...repo} />
          </div>
        ))}
      </div>
    </div>
  );
}
