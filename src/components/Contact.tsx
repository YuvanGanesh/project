import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-6">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with us today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Email</h3>
            <a 
              href="mailto:seiyonix.ai@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              seiyonix.ai@gmail.com
            </a>
          </div>

          <div className="text-center p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Phone</h3>
            <div className="space-y-2">
              <div>
                <a 
                  href="tel:+919342475264"
                  className="text-blue-600 dark:text-blue-400 hover:underline block"
                >
                  93424 75264
                </a>
              </div>
              <div>
                <a 
                  href="tel:+919551889752"
                  className="text-blue-600 dark:text-blue-400 hover:underline block"
                >
                  95518 89752
                </a>
              </div>
            </div>
          </div>

          <div className="text-center p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Location</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Chennai, Tamil Nadu
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;