import React from 'react'
import Skeleton from 'react-loading-skeleton'

const ImageCardLoader = () => {
  return (
    <div>
        <Skeleton
            height={300}
            width="100%"
            containerClassName="rounded-lg"
        />
    </div>
  )
}

export default ImageCardLoader