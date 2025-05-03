import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import cvImage from '../images/cv-image.png';
import { FaGithub, FaLinkedin, FaEnvelope, FaLightbulb } from 'react-icons/fa';
import { useDarkMode } from "../useDarkMode";

export default function Home() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  // Set initial theme class
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center pt-[3vh] p-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2 text-center"
      >
        Welcome to My Portfolio
      </motion.h1>
      
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ 
          scaleX: 1,
          transition: { 
            delay: 0.3,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }
        }}
        className="w-[60%] h-px bg-gray-200 dark:bg-gray-700 my-6 origin-center"
      />
    
      {/* Enhanced Social Icons Dock */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex items-center justify-center space-x-6 mb-12 p-4 backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm"
      >
        {[
          { icon: <FaGithub size={24} />, url: "https://github.com/JordanMuller039" },
          { icon: <FaLinkedin size={24} />, url: "https://www.linkedin.com/in/jordan-muller-410177292/" },
          { icon: <FaEnvelope size={24} />, url: "mailto:example@example.com" },
          { icon: <FaLightbulb size={24} className={darkMode ? "text-yellow-300" : "text-gray-700"} />, 
            url: "#", onClick: toggleDarkMode }
        ].map((item, index) => (
          <div key={index} className="flex items-center">
            {index > 0 && (
              <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-6 opacity-70"></div>
            )}
            <motion.a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={item.onClick ? (e) => { e.preventDefault(); item.onClick(); } : undefined}
              whileHover={{ 
                scale: 1.2,
                y: -5,
                rotate: 5,
                transition: { 
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                  duration: 0.4
                }
              }}
              whileTap={{ 
                scale: 0.9,
                transition: { duration: 0.1 }
              }}
              className="p-3 rounded-full hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-all"
            >
              {item.icon}
            </motion.a>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="w-full max-w-3xl rounded-2xl shadow-lg bg-white dark:bg-gray-800 p-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 border border-gray-100 dark:border-gray-700"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="flex-shrink-0"
        >
          <img 
            src={cvImage} 
            alt="Profile" 
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-100 dark:border-gray-700 shadow-md"
          />
        </motion.div>
        
        <div className="space-y-4 flex-grow">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Passionate Computer Scientist and Full-Stack Developer with 6+ years of coding experience and 
            application development. Specializing in creating efficient, scalable solutions with modern technologies.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-3 gap-4">
            <div className="flex flex-wrap gap-2">
              {['Java', 'C++', 'Web Design', 'React', 'Node.js'].map((skill) => (
                <span 
                  key={skill}
                  className="inline-block bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/about" 
                className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}