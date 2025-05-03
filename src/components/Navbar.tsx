import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useDarkMode } from '../useDarkMode'; // Make sure to create this hook

// Correct import paths - point to src/images/
import HomeIcon from '../images/home.png';
import AboutIcon from '../images/about.png';
import ProjectsIcon from '../images/projects.png';
import ContactIcon from '../images/contact.png';

const NavItem = ({ 
  to, 
  icon, 
  children,
  darkMode 
}: { 
  to: string; 
  icon: string; 
  children: string;
  darkMode: boolean;
}) => (
  <motion.div
    whileHover={{
      x: -4,
      transition: { duration: 0.2, ease: "easeOut" }
    }}
    className="relative"
  >
    <Link
      to={to}
      className={`flex items-center gap-2 px-6 py-3 font-medium tracking-wide
                 transition-all duration-200 group
                 ${darkMode ? 
                   'text-gray-300 hover:text-indigo-400' : 
                   'text-gray-800 hover:text-indigo-600'
                 }`}
    >
      <motion.img
        src={icon}
        alt={`${children} icon`}
        className="h-5 w-5 object-contain"
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.3 }
        }}
      />
      <span className={darkMode ? 'group-hover:font-semibold' : 'group-hover:font-bold'}>
        {children}
      </span>
      <motion.span
        initial={{ scaleX: 0 }}
        whileHover={{
          scaleX: 1,
          transition: { duration: 0.3 }
        }}
        className={`absolute bottom-2 left-0 w-full h-[1.5px] origin-left
                   ${darkMode ? 'bg-indigo-400' : 'bg-indigo-600'}`}
      />
    </Link>
  </motion.div>
);

export default function Navbar() {
  const { darkMode } = useDarkMode(); // Using the dark mode hook

  return (
    <nav className={`border-b shadow-sm transition-colors duration-300
                   ${darkMode ? 
                     'bg-gray-800 border-gray-700' : 
                     'bg-white border-gray-200'
                   }`}
    >
      <div className="flex justify-center">
        <NavItem to="/" icon={HomeIcon} darkMode={darkMode}>Home</NavItem>
        <NavItem to="/about" icon={AboutIcon} darkMode={darkMode}>About</NavItem>
        <NavItem to="/projects" icon={ProjectsIcon} darkMode={darkMode}>Projects</NavItem>
        <NavItem to="/contact" icon={ContactIcon} darkMode={darkMode}>Contact</NavItem>
      </div>
    </nav>
  );
}