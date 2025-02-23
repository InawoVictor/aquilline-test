import React, { use } from 'react'
import HomeImageCard from './ImageCard'

interface ImageDataProps {
    author: string;
    author_url: string;
    filename: string;
    format: string;
    height: number;
    id: string;
    post_url: string;
    width: number;
}

const HomeGallery = ({
    posts,
  }: {
    posts: Promise<ImageDataProps[]>
  }) => {
    const allPosts = use(posts)

  return (
    <main className="mt-6">
        <div className="grid grid-cols-3 gap-[1.25rem]" style={{gridAutoRows: '300px',}}>
            {allPosts.map((image: ImageDataProps) => (
                <HomeImageCard
                    key={image.id}
                    title={image.author}
                    imageUrl={image.post_url}
                />
            ))}
        </div>
        <div className="flex justify-between mt-4">
            <button className="px-4 py-2 bg-gray-300 rounded">Previous</button>
            <button className="px-4 py-2 bg-gray-300 rounded">Next</button>
        </div>
    </main>
  )
}

export default HomeGallery