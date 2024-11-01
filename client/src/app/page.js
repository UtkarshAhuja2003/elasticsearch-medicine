"use client";
import search from '@/api/search';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault(); 
    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      alert("Please enter a valid search term.");
      return;
    }
    
    try {
      const res = await search(trimmedQuery);
      if (res && Array.isArray(res)) {
        setResults(res);
      } else {
        alert("Unexpected data format received from search.");
      }
    } catch (error) {
      console.error("Search failed:", error.message);
      alert("An error occurred while searching. Please try again later.");
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-semibold text-gray-800">Medicines Search</h1>
        <p className="mt-2 text-gray-600">
          Search for medicines by name, composition, uses, side effects, or manufacturer.
        </p>
        <form className="mt-6 flex items-center justify-center space-x-3" onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., Paracetamol, Glaucoma, Pfizer"
            className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            Search
          </button>
        </form>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {results.map((medicine, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-200"
          >
            <div className="relative w-full h-48 bg-gray-200">
              <Image
                src={medicine._source['Image URL']}
                alt={medicine._source['Medicine Name']}
                layout="fill"
                objectFit="contain"
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4 space-y-2">
              <h2 className="text-lg font-semibold text-gray-800">
                {medicine._source['Medicine Name']}
              </h2>
              <p className="text-gray-600 text-sm">
                <span className="font-semibold">Composition:</span> {medicine._source.Composition}
              </p>
              <p className="text-gray-600 text-sm">
                <span className="font-semibold">Uses:</span> {medicine._source.Uses}
              </p>
              <p className="text-gray-600 text-sm">
                <span className="font-semibold">Side Effects:</span> {medicine._source.Side_effects}
              </p>
              <p className="text-gray-600 text-sm">
                <span className="font-semibold">Manufacturer:</span> {medicine._source.Manufacturer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
