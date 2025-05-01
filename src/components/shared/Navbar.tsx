"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Shared navigation items for both desktop and mobile
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Government Offices", link: "/government-offices" },
    { name: "Hospitals", link: "/hospitals" },
    { name: "Doctors", link: "/doctors" },
    { name: "Educational Institutes", link: "/educational-institutes" },
    { name: "Tourist Spots", link: "/tourist-spots" },
    { name: "Teams", link: "/teams" },
    { name: "Players", link: "/players" },
    { name: "Hotels", link: "/hotels" },
    { name: "Shops", link: "/shops" },
    { name: "Contact Us", link: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrollY > 50
          ? "bg-gray-900/95 backdrop-blur-md py-2 shadow-lg"
          : "bg-gradient-to-r from-gray-900/70 via-gray-800/70 to-gray-900/70 backdrop-blur-sm py-4"
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <a
          href="#"
          className="text-2xl font-extrabold tracking-wide text-white"
        >
          <span className="text-yellow-400">Nasir</span>nagar
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant={
                activeSection === item.link.replace("/", "")
                  ? "default"
                  : "ghost"
              }
              className={cn(
                "text-white hover:text-yellow-200 transition duration-300 cursor-pointer",
                activeSection === item.link.replace("/", "") &&
                  "bg-yellow-600 hover:bg-yellow-700 text-white"
              )}
              onClick={() => (window.location.href = item.link)}
            >
              {item.name}
            </Button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-900/95 backdrop-blur-md max-h-[80vh] overflow-y-auto"
        >
          <div className="flex flex-col py-4 px-4 space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant={
                  activeSection === item.link.replace("/", "")
                    ? "default"
                    : "ghost"
                }
                className={cn(
                  "justify-start text-white hover:text-yellow-200 transition duration-300",
                  activeSection === item.link.replace("/", "") &&
                    "bg-yellow-600 hover:bg-yellow-700 text-white"
                )}
                onClick={() => (window.location.href = item.link)}
              >
                {item.name}
              </Button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
