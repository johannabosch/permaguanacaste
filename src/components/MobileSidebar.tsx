"use client";

import { useRef } from "react";
import { motion, useCycle, Variants } from "framer-motion";
import { useDimensions } from "@/components/use-dimensions";
import { MenuToggle } from "@/components/MenuToggle";
import { Navigation } from "@/components/Navigation";

const sidebar: Variants = {
  open: (height = 1000) => ({
    clipPath: `inset(0 0 0 0)`,
    transition: {
      type: "spring" as const,
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: `inset(0 0 100% 100%)`,
    transition: {
      delay: 0.5,
      type: "spring" as const,
      stiffness: 400,
      damping: 40
    }
  }
};

export default function MobileSidebar() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef<HTMLElement>(null);
  const { height } = useDimensions(containerRef as React.RefObject<HTMLElement>);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="fixed top-0 right-0 bottom-0 w-[250px] z-50"
    >
      <motion.div
        className="absolute top-0 right-0 bottom-0 w-[250px] bg-white"
        variants={sidebar}
      />
      <Navigation toggle={() => toggleOpen()} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
}