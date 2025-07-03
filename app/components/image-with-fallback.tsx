"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"

interface ImageWithFallbackProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string
}

export default function ImageWithFallback({
  src,
  fallbackSrc = "/images/placeholder.jpg",
  alt,
  ...rest
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image
      {...rest}
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      onError={() => {
        console.log(`Image failed to load: ${src}`)
        setImgSrc(fallbackSrc)
      }}
    />
  )
}
