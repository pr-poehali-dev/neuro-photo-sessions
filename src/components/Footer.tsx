
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-semibold text-white font-playfair">
              НейроФото
            </Link>
            <p className="mt-4 text-gray-400">
              Уникальные фотосессии, созданные с учетом особенностей восприятия каждого клиента.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://youtube.com" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  Портфолио
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  О нейрофотосессиях
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Цены
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/portrait" className="text-gray-400 hover:text-white transition-colors">
                  Портретная фотосессия
                </Link>
              </li>
              <li>
                <Link to="/services/creative" className="text-gray-400 hover:text-white transition-colors">
                  Креативная фотосессия
                </Link>
              </li>
              <li>
                <Link to="/services/family" className="text-gray-400 hover:text-white transition-colors">
                  Семейная фотосессия
                </Link>
              </li>
              <li>
                <Link to="/services/business" className="text-gray-400 hover:text-white transition-colors">
                  Деловая фотосессия
                </Link>
              </li>
              <li>
                <Link to="/services/event" className="text-gray-400 hover:text-white transition-colors">
                  Репортажная съемка
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white mb-4">Контакты</h3>
            <address className="not-italic">
              <p className="mb-2">г. Москва, ул. Фотографов, д. 42</p>
              <p className="mb-2">+7 (999) 123-45-67</p>
              <p className="mb-2">info@neuro-photo.ru</p>
              <p>Пн-Пт: 10:00 - 20:00, Сб: 11:00 - 18:00</p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} НейроФото. Все права защищены.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
