
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Instagram, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="py-16 md:py-24 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
              Запишитесь на нейрофотосессию
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Заполните форму, и мы свяжемся с вами, чтобы обсудить детали и подобрать 
              идеальный формат фотосессии, учитывающий ваши индивидуальные особенности
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-purple-600 mt-1 mr-3" />
                <div>
                  <h4 className="font-medium">Телефон</h4>
                  <p className="text-gray-600">+7 (999) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-purple-600 mt-1 mr-3" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">info@neuro-photo.ru</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-purple-600 mt-1 mr-3" />
                <div>
                  <h4 className="font-medium">Адрес</h4>
                  <p className="text-gray-600">г. Москва, ул. Фотографов, д. 42</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-purple-600 mt-1 mr-3" />
                <div>
                  <h4 className="font-medium">Часы работы</h4>
                  <p className="text-gray-600">Пн-Пт: 10:00 - 20:00, Сб: 11:00 - 18:00</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="https://instagram.com" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
                <Instagram className="w-5 h-5 text-purple-600" />
              </a>
              <span className="text-gray-600">@neurophoto</span>
            </div>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6">Оставьте заявку</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Имя
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Ваше имя" 
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Телефон
                  </label>
                  <Input 
                    id="phone" 
                    placeholder="+7 (___) ___-__-__" 
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="example@mail.ru" 
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="session" className="block text-sm font-medium text-gray-700 mb-1">
                  Тип фотосессии
                </label>
                <select 
                  id="session" 
                  className="w-full rounded-md border-gray-300 focus:border-purple-500 focus:ring-purple-500 py-2 px-3 text-sm"
                >
                  <option value="">Выберите тип фотосессии</option>
                  <option value="portrait">Портретная</option>
                  <option value="creative">Креативная</option>
                  <option value="family">Семейная</option>
                  <option value="business">Деловая</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Сообщение
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Расскажите нам о ваших пожеланиях..." 
                  className="w-full"
                  rows={4}
                />
              </div>
              
              <Button className="w-full bg-purple-600 hover:bg-purple-700 py-6">
                Отправить заявку
              </Button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                Нажимая кнопку "Отправить заявку", вы соглашаетесь с условиями обработки персональных данных.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
