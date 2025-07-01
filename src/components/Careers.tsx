import React from 'react';
import { Users, Clock, Mail, Star } from 'lucide-react';

const Careers: React.FC = () => {
  const opportunities = [
    'AI & Machine Learning',
    'Embedded Systems & IoT',
    'Automation & Control',
    'Green Technology & Sustainability',
    'Full-Stack or Backend Development (for internal tools and dashboards)'
  ];

  return (
    <section id="careers" className="py-20 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-6">
            Careers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Seiyonix is growing — and we're looking for innovators to grow with us.
            </h3>
            
            <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              <p>
                We hire on a project basis, offering flexible opportunities for students, freelancers, 
                and domain experts who are passionate about building solutions in:
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {opportunities.map((opportunity, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {opportunity}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Whether you're a student looking to gain real experience or a freelancer eager to work 
              on breakthrough ideas, you're welcome here.
            </p>

            <div className="p-6 bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-2xl border border-blue-500/20 mb-8">
              <div className="flex items-center mb-4">
                <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Ready to Join Us?
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Send your resume and your domains of interest to:
              </p>
              <a 
                href="mailto:seiyonix.ai@gmail.com"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-violet-500 text-white rounded-lg hover:from-blue-600 hover:to-violet-600 transition-all duration-200 hover:scale-105 font-medium"
              >
                <Mail className="h-4 w-4 mr-2" />
                seiyonix.ai@gmail.com
              </a>
            </div>

            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              Let's build the future, one project at a time.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Flexible Work</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Project-based opportunities that fit your schedule and expertise level.
              </p>
            </div>

            <div className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Real Impact</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Work on cutting-edge projects that solve real-world problems and drive innovation.
              </p>
            </div>

            <div className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-4">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Learn & Grow</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Collaborate with passionate engineers and gain valuable experience in deep tech.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;