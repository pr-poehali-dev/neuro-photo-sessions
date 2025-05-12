
import React from 'react';
import { Brain, Camera, Sparkles, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: 'Нейродиагностика',
    description: 'Предварительный анализ особенностей восприятия для создания идеальных фотографий',
    icon: Brain,
  },
  {
    title: 'Уникальные техники',
    description: 'Специальные методики фотографирования, учитывающие индивидуальные особенности',
    icon: Camera,
  },
  {
    title: 'Креативный подход',
    description: 'Необычные идеи и творческие решения для вашей фотосессии',
    icon: Sparkles,
  },
  {
    title: 'Эмоциональная связь',
    description: 'Фотографии, которые отражают ваши истинные эмоции и переживания',
    icon: Heart,
  },
];

const FeatureSection = () => {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair text-gray-900">
            Чем нейрофотосессии отличаются от обычных?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Используем научный подход к созданию фотографий, которые резонируют 
            с вашим восприятием и вызывают глубокий эмоциональный отклик
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 p-3 bg-purple-100 rounded-lg inline-block">
                  <feature.icon className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
