"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Modal from "./common/Modal";
import ArtworkCard from "./ArtworkCard";

const ArtworkGallery = ({ artworks }) => {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSeries, setActiveSeries] = useState("Blessing Jar");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [displayCount, setDisplayCount] = useState(12);
  const observerRef = useRef();

  const seriesNames = {
    "Blessing Jar": "Blessing Jar",
    "Put Everything": "Put Everything",
    Blessings: "Blessings",
  };

  // 연도 추출 함수
  const extractYear = (title) => {
    const yearMatch = title.match(/(\d{4})/);
    return yearMatch ? yearMatch[1] : null;
  };

  // 사용 가능한 연도들 추출
  const getAvailableYears = () => {
    const years = new Set();
    if (artworks[activeSeries]) {
      artworks[activeSeries].forEach((artwork) => {
        const year = extractYear(artwork.title);
        if (year) years.add(year);
      });
    }
    return Array.from(years).sort((a, b) => b - a);
  };

  // 필터링된 작품들
  const getFilteredArtworks = () => {
    if (!artworks[activeSeries]) return [];

    return artworks[activeSeries].filter((artwork) => {
      const matchesSearch = artwork.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesYear =
        selectedYear === "all" || extractYear(artwork.title) === selectedYear;
      return matchesSearch && matchesYear;
    });
  };

  // 무한 스크롤을 위한 마지막 요소 관찰
  const lastElementRef = useCallback((node) => {
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setDisplayCount((prev) => prev + 8);
      }
    });
    if (node) observerRef.current.observe(node);
  }, []);

  const handleArtworkClick = (artwork) => {
    setSelectedArtwork(artwork);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArtwork(null);
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedYear("all");
    setDisplayCount(12);
  };

  // 시리즈 변경 시 디스플레이 카운트 리셋
  useEffect(() => {
    setDisplayCount(12);
  }, [activeSeries, searchTerm, selectedYear]);

  if (!artworks || Object.keys(artworks).length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-artistic">
        <div className="text-center">
          <div className="text-gray-400 mb-4">
            <svg
              className="mx-auto h-16 w-16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"
              />
            </svg>
          </div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">
            No artworks found
          </h3>
          <p className="text-gray-600">Please reload the data.</p>
        </div>
      </div>
    );
  }

  const filteredArtworks = getFilteredArtworks();
  const availableYears = getAvailableYears();
  const displayedArtworks = filteredArtworks.slice(0, displayCount);

  return (
    <div className="min-h-screen bg-artistic py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Artwork Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the world of Jinkyung Hu's artworks. Each series illuminates
            various aspects of modern society with unique themes and techniques.
          </p>
        </div>

        {/* 시리즈 선택 탭 */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-lg">
            {Object.keys(artworks).map((series) => (
              <button
                key={series}
                onClick={() => {
                  setActiveSeries(series);
                  resetFilters();
                }}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeSeries === series
                    ? "bg-gray-900 text-white shadow-md"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {seriesNames[series] || series}
              </button>
            ))}
          </div>
        </div>

        {/* 검색 및 필터 */}
        <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* 검색 */}
            <div className="flex-1">
              <label
                htmlFor="search"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Search Artworks
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Enter artwork title..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-black"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* 연도 필터 */}
            <div className="sm:w-48">
              <label
                htmlFor="year-filter"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Filter by Year
              </label>
              <select
                id="year-filter"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-black"
              >
                <option value="all">All Years</option>
                {availableYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* 필터 초기화 */}
            <div className="flex items-end">
              <button
                onClick={resetFilters}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* 결과 카운트 */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {displayedArtworks.length} of {filteredArtworks.length}{" "}
            artworks
            {searchTerm && ` for "${searchTerm}"`}
            {selectedYear !== "all" && ` from ${selectedYear}`}
          </p>
        </div>

        {/* 작품 그리드 */}
        {displayedArtworks.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <svg
                className="mx-auto h-16 w-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              No artworks found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search criteria or filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedArtworks.map((artwork, index) => (
              <div
                key={`${artwork.title}-${index}`}
                ref={
                  index === displayedArtworks.length - 1 ? lastElementRef : null
                }
              >
                <ArtworkCard
                  artwork={artwork}
                  onClick={() => handleArtworkClick(artwork)}
                />
              </div>
            ))}
          </div>
        )}

        {/* 로딩 인디케이터 */}
        {displayedArtworks.length < filteredArtworks.length && (
          <div className="text-center mt-8">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-700 mr-2"></div>
              Loading more artworks...
            </div>
          </div>
        )}
      </div>

      {/* 모달 */}
      {isModalOpen && selectedArtwork && (
        <Modal onClose={closeModal}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative">
                <img
                  src={selectedArtwork.url}
                  alt={selectedArtwork.title}
                  className="w-full h-auto max-h-96 object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedArtwork.title}
                </h3>
                <div className="flex items-center space-x-2">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      selectedArtwork.sold
                        ? "bg-red-100 text-red-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {selectedArtwork.sold ? "Sold" : "Available"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ArtworkGallery;
