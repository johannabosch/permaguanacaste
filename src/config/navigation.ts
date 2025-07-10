export interface NavigationItem {
  label: string;
  href: string;
  subItems?: NavigationSubItem[];
}

export interface NavigationSubItem {
  label: string;
  href: string;
}

export const navigationItems: NavigationItem[] = [
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "PROJECTS", href: "/projects" },
  { label: "CONTACT", href: "/contact" },
]; 