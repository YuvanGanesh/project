import React from 'react';
import { X, Mail, Phone, MapPin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ProjectModal: React.FC = () => {
  const { showProjectModal, setShowProjectModal } = useTheme();

  if (!showProjectModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Discuss Your Project
          </h3>
          <button
            onClick={() => setShowProjectModal(false)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Have an idea or business challenge? Reach out to us and let's make it real.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
            <div className="p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Email Us</h4>
              </div>
              <a 
                href="mailto:seiyonix.ai@gmail.com"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                seiyonix.ai@gmail.com
              </a>
            </div>

            <div className="p-4 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-xl border border-violet-500/20">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Call Us</h4>
              </div>
              <div className="space-y-1">
                <a 
                  href="tel:+919342475264"
                  className="block text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  93424 75264
                </a>
                <a 
                  href="tel:+919551889752"
                  className="block text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  95518 89752
                </a>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Visit Us</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">
                Chennai, Tamil Nadu
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              We'll get back to you within 24 hours to discuss your project requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;