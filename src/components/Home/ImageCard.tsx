"use client"; 

import Image from "next/image";
import { useRouter } from "next/navigation"; 
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";

interface ImageCardProps {
  imageUrl: string;
  author: string;
  id: string;
}

const HomeImageCard: React.FC<ImageCardProps> = ({ imageUrl, author, id }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className="cursor-pointer"
      onClick={() => router.push(`/edit/${id}`)}
    >
      <div className="bg-stone-300 p-4 rounded-lg">
        {isLoading && <Skeleton height={200} />}

        <Image
          width={300}
          height={200}
          src={imageUrl}
          alt="Gallery"
          className={`rounded-lg w-full h-[200px] object-cover hover:scale-105 transition-all duration-500 ease-out ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          loading="lazy"
          onLoadingComplete={() => setIsLoading(false)}
        />

        <div className="mt-4">
          <h4 className="text-center text-lg text-foreground">{author}</h4>
        </div>
      </div>
    </div>
  );
};

export default HomeImageCard;
