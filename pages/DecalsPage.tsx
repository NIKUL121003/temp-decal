
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { DecalsPageProps, GalleryImage } from '../types';
import Modal from '../components/Modal';

const DecalsPage: React.FC<DecalsPageProps> = ({ title, bannerImage, intro, galleryImages, galleryCategories }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);
  
  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
  };
  
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img src={bannerImage} alt={`${title} banner`} className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading-montserrat drop-shadow-lg">{title}</h1>
        </div>
      </section>
      
      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-lg text-gray-700 font-body-lato leading-relaxed">
            {intro}
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-16 bg-brand-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-heading-poppins text-center mb-4">Our Work</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">Explore examples of our {title.toLowerCase()}. Click on any image to see more details.</p>

          {/* Filter Buttons */}
          <div className="flex justify-center flex-wrap gap-2 mb-12">
            {galleryCategories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                  activeCategory === category
                    ? 'bg-brand-blue text-white shadow-md'
                    : 'bg-white text-brand-dark hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div key={image.id} className="group relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow-lg cursor-pointer" onClick={() => openModal(image)}>
                <img 
                  src={image.src} 
                  alt={image.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading-poppins text-brand-dark">Ready to start your {title.split(' ')[0].toLowerCase()} project?</h2>
          <div className="mt-8">
            <Link to="/contact" className="px-10 py-4 bg-brand-terracotta text-white text-lg font-bold rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
              Contact us for a quote
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Modal isOpen={!!selectedImage} onClose={closeModal}>
        {selectedImage && (
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <img src={selectedImage.src} alt={selectedImage.title} className="rounded-lg w-full object-contain max-h-[70vh]"/>
            <div className="p-2">
              <h3 className="text-2xl font-bold font-heading-poppins mb-2">{selectedImage.title}</h3>
              <p className="text-gray-600 leading-relaxed">{selectedImage.description}</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default DecalsPage;
