"use client";

import HomeImageCard from "@/components/Home/ImageCard";
import ImageCardLoader from "@/components/Home/ImageCardLoader";
import { useQuery } from "@tanstack/react-query";
import galleryService from "../services/gallery/galleryService";
import { useEffect, useState } from "react";

interface ImageDataProps {
  author: string;
  download_url: string;
  height: number;
  id: string;
  url: string;
  width: number;
}

const GalleryLoading = () => (
  <div className="flex justify-center items-center h-full">
    <ImageCardLoader />
  </div>
);

export default function Home() {
  const [page, setPage] = useState<number>(() => {
    return Number(localStorage.getItem("currentPage")) || 1;
  });

  useEffect(() => {
    localStorage.setItem("currentPage", page.toString());
  }, [page]);

  const { data, isLoading } = useQuery<any>({
    queryKey: ["images", page],
    queryFn: () => galleryService.getImages(`?page=${page}&limit=9`),
  });

  function goPrevPage() {
    if (page > 1) setPage((prev) => prev - 1);
  }

  function goNextPage() {
    setPage((prev) => prev + 1);
  }

  return (
    <div className="py-20 px-[7%] font-[family-name:var(--font-geist-sans)]">
      <h2 className="text-white text-center text-2xl">
        Aquilline I<i className="">V</i>&nbsp; Image Gallery
      </h2>
      <main className="mt-6">
        {isLoading ? (
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[1.25rem]">
            <ImageCardLoader />
            <ImageCardLoader />
            <ImageCardLoader />
          </div>
        ) : (
          <>
            <div
              className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[1.25rem]"
              style={{ gridAutoRows: "300px" }}
            >
              {data?.data?.length > 0 ? (
                data.data.map((image: ImageDataProps) => (
                  <HomeImageCard
                    key={image.id}
                    author={image.author}
                    imageUrl={image.download_url}
                    id={image.id}
                  />
                ))
              ) : (
                <p>No images found</p>
              )}
            </div>
            {data && (
              <div className="flex justify-between mt-4">
                <button
                  onClick={goPrevPage}
                  disabled={page === 1}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Previous
                </button>
                <p className="text-white text-lg">Page: {page}</p>
                <button
                  onClick={goNextPage}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}