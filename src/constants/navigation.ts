interface NavigationI {
  id: string;
  href: string;
  linkName: string;
}
export const header_navigation_data: NavigationI[] = [
  { id: "1", href: "/", linkName: "Home" },
  { id: "2", href: "/contact", linkName: "Contact Us" },
  { id: "3", href: "/about", linkName: "About Us" },
];
