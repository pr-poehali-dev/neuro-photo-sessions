
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Анна М.',
    role: 'Модель',
    content: 'Нейрофотосессия стала для меня настоящим открытием. Фотограф учел особенности моего восприятия и создал снимки, которые отражают мой внутренний мир гораздо лучше, чем обычные фотографии.',
    avatar: 'https://i.pravatar.cc/64?img=5'
  },
  {
    name: 'Сергей К.',
    role: 'Предприниматель',
    content: 'Я скептически относился к идее нейрофотосессии, но результат превзошел все ожидания. Фотографии получились такими, словно они читают мои мысли и показывают лучшую версию меня.',
    avatar: 'https://i.pravatar.cc/64?img=12'
  },
  {
    name: 'Елена Д.',
    role: 'Психолог',
    content: 'Как специалист в области психологии, я была впечатлена научным подходом к фотосессии. Результат - фотографии, которые резонируют с моим эмоциональным состоянием и передают его зрителю.',
    avatar: 'https://i.pravatar.cc/64?img=9'
  },
  {
    name: 'Михаил В.',
    role: 'Дизайнер',
    content: 'Удивительный опыт! Фотографии получились не просто красивыми, они рассказывают историю и вызывают эмоции. Определенно рекомендую нейрофотосессию всем, кто хочет получить что-то особенное.',
    avatar: 'https://i.pravatar.cc/64?img=15'
  },
];

const TestimonialSection = () => {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
            Отзывы наших клиентов
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Узнайте, что говорят люди, прошедшие нейрофотосессию
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                <Card className="border border-gray-100 shadow-sm h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <Quote className="h-8 w-8 text-purple-300 mb-4" />
                    <p className="text-gray-700 mb-6 flex-grow">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <div className="mr-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static translate-y-0 mr-2" />
            <CarouselNext className="relative static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialSection;
