import React from "react";
import { Button } from "@/components/ui/button";

// Убираем импорт framer-motion
// import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-purple-50 to-white overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-12 -left-12 w-48 h-48 bg-purple-200/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 pt-24 md:pt-0 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            {/* Заменяем motion.div на обычный div с классами анимации */}
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair">
                <span className="text-purple-600">Нейро</span>фотосессии нового
                поколения
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
                Раскройте свою индивидуальность с помощью фотосессий, созданных
                с учетом особенностей вашего восприятия и эмоций
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white py-6 px-8 text-lg">
                  Забронировать сессию
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50 py-6 px-8 text-lg"
                >
                  Смотреть портфолио
                </Button>
              </div>

              <div className="mt-8 flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((num) => (
                    <div
                      key={num}
                      className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                    >
                      <img
                        src={`https://i.pravatar.cc/40?img=${num + 20}`}
                        alt="Клиент"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-bold text-purple-600">+50</span>{" "}
                  довольных клиентов в этом месяце
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            {/* Заменяем motion.div на обычный div с классами анимации */}
            <div className="relative animate-fade-in">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1170&auto=format&fit=crop"
                  alt="Нейрофотосессия"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-100 rounded-lg rotate-12 shadow-lg z-0"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-200 rounded-lg -rotate-12 shadow-lg z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
