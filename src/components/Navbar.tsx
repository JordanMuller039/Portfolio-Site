import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

// Correct import paths - point to src/images/
import HomeIcon from '../images/home.png';
import AboutIcon from '../images/about.png';
import ProjectsIcon from '../images/projects.png';
import ContactIcon from '../images/contact.png';

const NavItem = ({ to, icon, children }: { to: string; icon: string; children: string }) => (
  <motion.div
    whileHover={{
      x: -4,
      transition: { duration: 0.2, ease: "easeOut" }
    }}
    className="relative"
  >
    <Link
      to={to}
      className="flex items-center gap-2 px-6 py-3 text-gray-800 font-medium tracking-wide
                 hover:text-indigo-600 hover:font-bold transition-all duration-200 group"
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
      <span>
        {children}
      </span>
      <motion.span
        initial={{ scaleX: 0 }}
        whileHover={{
           scaleX: 1,
          transition: { duration: 0.3 }
        }}
        className="absolute bottom-2 left-0 w-full h-[1.5px] bg-indigo-600 origin-left"
      />
    </Link>
  </motion.div>
);

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="flex justify-center">
        <NavItem to="/" icon={HomeIcon}>Home</NavItem>
        <NavItem to="/about" icon={AboutIcon}>About</NavItem>
        <NavItem to="/projects" icon={ProjectsIcon}>Projects</NavItem>
        <NavItem to="/contact" icon={ContactIcon}>Contact</NavItem>
      </div>
    </nav>
  );
}