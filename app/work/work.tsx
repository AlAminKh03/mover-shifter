"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const categories = [
  "All",
  "Moving",
  "Wardrobe",
  "TV Table",
  "Carpet",
  "Curtain",
  "Sofa",
  "Majlish",
] as const;

const workItems = [
  {
    title: "Villa relocation — Lusail",
    category: "Moving",
    description:
      "Full pack, load, and delivery — coordinated access and placement",
    images: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=85&w=1600",
    ],
    location: "Lusail, Qatar",
  },
  {
    title: "Modern Sofa Reupholstery",
    category: "Sofa",
    description: "Complete sofa transformation with premium fabric",
    images: ["/sofa/sofafinal-1.jpg"],
    location: "Pearl Qatar",
    isBeforeAfter: true,
  },
  {
    title: "Custom Wardrobe Design",
    category: "Wardrobe",
    description: "Built-in wardrobe with modern design",
    images: ["/almira/almira1.jpg"],
    location: "Al Waab, Doha",
  },
  {
    title: "Luxury Curtain Installation",
    category: "Curtain",
    description: "Premium curtains with motorized system",
    images: [
      "/curtain/curtain1.jpg",
      "/curtain/curtain2.jpg",
      "/curtain/curtain3.jpg",
      "/curtain/curtain4.jpg",

      "/curtain/curtain7.jpg",
      "/curtain/curtain8.jpg",
      "/curtain/curtain9.jpg",
      "/curtain/curtain10.jpg",
    ],
    location: "West Bay, Doha",
  },
  {
    title: "TV Table Installation",
    category: "TV Table",
    description: "Custom TV Table",
    images: [
      "/cabinet/tv1.jpg",
      "/cabinet/tv-cabinet2.jpg",
      "/cabinet/tv-cabinet-3.jpg",

      "/cabinet/white-cabinet1.jpg",
    ],
    location: "Al Sadd, Doha",
  },
  {
    title: "Carpet Installation",
    category: "Carpet",
    description: "High-quality carpet fitting",
    images: [
      "/carpet/carpet1.jpg",
      "/carpet/carpet2.jpg",
      "/carpet/carpet3.jpg",
      "/carpet/carpet4.jpg",
      "/carpet/carpet5.jpg",
      "/carpet/carpet6.jpg",
      "/carpet/carpet7.jpg",
      "/carpet/carpet8.jpg",
    ],
    location: "Lusail, Doha",
  },
  {
    title: "Modern Majlish Design",
    category: "Majlish",
    description:
      "Custom Majlish with premium materials and traditional elements",
    images: [
      "/sofa/sofa-living-room2.jpg",
      "/sofa/sofa-living-room-3.jpg",
      "/sofa/sofa-living-room-4.jpg",
      "/sofa/sofa-living-room-5.jpg",
      "/sofa/sofa-living-room-6.jpg",
      "/sofa/sofa-living-room-9.jpg",
    ],
    location: "The Pearl, Doha",
  },
];

const ImageGallery = ({ images }: { images: string[] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full">
      <div className="relative h-[calc(90vh-6rem)]">
        <Image
          src={images[currentImageIndex]}
          alt="Project image"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 90vw, 85vw"
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={previousImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentImageIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof categories)[number]>("All");

  const filteredWork = workItems.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="layout-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl font-bold mb-4">Our work</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Moves, installs, and interiors — a sample of projects we have
            delivered across Qatar. Filter by category to browse.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-12 flex-wrap px-1">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`min-h-11 px-4 py-2 rounded-full text-sm font-medium transition-colors touch-manipulation ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-accent hover:bg-accent/80 text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWork.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-border/80">
                <Dialog>
                  <DialogTrigger className="w-full text-left">
                    <div className="aspect-video relative overflow-hidden bg-muted">
                      <Image
                        src={work.images[0]}
                        alt={work.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading={index < 6 ? "eager" : "lazy"}
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-[90vw] w-full max-h-[90vh]">
                    <ImageGallery images={work.images} />
                  </DialogContent>
                </Dialog>
                <CardContent className="p-4">
                  <h3 className="font-display font-semibold text-lg mb-1">
                    {work.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {work.description}
                  </p>
                  <p className="text-sm text-primary">{work.location}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
