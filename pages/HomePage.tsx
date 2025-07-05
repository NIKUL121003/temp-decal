
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS } from '../constants';
import { Icon } from '../components/Icon';
import { siteImages } from '../src/image-paths';

const HomePage: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-brand-light">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img src={siteImages.homeHero} alt="High-quality custom decal on ceramic ware" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-heading-montserrat drop-shadow-lg">
            High-Quality Custom Decals
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-light max-w-3xl mx-auto drop-shadow-md">
            Specializing in advanced printing for glass and ceramic products. Our team is ready to bring your designs to life.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/ceramic-decals" className="px-8 py-4 bg-white text-brand-blue font-bold rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
              View Our Work
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-brand-blue text-white font-bold rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
              Request a Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 lg:gap-12">
          <Link to="/ceramic-decals" className="group relative block overflow-hidden rounded-lg shadow-lg">
            <img src={siteImages.ceramicCard} alt="Ceramic decals" className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h2 className="text-3xl font-bold font-heading-poppins">Ceramic Decals</h2>
              <p className="mt-2 mb-4">Permanent, food-safe designs for tableware, tiles, and more.</p>
              <span className="mt-4 px-6 py-3 bg-brand-terracotta text-white font-semibold rounded-lg shadow-md inline-block">
                Explore Ceramic Decals
              </span>
            </div>
          </Link>
          <Link to="/glass-decals" className="group relative block overflow-hidden rounded-lg shadow-lg">
            <img src={siteImages.glassCard} alt="Glass decals" className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h2 className="text-3xl font-bold font-heading-poppins">Glass Decals</h2>
              <p className="mt-2 mb-4">Durable, scratch-resistant branding for bottles and glassware.</p>
               <span className="mt-4 px-6 py-3 bg-brand-terracotta text-white font-semibold rounded-lg shadow-md inline-block">
                Explore Glass Decals
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading-poppins text-brand-dark">Quality You Can See and Feel</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">We combine traditional craftsmanship with modern technology to deliver exceptional results.</p>
          <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center">
              <div className="bg-brand-blue text-white p-4 rounded-full mb-4">
                <Icon type="durability" className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold font-heading-poppins">Unmatched Durability</h3>
              <p className="mt-2 text-gray-600">Fired at high temperatures for a permanent, dishwasher and microwave-safe finish.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-brand-blue text-white p-4 rounded-full mb-4">
                <Icon type="precision" className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold font-heading-poppins">Precision Printing</h3>
              <p className="mt-2 text-gray-600">State-of-the-art technology ensures crisp lines and vibrant, accurate colors.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-brand-blue text-white p-4 rounded-full mb-4">
                <Icon type="custom" className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold font-heading-poppins">Fully Customizable</h3>
              <p className="mt-2 text-gray-600">From your designs to our expert support, we bring your vision to life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading-poppins">Trusted by Creatives and Businesses</h2>
          <div className="relative mt-12 max-w-3xl mx-auto">
            <div className="overflow-hidden relative h-48 flex items-center">
              {TESTIMONIALS.map((testimonial, index) => (
                <div key={testimonial.id} className={`absolute w-full transition-opacity duration-500 ease-in-out ${index === currentTestimonial ? 'opacity-100' : 'opacity-0'}`}>
                  <p className="text-xl italic">"{testimonial.quote}"</p>
                  <p className="mt-4 font-bold text-lg">{testimonial.name}</p>
                  {testimonial.company && <p className="text-brand-gold">{testimonial.company}</p>}
                </div>
              ))}
            </div>
            <button onClick={prevTestimonial} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white/20 hover:bg-white/40" aria-label="Previous testimonial">
                <Icon type="arrow-left" className="w-6 h-6 text-white"/>
            </button>
            <button onClick={nextTestimonial} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white/20 hover:bg-white/40" aria-label="Next testimonial">
                <Icon type="arrow-right" className="w-6 h-6 text-white"/>
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading-poppins text-brand-dark">Have a Project in Mind?</h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-gray-600">Let's discuss your ideas. We provide free, no-obligation quotes for projects of all sizes.</p>
          <div className="mt-8">
            <Link to="/contact" className="px-10 py-4 bg-brand-terracotta text-white text-lg font-bold rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
              Get Your Free Quote Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;