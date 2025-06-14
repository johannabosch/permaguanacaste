import { motion } from "framer-motion";

import Link from "next/link";

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

const menuItems = [
  { label: "ABOUT", href: "/about" },
  { 
    label: "SERVICES", 
    href: "/services",
    subItems: [
      { label: "FOOD SYSTEMS", href: "/services/food-systems" },
      { label: "SOIL HEALTH", href: "/services/soil-health" },
      { label: "HOUSE DESIGN", href: "/services/house-design" },
      { label: "AQUACULTURE", href: "/services/aquaculture" },
      { label: "POND & SWIMMING POOL DESIGN", href: "/services/pond-swimming-pool-design" },
    ]
  },
  { label: "LEARN", href: "/learn" },
  { label: "PROJECTS", href: "/projects" },
  { label: "CONTACT", href: "/contact" },
];

interface NavigationProps {
  toggle: () => void;
}

export function Navigation({ toggle }: NavigationProps) {
  return (
    <motion.ul variants={variants} className="absolute top-24 right-6 w-56 p-0 m-0 text-right">
      {menuItems.map((item) => (
        <motion.li
          key={item.href}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="list-none mb-5 flex flex-col cursor-pointer items-end"
        >
          <Link
            href={item.href}
            className="text-lg font-maname text-gray-500 hover:text-gray-700 transition-colors tracking-widest"
            onClick={toggle}
          >
            {item.label}
          </Link>
          {item.subItems && (
            <div className="mr-4 mt-2 text-right">
              {item.subItems.map((subItem) => (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  className="block text-sm font-maname text-gray-400 hover:text-gray-600 transition-colors tracking-wide mb-2"
                  onClick={toggle}
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          )}
        </motion.li>
      ))}
    </motion.ul>
  );
}