export interface NavItem {
    label: string;
    href: string;
  }
  
  export const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Menu', href: '/menu' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];