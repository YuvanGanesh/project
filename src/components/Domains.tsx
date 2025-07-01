import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Brain, Factory, Leaf, Code, Cpu, Zap } from 'lucide-react';

const Domains: React.FC = () => {
  const [expandedDomain, setExpandedDomain] = useState<number | null>(null);

  const domains = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Intelligent automation and predictive analytics solutions',
      gradient: 'from-blue-500 to-cyan-500',
      services: [
        'Custom AI Model Development',
        'Computer Vision Systems',
        'Natural Language Processing',
        'Predictive Analytics Platforms',
        'Automated Decision Systems',
        'Machine Learning Consulting'
      ]
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Smart production and quality control systems',
      gradient: 'from-violet-500 to-purple-500',
      services: [
        'Smart Factory Solutions',
        'Quality Control Automation',
        'Production Line Optimization',
        'Predictive Maintenance',
        'Supply Chain Analytics',
        'Industrial IoT Integration'
      ]
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Green technology and renewable energy solutions',
      gradient: 'from-green-500 to-emerald-500',
      services: [
        'Renewable Energy Systems',
        'Energy Efficiency Optimization',
        'Carbon Footprint Tracking',
        'Environmental Monitoring',
        'Sustainable Process Design',
        'Green Technology Consulting'
      ]
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom solutions and enterprise applications',
      gradient: 'from-orange-500 to-red-500',
      services: [
        'Custom Software Development',
        'Enterprise Application Development',
        'Web and Mobile Applications',
        'System Integration',
        'API Development',
        'Cloud Solutions'
      ]
    },
    {
      icon: Cpu,
      title: 'IoT & Embedded Systems',
      description: 'Connected devices and smart system integration',
      gradient: 'from-pink-500 to-rose-500',
      services: [
        'IoT Device Development',
        'Embedded System Design',
        'Sensor Integration',
        'Real-time Data Processing',
        'Edge Computing Solutions',
        'Wireless Communication Systems'
      ]
    },
    {
      icon: Zap,
      title: 'Automation & Control',
      description: 'Process optimization and intelligent control systems',
      gradient: 'from-yellow-500 to-amber-500',
      services: [
        'Process Automation',
        'Control System Design',
        'SCADA Systems',
        'Robotic Process Automation',
        'Industrial Automation',
        'Smart Building Systems'
      ]
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedDomain(expandedDomain === index ? null : index);
  };

  return (
    <section id="domains" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-6">
            Our Domains
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Click on any domain to explore our comprehensive range of services and solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => {
            const IconComponent = domain.icon;
            const isExpanded = expandedDomain === index;
            
            return (
              <div
                key={index}
                className={`group p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isExpanded 
                    ? 'border-blue-500 shadow-2xl scale-105 lg:col-span-2' 
                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-500/50 hover:scale-105 hover:shadow-xl'
                }`}
                onClick={() => toggleExpanded(index)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${domain.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                    {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {domain.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {domain.description}
                </p>

                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Our Services:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {domain.services.map((service, serviceIndex) => (
                        <div
                          key={serviceIndex}
                          className="flex items-center space-x-3 p-3 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-lg"
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${domain.gradient} rounded-full`}></div>
                          <span className="text-sm text-gray-700 dark:text-gray-200 font-medium">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Domains;