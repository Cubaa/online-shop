export interface INavMenuItem {
  title: string;
  href: string;
}

export interface INavbarProps {
  handleMobileMenuToggle: () => void;
  mobileOpen: boolean;
}
