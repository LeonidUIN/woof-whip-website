"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { Star, Heart, Shield, Award, Instagram, Video, Mail } from 'lucide-react';
import Image from 'next/image';
const exampleImage = "/images/woof-whip.png";

const flavors = [
  {
    name: "PUMKIN SPICE",
    color: "bg-orange-500",
    description: "Fall's favorite flavor for your furry friend!"
  },
  {
    name: "PEANUT BUTTER PAW",
    color: "bg-amber-700",
    description: "Classic peanut butter goodness dogs go crazy for!"
  },
  {
    name: "BEGGIN' BACON",
    color: "bg-red-500",
    description: "Smoky bacon flavor that'll have them begging for more!"
  },
  {
    name: "FETCHIN' CHICKEN",
    color: "bg-yellow-500",
    description: "Farm-fresh chicken taste in every whip!"
  },
  {
    name: "CLASSIC CREAM",
    color: "bg-blue-500",
    description: "The original creamy delight that started it all!"
  }
];

const benefits = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "100% Dog Safe",
    description: "Made with all-natural, dog-friendly ingredients"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Vet Approved",
    description: "Formulated with veterinary nutritionists"
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Premium Quality",
    description: "Only the finest ingredients for your furry family"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Tail Wags Guaranteed",
    description: "If your dog doesn't love it, we'll make it right"
  }
];

const dogPhotos = [
  "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&h=300&fit=crop"
];

export default function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-300 via-yellow-200 to-yellow-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="mb-8">
            <Image 
              src={exampleImage}
              alt="Woof Whip Display" 
              width={500}
              height={300}
              className="mx-auto max-w-md w-full h-auto rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300"
              quality={90}
              priority
              sizes="(max-width: 768px) 100vw, 500px"
              style={{ objectFit: 'contain' }}
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-blue-600 mb-4 transform -rotate-1 hover:rotate-0 transition-transform duration-300" 
              style={{fontFamily: 'Comic Sans MS, cursive'}}>
            Woof Whip
          </h1>
          
          <div className="bg-blue-600 text-white px-8 py-4 rounded-full inline-block transform rotate-1 shadow-lg mb-8">
            <p className="text-2xl md:text-3xl font-bold" style={{fontFamily: 'Comic Sans MS, cursive'}}>
              🐕 100% Tail Wags Guaranteed! 🐕
            </p>
          </div>
          
          <p className="text-xl md:text-2xl text-blue-800 max-w-2xl mx-auto mb-8">
            The first whipped cream made specially for dogs! Watch your furry friend&apos;s face light up with every delicious dollop.
          </p>
          
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-8 py-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            style={{fontFamily: 'Comic Sans MS, cursive'}}
          >
            🛒 Pre-Order Now - $12.99
          </Button>
        </div>
      </section>

      {/* Flavors Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-black text-center text-blue-600 mb-12 transform -rotate-1"
              style={{fontFamily: 'Comic Sans MS, cursive'}}>
            🎨 Flavor Lineup 🎨
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {flavors.map((flavor, index) => (
              <Card key={index} className="transform hover:scale-105 hover:rotate-2 transition-all duration-300 shadow-lg border-4 border-blue-200">
                <CardContent className="p-6 text-center">
                  <div className={`w-20 h-20 ${flavor.color} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                    <span className="text-3xl">🥫</span>
                  </div>
                  <h3 className="font-black text-blue-600 mb-2 text-lg"
                      style={{fontFamily: 'Comic Sans MS, cursive'}}>
                    {flavor.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {flavor.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-blue-100 to-purple-100">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-black text-center text-blue-600 mb-12 transform rotate-1"
              style={{fontFamily: 'Comic Sans MS, cursive'}}>
            🐾 Why Dogs Love Woof Whip 🐾
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center transform hover:scale-105 transition-all duration-300 shadow-lg border-4 border-yellow-300 bg-white">
                <CardContent className="p-6">
                  <div className="text-blue-600 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="font-black text-blue-600 mb-2 text-xl"
                      style={{fontFamily: 'Comic Sans MS, cursive'}}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gradient-to-b from-yellow-200 to-orange-200">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-black text-center text-blue-600 mb-12 transform -rotate-1"
              style={{fontFamily: 'Comic Sans MS, cursive'}}>
            📸 Happy Customers 📸
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                {dogPhotos.map((photo, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="transform hover:scale-105 transition-all duration-300 shadow-lg border-4 border-blue-300">
                      <CardContent className="p-2">
                        <Image 
                          src={photo} 
                          alt={`Happy dog ${index + 1}`}
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover rounded-lg"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-blue-500 text-white border-blue-500" />
              <CarouselNext className="bg-blue-500 text-white border-blue-500" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section className="py-16 bg-gradient-to-r from-purple-400 to-pink-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 transform rotate-1"
              style={{fontFamily: 'Comic Sans MS, cursive'}}>
            🐕 Join the Treat Pack! 🐕
          </h2>
          
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Get exclusive updates, new flavor alerts, and adorable dog content straight to your inbox!
          </p>
          
          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 text-lg py-6 rounded-full border-4 border-white"
              />
              <Button 
                type="submit"
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-800 px-8 py-6 rounded-full font-black shadow-lg"
                style={{fontFamily: 'Comic Sans MS, cursive'}}
              >
                <Mail className="w-5 h-5 mr-2" />
                Join!
              </Button>
            </div>
          </form>
          
          {isSubmitted && (
            <div className="mt-4 bg-green-500 text-white py-3 px-6 rounded-full inline-block font-black">
              🎉 Welcome to the pack! Check your email! 🎉
            </div>
          )}
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-black text-blue-600 mb-6"
              style={{fontFamily: 'Comic Sans MS, cursive'}}>
            Follow Us for Daily Dose of Cuteness!
          </h3>
          
          <div className="flex justify-center gap-6">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full transform hover:scale-110 transition-all duration-200"
            >
              <Instagram className="w-6 h-6 mr-2" />
              @WoofWhipTreats
            </Button>
            <Button 
              size="lg"
              className="bg-black text-white rounded-full transform hover:scale-110 transition-all duration-200"
            >
              <Video className="w-6 h-6 mr-2" />
              @WoofWhipTreats
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl md:text-5xl font-black mb-6 transform -rotate-1"
              style={{fontFamily: 'Comic Sans MS, cursive'}}>
            Stay Whipped, My Friends 🐶
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-black mb-4">Customer Care</h4>
              <p>📧 hello@woofwhip.com</p>
              <p>📞 1-800-WOOF-WHIP</p>
            </div>
            <div>
              <h4 className="font-black mb-4">Quick Links</h4>
              <p>🛒 Pre-Order</p>
              <p>❓ FAQ</p>
              <p>🐕 Dog Safety Guide</p>
            </div>
            <div>
              <h4 className="font-black mb-4">Company</h4>
              <p>📖 Our Story</p>
              <p>🌟 Reviews</p>
              <p>📱 Contact</p>
            </div>
          </div>
          
          <div className="border-t border-blue-400 pt-6">
            <p className="text-blue-200">
              © 2024 Woof Whip. All rights reserved. Made with ❤️ for dogs everywhere.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}