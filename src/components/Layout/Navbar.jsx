import { useState, useEffect } from "react";
import logo from "../../assets/logowhite.png";
import BubbleMenu from "./BubbleMenu";

// Define menu items
const navItems = [
  {
    label: 'home',
    href: '/',
    ariaLabel: 'Home',
    rotation: -8,
    hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
  },
  {
    label: 'about',
    href: '/about',
    ariaLabel: 'About',
    rotation: 8,
    hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
  },
  {
    label: 'projects',
    href: '/projects',
    ariaLabel: 'Projects',
    rotation: 8,
    hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
  },
  {
    label: 'contact',
    href: '/contact',
    ariaLabel: 'Contact',
    rotation: -8,
    hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
  }
];

export default function Navbar() {
  return (
    <BubbleMenu
      logo={logo}
      items={navItems}
      menuAriaLabel="Toggle navigation"
      menuBg="#000000" 
      menuContentColor="#ffffff" 
      useFixedPosition={true}
      animationEase="back.out(1.5)"
      animationDuration={.8}
      staggerDelay={0.12}
      className="fixed top-15 w-full z-50" 
    />
  );
}