import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import cvImage from '../images/cv-image.png';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center pt-[3vh] p-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-800 mb-2"
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
        className="w-[60%] h-px bg-gray-300 my-6 origin-center"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="w-full max-w-3xl rounded-2xl shadow-lg bg-white p-8 flex items-center space-x-6"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex-shrink-0"
        >
          <img 
            src={cvImage} 
            alt="Profile" 
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-100 shadow-sm"
          />
        </motion.div>
        
        <div className="space-y-3 flex-grow">
          <h2 className="text-2xl font-semibold text-gray-800">About Me</h2>
          <p className="text-gray-600">
            Passionate Computer Scientist and Full-Stack Developer with 6+ years of coding experience and 
            application development.
          </p>
          <div className="flex items-center justify-between pt-2">
            <div>
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700 mr-2">
                Java
              </span>
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700 mr-2">
                C++
              </span>
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                Web Design
              </span>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/about" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-1 px-4 rounded-full transition-all duration-200 shadow-sm hover:font-semibold"
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