import React from "react";
// Убираем импорт framer-motion
// import { motion } from 'framer-motion';
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1887&auto=format&fit=crop",
    category: "Портрет",
  },
  {
    url: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?q=80&w=1965&auto=format&fit=crop",
    category: "Креатив",
  },
  {
    url: "https://images.unsplash.com/photo-1604268890394-c883e9003d34?q=80&w=1887&auto=format&fit=crop",
    category: "Студия",
  },
  {
    url: "https://images.unsplash.com/photo-1619855544858-e05e1ea2792f?q=80&w=1887&auto=format&fit=crop",
    category: "Эмоции",
  },
  {
    url: "https://images.unsplash.com/photo-1568707043650-eb03f2536825?q=80&w=1887&auto=format&fit=crop",
    category: "Пары",
  },
  {
    url: "https://images.unsplash.com/photo-1635107510039-e5b11c383d02?q=80&w=1965&auto=format&fit=crop",
    category: "Художественное",
  },
];

const GallerySection = () => {
  return (
    <div className="py-16 md:py-24 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
              Галерея наших работ
            </h2>
            <p className="text-lg text-gray-700 max-w-xl">
              Уникальные образы, запечатленные с учетом особенностей восприятия
              каждого клиента
            </p>
          </div>
          <Button
            variant="link"
            className="text-purple-600 mt-4 md:mt-0 flex items-center gap-1 hover:gap-2 transition-all"
          >
            <span>Смотреть все работы</span>
            <ArrowRight size={16} />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            // Заменяем motion.div на обычный div с классами анимации
            <div
              key={index}
              className="opacity-100 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="group relative overflow-hidden rounded-lg shadow-md aspect-[4/5]">
                <img
                  src={image.url}
                  alt={`Нейрофотосессия ${image.category}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-sm font-medium bg-purple-600/80 py-1 px-2 rounded-full">
                    {image.category}
                  </span>
                  <p className="mt-2 text-lg font-semibold">
                    Нейрофотосессия "{image.category}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
