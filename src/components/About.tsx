import React from 'react';
import { Users, Target, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-6">
            About Seiyonix
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h3>
            <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Seiyonix is a forward-thinking deep-tech startup founded by two passionate engineers — 
                <span className="font-semibold text-blue-600 dark:text-blue-400"> Prithivi Raj</span> (Electrical and Electronics Engineering) and 
                <span className="font-semibold text-violet-600 dark:text-violet-400"> Showmik Kumaar</span> (Electronics and Communication Engineering).
              </p>
              <p>
                What began as a series of late-night brainstorms and passion projects quickly turned into a vision: 
                to create scalable, real-world solutions using the power of AI, IoT, automation, and sustainable engineering.
              </p>
              <p>
                We're driven by a simple idea — <span className="font-semibold text-gray-900 dark:text-white">"Action + Futurism"</span>. 
                That means solving today's toughest problems using tomorrow's technologies.
              </p>
              <p>
                With technical depth, bold ideas, and a builder's mindset, we're here to make real impact across industries.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Our Mission</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                To bridge the gap between cutting-edge technology and practical solutions that drive sustainable progress.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-2xl border border-violet-500/20">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <Lightbulb className="h-5 w-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Our Vision</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                A future where intelligent automation and sustainable innovation create lasting positive impact for society.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Our Values</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Innovation, sustainability, technical excellence, and collaborative problem-solving guide everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;