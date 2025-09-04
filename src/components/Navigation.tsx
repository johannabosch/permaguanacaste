import { motion } from "framer-motion";
import { navigationItems } from "@/config/navigation";
import { useLanguage } from "../contexts/LanguageContext";

const variants = {
  open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { y: { stiffness: 1000, velocity: -100 } }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: { y: { stiffness: 1000 } }
  }
};

interface NavigationProps {
  toggle: () => void;
}

// Smooth scroll function
const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

// Handle navigation click
const handleNavClick = (href: string, toggle: () => void) => {
  toggle(); // Close the sidebar first
  
  // If it's an anchor link, smooth scroll to it
  if (href.startsWith('#')) {
    const elementId = href.substring(1); // Remove the # symbol
    // Small delay to allow sidebar to close first
    setTimeout(() => {
      smoothScrollTo(elementId);
    }, 300);
  }
  // For external links, let the Link component handle it normally
};

export function Navigation({ toggle }: NavigationProps) {
  const { t } = useLanguage();
  
  return (
    <motion.ul variants={variants} className="absolute top-24 right-6 w-56 p-0 m-0 text-right">
      {navigationItems.map((item) => (
        <motion.li
          key={`mobile-${item.href}`}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="list-none mb-5 flex flex-col cursor-pointer items-end"
        >
          <div
            onClick={() => handleNavClick(item.href, toggle)}
            className="text-lg font-luxury text-gray-500 hover:text-gray-700 transition-colors tracking-widest cursor-pointer"
          >
            {t.navigation[item.key as keyof typeof t.navigation]}
          </div>
          {item.subItems && (
            <div className="mr-4 mt-2 text-right">
              {item.subItems.map((subItem) => (
                <div
                  key={`mobile-sub-${subItem.href}`}
                  onClick={() => handleNavClick(subItem.href, toggle)}
                  className="block text-sm font-luxury text-gray-400 hover:text-gray-600 transition-colors tracking-wide mb-2 cursor-pointer"
                >
                  {subItem.key}
                </div>
              ))}
            </div>
          )}
        </motion.li>
      ))}
    </motion.ul>
  );
}