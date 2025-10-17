"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"

interface BeforeAfterItem {
  id: number
  title: string
  category: string
}

export default function Gallery() {
  const [sliderPositions, setSliderPositions] = useState<Record<number, number>>({
    1: 50,
    2: 50,
    3: 50,
    4: 50,
    5: 50,
    6: 50,
  })

  const galleryItems: BeforeAfterItem[] = [
    { id: 1, title: "Exterior Restoration", category: "Exterior" },
    { id: 2, title: "Paint Correction", category: "Exterior" },
    { id: 3, title: "Interior Deep Clean", category: "Interior" },
    { id: 4, title: "Leather Conditioning", category: "Interior" },
    { id: 5, title: "Ceramic Coating", category: "Protection" },
    { id: 6, title: "Full Detail Service", category: "Complete" },
  ]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    const container = e.currentTarget
    const rect = container.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPositions((prev) => ({
      ...prev,
      [id]: Math.max(0, Math.min(100, percentage)),
    }))
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>, id: number) => {
    const container = e.currentTarget
    const rect = container.getBoundingClientRect()
    const x = e.touches[0].clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPositions((prev) => ({
      ...prev,
      [id]: Math.max(0, Math.min(100, percentage)),
    }))
  }

  const imagePairs: Record<number, { before: string; after: string }> = {
    // 1: Jeep Wrangler (muddy -> cleaned)
    1: {
      before: "https://images.pexels.com/photos/11207122/pexels-photo-11207122.jpeg",
      after: "https://images.pexels.com/photos/11209086/pexels-photo-11209086.jpeg",
    },
    // 2: Ford Mustang (wet/dirty -> polished)
    2: {
      before: "https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg",
      after: "https://images.pexels.com/photos/3065602/pexels-photo-3065602.jpeg",
    },
    // 3: Toyota/Tacoma style truck (muddy -> cleaned)
    3: {
      before: "https://images.pexels.com/photos/18078013/pexels-photo-18078013.jpeg",
      after: "https://images.pexels.com/photos/19667151/pexels-photo-19667151.jpeg",
    },
    // 4: Subaru/outdoor SUV (muddy -> cleaned)
    4: {
      before: "https://images.pexels.com/photos/15928393/pexels-photo-15928393.jpeg",
      after: "https://images.pexels.com/photos/34295404/pexels-photo-34295404.jpeg",
    },
    // 5: BMW (aged/dirty -> showroom clean)
    5: {
      before: "https://images.pexels.com/photos/13938281/pexels-photo-13938281.jpeg",
      after: "https://images.pexels.com/photos/11139416/pexels-photo-11139416.jpeg",
    },
    // 6: Generic off-road SUV (muddy -> after detail)
    6: {
      before: "https://images.pexels.com/photos/28767876/pexels-photo-28767876.jpeg",
      after: "https://images.pexels.com/photos/6536963/pexels-photo-6536963.jpeg",
    },
  }

  return (
    <section id="gallery" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 badge-metallic">
            <span className="text-primary font-semibold text-sm">Our Work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Before & After Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the dramatic transformations we achieve with our premium detailing services. Drag the slider to compare
            before and after.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="group">
              {/* Before/After Slider Container */}
              <div
                className="relative w-full aspect-square rounded-lg overflow-hidden bg-card border border-border cursor-col-resize"
                onMouseMove={(e) => handleMouseMove(e, item.id)}
                onTouchMove={(e) => handleTouchMove(e, item.id)}
              >
                {/* Before Image */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={imagePairs[item.id].before}
                    alt={`${item.title} - Before`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>

                {/* After Image (Overlay) */}
                <div
                  className="absolute inset-0 w-full h-full overflow-hidden"
                  style={{ width: `${sliderPositions[item.id]}%` }}
                >
                  <Image
                    src={imagePairs[item.id].after}
                    alt={`${item.title} - After`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>

                {/* Slider Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-accent transition-all"
                  style={{ left: `${sliderPositions[item.id]}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent rounded-full shadow-lg flex items-center justify-center">
                    <div className="flex gap-1">
                      <div className="w-0.5 h-4 bg-background rounded-full"></div>
                      <div className="w-0.5 h-4 bg-background rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded text-white text-xs font-semibold">
                  After
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded text-white text-xs font-semibold">
                  Before
                </div>
              </div>

              {/* Item Info */}
              <div className="mt-4">
                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 bg-card border border-border rounded-xl p-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2 metallic-text">1000+</div>
            <p className="text-sm text-muted-foreground">Vehicles Detailed</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2 metallic-text">98%</div>
            <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2 metallic-text">15+</div>
            <p className="text-sm text-muted-foreground">Awards Won</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2 metallic-text">24/7</div>
            <p className="text-sm text-muted-foreground">Customer Support</p>
          </div>
        </div>
      </div>
    </section>
  )
}
