import React, { useState, useMemo } from 'react';
import TableControls from './TableControls';
import { streamData } from '../../../data/mockData';

function DataTable() {
  // State for search, filter, and sort
  const [searchTerm, setSearchTerm] = useState('');
  const [filterArtist, setFilterArtist] = useState('');
  const [sortBy, setSortBy] = useState('dateDesc');

  // Extract unique artists for the filter dropdown
  const artists = useMemo(() => {
    return [...new Set(streamData.map(item => item.artist))];
  }, []);

  // Filter and sort the data
  const filteredAndSortedData = useMemo(() => {
    // First, filter the data
    let result = streamData.filter(item => {
      // Filter by search term
      const matchesSearch = 
        item.songName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.artist.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Filter by artist
      const matchesArtist = filterArtist === '' || item.artist === filterArtist;
      
      return matchesSearch && matchesArtist;
    });

    // Then, sort the data
    result.sort((a, b) => {
      switch (sortBy) {
        case 'dateAsc':
          return new Date(a.dateStreamed) - new Date(b.dateStreamed);
        case 'dateDesc':
          return new Date(b.dateStreamed) - new Date(a.dateStreamed);
        case 'streamAsc':
          return a.streamCount - b.streamCount;
        case 'streamDesc':
          return b.streamCount - a.streamCount;
        default:
          return 0;
      }
    });

    return result;
  }, [searchTerm, filterArtist, sortBy]);

  // Format date to be more readable
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div>
      <TableControls
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortBy={sortBy}
        setSortBy={setSortBy}
        filterArtist={filterArtist}
        setFilterArtist={setFilterArtist}
        artists={artists}
      />

      <div className="bg-white rounded-b-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Song Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Artist
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date Streamed
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stream Count
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User ID
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAndSortedData.length > 0 ? (
                filteredAndSortedData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.songName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.artist}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(item.dateStreamed)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.streamCount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.userId}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
                    No results found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DataTable;