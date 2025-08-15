"use client";

import React from "react";
import Image from "next/image";

interface SimpleImageGalleryProps {
  images: Array<{
    id: string;
    url: string;
    alt: string;
    caption?: string;
  }>;
}

export function SimpleImageGallery({ images }: SimpleImageGalleryProps) {
  if (!images || images.length === 0) {
    return (
      <div className="bg-gray-200 aspect-video rounded-lg flex items-center justify-center">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Main Hero Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
        <Image
          src={images[0].url}
          alt={images[0].alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
          {images.length} Photos
        </div>
      </div>

      {/* Thumbnail Grid */}
      {images.length > 1 && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {images.slice(1, 6).map((image) => (
            <div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
