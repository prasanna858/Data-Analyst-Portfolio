import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact With Me <span className="text-blue-400">My Friend</span>
            </h2>
            <p className="text-xl text-gray-400">Let's discuss how data can drive your business forward</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-gold-400 mx-auto mt-4"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  I'm always interested in new opportunities and collaborations. 
                  Whether you have a project in mind or just want to chat about data analytics, 
                  feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
<div className="space-y-6">
  {/* Email */}
  <a
    href="mailto:prasaindiannavy111@gmail.com"
    className="flex items-center space-x-4 group"
  >
    <div className="p-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
      <Mail className="w-6 h-6 text-white" />
    </div>
    <div>
      <p className="text-gray-400">Email</p>
      <p className="text-white font-semibold">prasaindiannavy111@gmail.com</p>
    </div>
  </a>

  {/* Phone - WhatsApp */}
  <a
    href="https://wa.me/917780142362"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-4 group"
  >
    <div className="p-3 bg-gradient-to-r from-green-400 to-green-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
      <Phone className="w-6 h-6 text-white" />
    </div>
    <div>
      <p className="text-gray-400">Phone (WhatsApp)</p>
      <p className="text-white font-semibold">+91 7780142362</p>
    </div>
  </a>

  {/* Location - Google Maps */}
  <a
    href="https://www.google.com/maps/place/Andhra+Pradesh,+India"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-4 group"
  >
    <div className="p-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
      <MapPin className="w-6 h-6 text-white" />
    </div>
    <div>
      <p className="text-gray-400">Location</p>
      <p className="text-white font-semibold">Andhra Pradesh, India</p>
    </div>
  </a>
</div>


              {/* Social Links */}
              <div className="flex space-x-4 pt-6">
                <a
                  href="https://www.linkedin.com/in/boddepalli-prasanna-kumar-899065365/"
                  className="p-3 bg-gray-700 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/prasanna858"
                  className="p-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-gray-700 text-center">
        <p className="text-gray-400">
          © 2025 Prasanna Kumar. Built with passion for data analytics.
        </p>
      </footer>
    </section>
  );
};

export default ContactSection;