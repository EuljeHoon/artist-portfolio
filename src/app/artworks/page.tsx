"use client";
import React, { useState, useEffect } from "react";
import ArtworkGallery from "../../components/ArtworkGallery";
import artworksData from "../../assets/artworks.json";

// 타입 정의
interface Artwork {
  title: string;
  size: string;
  sold: boolean;
  url: string;
}

interface ArtworksData {
  "Blessing Jar": Artwork[];
  "Put Everything": Artwork[];
  "Blessings": Artwork[];
}

const ArtworksPage = () => {
  const [artworks, setArtworks] = useState<ArtworksData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // API 호출 대신 직접 JSON 데이터 사용
      setArtworks(artworksData as ArtworksData);
      setLoading(false);
    } catch (err) {
      setError("작품 데이터를 불러오는 중 오류가 발생했습니다.");
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-artistic flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">pulling data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-artistic flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!artworks) {
    return (
      <div className="min-h-screen bg-artistic flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">cannot find artwork data</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-artistic">
      <div className="container mx-auto px-4 py-8">
        <ArtworkGallery artworks={artworks} />
      </div>
    </div>
  );
};

export default ArtworksPage;
