import React from 'react';
import { ArrowRight, Brain, Factory, Leaf, Code, Cpu, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Hero: React.FC = () => {
  const { setShowProjectModal } = useTheme();

  const domains = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Intelligent automation & predictive analytics',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Smart production & quality control',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Green technology & renewable solutions',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom solutions & enterprise tools',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Cpu,
      title: 'IoT & Embedded',
      description: 'Connected devices & smart systems',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Process optimization & control systems',
      gradient: 'from-yellow-500 to-amber-500'
    }
  ];

  const scrollToDomains = () => {
    const element = document.getElementById('domains');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-full border border-blue-500/20 mb-8">
            <Zap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Deep Tech Innovation
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 bg-clip-text text-transparent">
              Action + Futurism
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Building Smart, Sustainable Innovation
          </p>
          
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            Seiyonix is a new-age tech startup building powerful solutions in AI, IoT, and sustainable systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToDomains}
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-violet-500 text-white rounded-xl hover:from-blue-600 hover:to-violet-600 transition-all duration-200 hover:scale-105 font-medium flex items-center space-x-2"
            >
              <span>Explore Domains</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => setShowProjectModal(true)}
              className="px-8 py-4 border-2 border-blue-500 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-200 hover:scale-105 font-medium"
            >
              Discuss Your Project
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => {
            const IconComponent = domain.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                onClick={scrollToDomains}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${domain.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {domain.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {domain.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;