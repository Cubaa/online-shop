export interface INavMenuItem {
  title: string;
  href: string;
}

export interface INavbarProps {
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
}
