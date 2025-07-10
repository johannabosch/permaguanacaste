import { motion } from "framer-motion";

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2.5"
    stroke="#6B7280"
    strokeLinecap="round"
    {...props}
  />
);

interface MenuToggleProps {
  toggle: () => void;
}

export function MenuToggle({ toggle }: MenuToggleProps) {
  return (
    <button
      onClick={toggle}
      className="absolute top-8 right-4 z-50 w-10 h-10 rounded-full 
      bg-[#DBD2CD] backdrop-blur-sm border border-white/20 cursor-pointer outline-none flex items-center justify-center hover:bg-white/20 transition-all duration-200"
      aria-label="Toggle menu"
    >
      <svg width="20" height="20" viewBox="0 0 23 23" className="flex-shrink-0">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </button>
  );
}