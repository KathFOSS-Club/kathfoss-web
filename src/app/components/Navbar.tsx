"use client";
import { useState, useEffect } from "react";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiBook,
  FiUsers,
  FiTarget,
  FiCalendar,
} from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import {
  FiArchive,
  FiBookOpen,
  FiFileText,
  FiHeart,
  FiDollarSign,
  FiGithub,
  FiAward,
  FiClock,
  FiPackage,
  FiTool,
  FiDatabase,
} from "react-icons/fi";
import { Box } from "@mui/material";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      component="header"
      className={`fixed w-full z-50 transition-all duration-300 text-white text-lg h-20`}
      sx={{
        backgroundColor: isScrolled
          ? "rgba(24, 22, 48, 0.8)"
          : "rgba(24, 22, 48)",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        boxShadow: isScrolled ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
        padding: "10px 20px",
        transition:
          "background-color 0.3s, backdrop-filter 0.3s, box-shadow 0.3s",
      }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-full max-w-screen-xl">
        {/* Logo */}
        <div className="flex items-center space-x-20">
          <Link href="/" className="transition-transform flex-shrink-0">
            <Image
              src="/assets/logo.svg"
              alt="kathfoss-logo"
              width={210}
              height={30}
              className="h-10"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-8 mx-8">
            <Link href="/" className="nav-link">
              Home
            </Link>

            {/* About Dropdown */}
            <div className="relative group">
              <button className="nav-link flex items-center gap-1 group">
                About
                <FiChevronDown className="transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block transform transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0">
                <div className="p-4 bg-gray-800 rounded-lg shadow-xl border border-gray-700 mt-2 w-72">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-blue-400 mb-2">
                      Discover Us
                    </h3>
                    <Link href="/mission-vision" className="menu-item">
                      <FiTarget className="text-blue-400 mt-7" />
                      <div>
                        <h4 className="font-medium">Mission & Vision</h4>
                        <p className="text-sm text-gray-400">
                          Our goals and aspirations
                        </p>
                      </div>
                    </Link>
                    <Link href="/team" className="menu-item">
                      <FiUsers className="text-blue-400" />
                      <div>
                        <h4 className="font-medium">Our Team</h4>
                        <p className="text-sm text-gray-400">
                          Meet the people behind KOSS
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects Mega Dropdown */}
            <div className="relative group">
              <button className="nav-link flex items-center gap-1 group">
                Projects
                <FiChevronDown className="transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block transform transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0">
                <div className="p-6 bg-gray-800 rounded-lg shadow-xl border border-gray-700 mt-2 w-[42rem]">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-blue-400 mb-4">
                        Project Categories
                      </h3>
                      <div className="space-y-4">
                        <Link href="/projects/graduated" className="menu-item">
                          <FiAward className="text-blue-400" />
                          <div>
                            <h4 className="font-medium">Graduated</h4>
                            <p className="text-sm text-gray-400">
                              Production-ready projects
                            </p>
                          </div>
                        </Link>
                        <Link href="/projects/incubating" className="menu-item">
                          <FiPackage className="text-blue-400" />
                          <div>
                            <h4 className="font-medium">Incubating</h4>
                            <p className="text-sm text-gray-400">
                              Growing projects
                            </p>
                          </div>
                        </Link>
                        <Link href="/projects/sandbox" className="menu-item">
                          <FiTool className="text-blue-400" />
                          <div>
                            <h4 className="font-medium">Sandbox</h4>
                            <p className="text-sm text-gray-400">
                              Experimental projects
                            </p>
                          </div>
                        </Link>
                        <Link href="/projects/archived" className="menu-item">
                          <FiArchive className="text-blue-400" />
                          <div>
                            <h4 className="font-medium">Archived</h4>
                            <p className="text-sm text-gray-400">
                              Completed projects
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="border-l border-gray-700 pl-8">
                      <h3 className="text-xl font-bold text-blue-400 mb-4">
                        Featured Projects
                      </h3>
                      <div className="space-y-4">
                        <div className="menu-item">
                          <FiDatabase className="text-blue-400" />
                          <div>
                            <h4 className="font-medium text-blue-400">
                              Project Metrics
                            </h4>
                            <p className="text-sm text-gray-400">
                              View detailed statistics and analytics
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Events Dropdown */}
            <div className="relative group">
              <button className="nav-link flex items-center gap-1 group">
                Events
                <FiChevronDown className="transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block transform transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0">
                <div className="p-4 bg-gray-800 rounded-lg shadow-xl border border-gray-700 mt-2 w-80">
                  <h3 className="text-xl font-bold text-blue-400 mb-4">
                    Our Events
                  </h3>
                  <div className="space-y-4">
                    <Link href="/events/upcoming" className="menu-item">
                      <FiCalendar className="text-blue-400" />
                      <div>
                        <h4 className="font-medium">Upcoming Events</h4>
                        <p className="text-sm text-gray-400">
                          Check our scheduled events
                        </p>
                      </div>
                    </Link>
                    <Link href="/events/past" className="menu-item">
                      <FiClock className="text-blue-400" />
                      <div>
                        <h4 className="font-medium">Past Events</h4>
                        <p className="text-sm text-gray-400">
                          Browse our event history
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="nav-link flex items-center gap-1 group">
                Resources
                <FiChevronDown className="transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block transform transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0">
                <div className="p-4 bg-gray-800 rounded-lg shadow-xl border border-gray-700 mt-2 w-96">
                  <h3 className="text-xl font-bold text-blue-400 mb-4">
                    Learning Resources
                  </h3>
                  <div className="space-y-4">
                    <Link href="/blogs" className="menu-item">
                      <FiBookOpen className="text-blue-400" />
                      <div>
                        <h4 className="font-medium">Blogs</h4>
                        <p className="text-sm text-gray-400">
                          Read our latest articles
                        </p>
                      </div>
                    </Link>
                    <Link href="/tutorials" className="menu-item">
                      <FiBook className="text-blue-400" />
                      <div>
                        <h4 className="font-medium">Tutorials</h4>
                        <p className="text-sm text-gray-400">
                          Step-by-step learning guides
                        </p>
                      </div>
                    </Link>
                    <Link href="/docs" className="menu-item">
                      <FiFileText className="text-blue-400" />
                      <div>
                        <h4 className="font-medium">Documentation</h4>
                        <p className="text-sm text-gray-400">
                          Technical documentation
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Get Involved Dropdown */}
            <div className="relative group">
              <button className="nav-link flex items-center gap-1 group">
                Get Involved
                <FiChevronDown className="transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block transform transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0">
                <div className="p-4 bg-gray-800 rounded-lg shadow-xl border border-gray-700 mt-2 w-96">
                  <h3 className="text-xl font-bold text-blue-400 mb-4">
                    Join Our Community
                  </h3>
                  <div className="space-y-4">
                    <Link href="/volunteer" className="menu-item">
                      <FiHeart className="text-blue-400" />
                      <div>
                        <h4 className="font-medium">Volunteer</h4>
                        <p className="text-sm text-gray-400">
                          Join our volunteer program
                        </p>
                      </div>
                    </Link>
                    <Link href="/sponsor" className="menu-item">
                      <FiDollarSign className="text-blue-400" />
                      <div>
                        <h4 className="font-medium">Sponsor Us</h4>
                        <p className="text-sm text-gray-400">
                          Support our initiatives
                        </p>
                      </div>
                    </Link>
                    <Link href="/contribute" className="menu-item">
                      <FiGithub className="text-blue-400" />
                      <div>
                        <h4 className="font-medium">Contribute to Projects</h4>
                        <p className="text-sm text-gray-400">
                          Help us build better software
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex">
            <Link href="/joinus">
              <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105">
                Join Us
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FiX className="w-8 h-8" />
            ) : (
              <FiMenu className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[calc(100vh-5rem)] opacity-100" : "max-h-0 opacity-0"
        } overflow-y-auto bg-gray-800 fixed w-full top-20`}
      >
        {/* Mobile menu content here */}
        <nav className="container mx-auto px-4 py-4">
          <div className="space-y-6">
            {/* Mobile Home Link */}
            <Link
              href="/"
              className="block px-4 py-2 text-lg hover:bg-gray-700 rounded-lg"
            >
              Home
            </Link>

            {/* Mobile About Section */}
            <div className="space-y-2">
              <h3 className="px-4 text-blue-400 font-semibold">About</h3>
              <div className="pl-4 space-y-2">
                <Link href="/mission-vision" className="mobile-menu-item">
                  <FiTarget className="w-5 h-5" />
                  <span>Mission & Vision</span>
                </Link>
                <Link href="/team" className="mobile-menu-item">
                  <FiUsers className="w-5 h-5" />
                  <span>Our Team</span>
                </Link>
              </div>
            </div>

            {/* Mobile Projects Section */}
            <div className="space-y-2">
              <h3 className="px-4 text-blue-400 font-semibold">Projects</h3>
              <div className="pl-4 space-y-2">
                <Link href="/projects/graduated" className="mobile-menu-item">
                  <FiAward className="w-5 h-5" />
                  <span>Graduated Projects</span>
                </Link>
                <Link href="/projects/incubating" className="mobile-menu-item">
                  <FiPackage className="w-5 h-5" />
                  <span>Incubating Projects</span>
                </Link>
                <Link href="/projects/sandbox" className="mobile-menu-item">
                  <FiTool className="w-5 h-5" />
                  <span>Sandbox Projects</span>
                </Link>
                <Link href="/projects/archived" className="mobile-menu-item">
                  <FiArchive className="w-5 h-5" />
                  <span>Archived Projects</span>
                </Link>
              </div>
            </div>

            {/* Mobile Events Section */}
            <div className="space-y-2">
              <h3 className="px-4 text-blue-400 font-semibold">Events</h3>
              <div className="pl-4 space-y-2">
                <Link href="/events/upcoming" className="mobile-menu-item">
                  <FiCalendar className="w-5 h-5" />
                  <span>Upcoming Events</span>
                </Link>
                <Link href="/events/past" className="mobile-menu-item">
                  <FiClock className="w-5 h-5" />
                  <span>Past Events</span>
                </Link>
              </div>
            </div>

            {/* Mobile Resources Section */}
            <div className="space-y-2">
              <h3 className="px-4 text-blue-400 font-semibold">Resources</h3>
              <div className="pl-4 space-y-2">
                <Link href="/blogs" className="mobile-menu-item">
                  <FiBookOpen className="w-5 h-5" />
                  <span>Blogs</span>
                </Link>
                <Link href="/tutorials" className="mobile-menu-item">
                  <FiBook className="w-5 h-5" />
                  <span>Tutorials</span>
                </Link>
                <Link href="/docs" className="mobile-menu-item">
                  <FiFileText className="w-5 h-5" />
                  <span>Documentation</span>
                </Link>
              </div>
            </div>

            {/* Mobile Get Involved Section */}
            <div className="space-y-2">
              <h3 className="px-4 text-blue-400 font-semibold">Get Involved</h3>
              <div className="pl-4 space-y-2">
                <Link href="/volunteer" className="mobile-menu-item">
                  <FiHeart className="w-5 h-5" />
                  <span>Volunteer</span>
                </Link>
                <Link href="/sponsor" className="mobile-menu-item">
                  <FiDollarSign className="w-5 h-5" />
                  <span>Sponsor Us</span>
                </Link>
                <Link href="/contribute" className="mobile-menu-item">
                  <FiGithub className="w-5 h-5" />
                  <span>Contribute</span>
                </Link>
              </div>
            </div>

            {/* Mobile Get Started Button */}
            <div className="px-4 pt-4">
              <Link href="/joinus">
                <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300">
                  Join Us
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </Box>
  );
};
export default Navbar;
