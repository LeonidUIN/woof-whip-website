import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Scissors, Clock, Star, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-zinc-900/95 backdrop-blur-sm z-50 border-b border-zinc-800">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Scissors className="h-8 w-8 text-amber-500" />
            <span className="text-2xl font-bold">BARBER CLUB</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="hover:text-amber-500 transition-colors">Услуги</a>
            <a href="#about" className="hover:text-amber-500 transition-colors">О нас</a>
            <a href="#gallery" className="hover:text-amber-500 transition-colors">Галерея</a>
            <a href="#reviews" className="hover:text-amber-500 transition-colors">Отзывы</a>
            <a href="#contacts" className="hover:text-amber-500 transition-colors">Контакты</a>
          </div>
          <Button className="bg-amber-500 hover:bg-amber-600 text-black">
            Записаться
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 to-zinc-900/50">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Barbershop interior"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            СТИЛЬ<br />
            <span className="text-amber-500">МУЖСКОГО</span><br />
            ХАРАКТЕРА
          </h1>
          <p className="text-xl mb-8 text-zinc-300 max-w-2xl mx-auto">
            Профессиональные услуги барбера в атмосфере настоящего мужского клуба. 
            Классические стрижки, бритьё и уход за бородой от мастеров своего дела.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black text-lg px-8 py-4">
              Записаться онлайн
            </Button>
            <Button size="lg" variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black text-lg px-8 py-4">
              Наши услуги
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-zinc-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">НАШИ УСЛУГИ</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Классическая стрижка",
                price: "от 1500₽",
                duration: "45 мин",
                description: "Профессиональная мужская стрижка с укладкой"
              },
              {
                title: "Стрижка + борода",
                price: "от 2500₽",
                duration: "60 мин",
                description: "Комплексный уход: стрижка и оформление бороды"
              },
              {
                title: "Бритьё опасной бритвой",
                price: "от 2000₽",
                duration: "40 мин",
                description: "Традиционное бритьё с горячими полотенцами"
              },
              {
                title: "Камуфляж седины",
                price: "от 1800₽",
                duration: "30 мин",
                description: "Окрашивание седых волос натуральными тонами"
              },
              {
                title: "Детская стрижка",
                price: "от 1200₽",
                duration: "30 мин",
                description: "Стрижка для мальчиков до 12 лет"
              },
              {
                title: "VIP-обслуживание",
                price: "от 5000₽",
                duration: "90 мин",
                description: "Полный комплекс услуг с массажем головы"
              }
            ].map((service, index) => (
              <Card key={index} className="bg-zinc-700 border-zinc-600 hover:border-amber-500 transition-colors">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <span className="text-amber-500 text-xl font-bold">{service.price}</span>
                  </div>
                  <div className="flex items-center mb-4 text-zinc-400">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{service.duration}</span>
                  </div>
                  <p className="text-zinc-300">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">О НАС</h2>
              <div className="w-24 h-1 bg-amber-500 mb-8"></div>
              <p className="text-zinc-300 mb-6 text-lg">
                BARBER CLUB — это не просто барбершоп, это место, где каждый мужчина может почувствовать себя настоящим джентльменом. Мы объединили традиции классического барберинга с современными техниками и стилем.
              </p>
              <p className="text-zinc-300 mb-8 text-lg">
                Наши мастера — профессионалы с многолетним опытом, которые знают, как подчеркнуть индивидуальность каждого клиента. Мы используем только качественные инструменты и премиальную косметику.
              </p>
              <div className="flex space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-500 mb-2">5+</div>
                  <div className="text-zinc-400">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-500 mb-2">1000+</div>
                  <div className="text-zinc-400">довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-500 mb-2">4</div>
                  <div className="text-zinc-400">мастера</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1626&q=80"
                alt="Master at work"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-500 text-black p-6 rounded-lg">
                <div className="text-2xl font-bold">Гарантия качества</div>
                <div>100% результат</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-zinc-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">ГАЛЕРЕЯ РАБОТ</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1616951480963-5c4f818a58b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1630003160250-9d087b4e2e64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1622299974646-7571b159b9b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1615511484002-06bb9b6575d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ].map((src, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg cursor-pointer">
                <ImageWithFallback
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">ОТЗЫВЫ КЛИЕНТОВ</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Алексей К.",
                rating: 5,
                text: "Отличный барбершоп! Мастер Дмитрий делает превосходные стрижки. Всегда ухожу довольный. Атмосфера на высшем уровне."
              },
              {
                name: "Михаил В.",
                rating: 5,
                text: "Хожу сюда уже полгода. Качество услуг на высоте, приятная атмосфера, профессиональные мастера. Рекомендую всем!"
              },
              {
                name: "Андрей П.",
                rating: 5,
                text: "Лучший барбершоп в городе! Особенно нравится бритьё опасной бритвой. Процедура расслабляющая и результат превосходный."
              }
            ].map((review, index) => (
              <Card key={index} className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-zinc-300 mb-4 italic">"{review.text}"</p>
                  <div className="font-semibold text-amber-500">{review.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-zinc-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">КОНТАКТЫ</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Свяжитесь с нами</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-amber-500" />
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-zinc-300">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-amber-500" />
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-zinc-300">ул. Тверская, 10, Москва</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-amber-500" />
                  <div>
                    <div className="font-semibold">Часы работы</div>
                    <div className="text-zinc-300">
                      Пн-Пт: 10:00 - 22:00<br />
                      Сб-Вс: 10:00 - 20:00
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Мы в социальных сетях</h4>
                <div className="flex space-x-4">
                  <Button size="icon" variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black">
                    <Twitter className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-zinc-700 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Записаться на приём</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <input
                    type="text"
                    className="w-full p-3 bg-zinc-600 border border-zinc-500 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-amber-500"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <input
                    type="tel"
                    className="w-full p-3 bg-zinc-600 border border-zinc-500 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-amber-500"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Услуга</label>
                  <select className="w-full p-3 bg-zinc-600 border border-zinc-500 rounded-lg text-white focus:outline-none focus:border-amber-500">
                    <option>Классическая стрижка</option>
                    <option>Стрижка + борода</option>
                    <option>Бритьё опасной бритвой</option>
                    <option>VIP-обслуживание</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Дата и время</label>
                  <input
                    type="datetime-local"
                    className="w-full p-3 bg-zinc-600 border border-zinc-500 rounded-lg text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black text-lg py-3">
                  Записаться
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 py-8 border-t border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Scissors className="h-6 w-6 text-amber-500" />
              <span className="font-bold">BARBER CLUB</span>
            </div>
            <div className="text-zinc-400">
              © 2024 Barber Club. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}