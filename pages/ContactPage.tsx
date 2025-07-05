import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading-montserrat text-brand-dark">Contact Us</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            We're here to help. Whether you have a question about our process or a specific project in mind, please get in touch using the details below.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold font-heading-poppins mb-4">Contact Details</h3>
            <address className="not-italic space-y-3 text-gray-700">
              <p><strong>Address:</strong><br/>583, Gali Number 1, Shiva Colony, Palla, Faridabad, Haryana 121003</p>
              <div className='space-y-1'>
                <p><strong>Phone:</strong></p>
                <a href="tel:+918920531526" className="text-brand-blue hover:text-brand-terracotta block">+91 89205 31526</a>
                <a href="tel:+917557445050" className="text-brand-blue hover:text-brand-terracotta block">+91 75574 45050</a>
              </div>
              <p><strong>Email:</strong><br/><a href="mailto:decalmaker@proton.me" className="text-brand-blue hover:text-brand-terracotta">decalmaker@proton.me</a></p>
              <p><strong>Website:</strong><br/><a href="http://www.decalmaker.in" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:text-brand-terracotta">www.decalmaker.in</a></p>
            </address>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold font-heading-poppins mb-4">Business Hours</h3>
            <div className="space-y-1 text-gray-700">
              <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
              <p><strong>Saturday:</strong> 10:00 AM - 2:00 PM</p>
              <p><strong>Sunday:</strong> Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;