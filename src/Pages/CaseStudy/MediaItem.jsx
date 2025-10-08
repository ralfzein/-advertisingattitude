import React, { useState } from 'react';
import { Skeleton } from '../../components/ui/skeleton';

const RenderMedia = ({ src, className = "" }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  if (!src) return null;

  const isVideo = /\.(mp4|mov|webm|ogg|mkv)$/i.test(src);

  return (
    <div className={`relative w-full ${className}`}>
      {!isLoaded && (
        <Skeleton className={`absolute inset-0 w-full h-full bg-secondary/30`} />
      )}

      {isVideo ? (
        <video
          key={src}
          className={`w-full object-cover transition-opacity duration-500 ${className} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsLoaded(true)}
        >
          <source src={src} type={`video/${src.split('.').pop().toLowerCase()}`} />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          key={src}
          src={src}
          alt=""
          loading="lazy"
          decoding="async"
          className={`w-full ${className} object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
};

export default RenderMedia;
