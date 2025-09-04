export interface NavigationItem {
  key: string;
  href: string;
  subItems?: NavigationSubItem[];
}

export interface NavigationSubItem {
  key: string;
  href: string;
}

export const navigationItems: NavigationItem[] = [
  { key: "projects", href: "#projects" },
  { key: "services", href: "#services" },
  { key: "about", href: "#story" },
  { key: "contact", href: "#contact" },
]; 