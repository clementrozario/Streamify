import React from 'react';

interface TableControlsProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  sortBy: string;
  setSortBy: (sortOption: string) => void;
  filterArtist: string;
  setFilterArtist: (artist: string) => void;
  artists: string[];
}

const TableControls: React.FC<TableControlsProps> = ({
  searchTerm,
  setSearchTerm,
  sortBy,
  setSortBy,
  filterArtist,
  setFilterArtist,
  artists,
}) => {
  return (
    <div className="bg-white p-4 rounded-t-lg shadow-md border-b">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
            Search
          </label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by song or artist..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="w-full sm:w-48">
          <label htmlFor="filter" className="block text-sm font-medium text-gray-700 mb-1">
            Filter by Artist
          </label>
          <select
            id="filter"
            value={filterArtist}
            onChange={(e) => setFilterArtist(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Artists</option>
            {artists.map((artist) => (
              <option key={artist} value={artist}>
                {artist}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full sm:w-48">
          <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">
            Sort by
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="dateDesc">Date (Newest First)</option>
            <option value="dateAsc">Date (Oldest First)</option>
            <option value="streamDesc">Streams (Highest First)</option>
            <option value="streamAsc">Streams (Lowest First)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TableControls;
