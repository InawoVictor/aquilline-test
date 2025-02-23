"use client";

import galleryService from "@/services/gallery/galleryService";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { saveAs } from "file-saver";

const ImageEdit = () => {
  const router = useRouter();
  const params = useParams();
  const id = params.slug
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(200);
  const [greyscale, setGreyscale] = useState(false);
  const [blur, setBlur] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);

  const { data, isLoading } = useQuery<any>({
    queryKey: ["image", id],
    queryFn: async () => galleryService.getImageInfo(params.slug), 
    enabled: !!params.slug, 
    staleTime: 60 * 1000, 
    retry: 3,
  });

  useEffect(() => {
    const savedState = localStorage.getItem(`edit-${id}`);
    if (savedState) {
      const { width, height, greyscale, blur } = JSON.parse(savedState);
      setWidth(width);
      setHeight(height);
      setGreyscale(greyscale);
      setBlur(blur);
    }
  }, [id]);

  useEffect(() => {
    localStorage.setItem(`edit-${id}`, JSON.stringify({ width, height, greyscale, blur }));
  }, [id, width, height, greyscale, blur]);


  const handleDownload = async (url: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      saveAs(blob, "downloaded-image.jpg");
    } catch (error) {
      console.error("Error downloading the image:", error);
    }
  };

  const imageUrl = `https://picsum.photos/id/${id}/${width}/${height}${greyscale ? '?grayscale' : '?'}${blur ? `&blur=${blur}` : ''}`;

  return (
    <>
          <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Edit Image</h1>
        {isLoading || isImageLoading && <Skeleton height={200} width={300} />}
        {data && (<>
          <Image
            src={imageUrl}
            alt="Edited Image"
            width={width}
            style={{filter: `blur(${blur}px)`}}  height={height}
            className={`rounded transition-all duration-500 ease-out ${
              isImageLoading ? "opacity-0" : "opacity-100"
            } ${greyscale ? '!grayscale' : 'grayscale-0'}`}
            quality={80}
            loading="lazy"
            onLoadingComplete={() => setIsImageLoading(false)}
          />
          <div className="mt-4">
            <label className="block">Width:</label>
            <input type="number" value={width} onChange={e => setWidth(Number(e.target.value))} className="border p-2 rounded w-full" />
            <label className="block mt-2">Height:</label>
            <input type="number" value={height} onChange={e => setHeight(Number(e.target.value))} className="border p-2 rounded w-full" />
            <label className="block mt-2">Greyscale:</label>
            <input type="checkbox" checked={greyscale} onChange={e => setGreyscale(e.target.checked)} className="mr-2" />
            <label className="block mt-2">Blur (1-10): {blur}</label>
            <input type="range" min="0" max="10" value={blur} onChange={e => setBlur(Number(e.target.value))} className="w-full" />
          </div>
        </>)}
        <button onClick={() => handleDownload(imageUrl)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Download</button>
        <button onClick={() => router.back()} className="mt-4 px-4 py-2 bg-gray-300 rounded ml-2">Back</button>
      </div>
    </>
  );
};

export default ImageEdit;
