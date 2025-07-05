
import React from 'react';
import { Icon } from '../components/Icon';
import { siteImages } from '../src/image-paths';

const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 flex items-center justify-center text-center">
         <img src={siteImages.aboutBanner} alt="The Decal Maker workshop" className="absolute inset-0 w-full h-full object-cover" />
         <div className="absolute inset-0 bg-brand-blue/70 z-10"></div>
         <div className="relative z-20 container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading-montserrat drop-shadow-lg">About Decal Maker</h1>
          <p className="mt-2 text-lg md:text-xl">Our Passion for Perfect Prints</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <img src={siteImages.aboutStory} alt="Founder of Decal Maker" className="rounded-lg shadow-xl w-full h-auto object-cover" />
          </div>
          <div className="md:col-span-3">
            <h2 className="text-3xl md:text-4xl font-bold font-heading-poppins text-brand-dark mb-4">Our Story</h2>
            <div className="space-y-4 text-lg text-gray-700 font-body-lato leading-relaxed">
              <p>
                Our company specializes in producing high-quality decals for a variety of applications. We use state-of-the-art printing equipment and techniques to ensure every decal meets the highest standards of quality and durability.
              </p>
              <p>
                In addition to standard decals, we offer custom decal printing services for personalized, unique designs. Our team is dedicated to providing excellent customer service and ensuring every order is completed on time and to the satisfaction of our clients. We deliver top-quality decals and strive to exceed customer expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading-poppins text-brand-dark">Our Core Values</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">These principles guide every decal we print and every partnership we build.</p>
          <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-brand-terracotta text-white p-4 rounded-full mb-4">
                <Icon type="quality" className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold font-heading-poppins">Uncompromising Quality</h3>
              <p className="mt-2 text-gray-600">We source the best materials and use state-of-the-art equipment to ensure every decal is flawless.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-brand-terracotta text-white p-4 rounded-full mb-4">
                <Icon type="partnership" className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold font-heading-poppins">Client Partnership</h3>
              <p className="mt-2 text-gray-600">We see ourselves as an extension of your team, providing support and expertise to ensure your project's success.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-brand-terracotta text-white p-4 rounded-full mb-4">
                <Icon type="innovation" className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold font-heading-poppins">Continuous Innovation</h3>
              <p className="mt-2 text-gray-600">We constantly refine our processes and explore new techniques to push the boundaries of what's possible in decal printing.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;