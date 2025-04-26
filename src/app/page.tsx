"use client";

import img1 from "@/assets/images/img1.jpg";
import img2 from "@/assets/images/img2.jpg";
import img3 from "@/assets/images/img3.jpg";
import img4 from "@/assets/images/img4.jpg";
import img5 from "@/assets/images/img5.jpg";
import img6 from "@/assets/images/img6.jpg";
import rajbariImg from "@/assets/images/rajbari.jpg"; // Ensure this path is correct
import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Calendar,
  Camera,
  ChevronDown,
  MapPin,
  // Menu,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// Import the image (we'll keep using the existing rajbari image)
// Note: In a real project, you'd need to ensure this image exists in your assets folder
// Remove this line:
// import rajbariImg from "@/assets/images/rajbari.jpg"

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Update active section based on scroll position
      const sections = ["home", "about", "attractions", "gallery", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sample attractions data
  const attractions = [
    {
      title: "Rajbari Palace",
      description:
        "Historic palace with stunning architecture dating back to the colonial era.",
      icon: <MapPin className="h-10 w-10 text-yellow-500" />,
    },
    {
      title: "Annual Festival",
      description:
        "Experience the vibrant cultural festival celebrating local traditions and arts.",
      icon: <Calendar className="h-10 w-10 text-yellow-500" />,
    },
    {
      title: "Community Center",
      description:
        "Modern facility hosting educational programs and community gatherings.",
      icon: <Users className="h-10 w-10 text-yellow-500" />,
    },
  ];

  // Update the galleryImages array to include the imported images
  const galleryImages = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Navbar - now with scroll effect and mobile menu */}

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
        {/* Background Image with Parallax Effect */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
            filter: "blur(4px)",
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
              <span className="block">Welcome to</span>
              <span className="text-yellow-400 block mt-2">Nasirnagar</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Discover the hidden gem of Brahmanbaria, Bangladesh. A riverine
              upazila known for its natural beauty, historical sites,
              educational institutions, and notable personalities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-6 rounded-lg shadow-lg transition duration-300 text-lg">
                Explore
              </Button>
              <Button
                variant="outline"
                className="border-white hover:text-white hover:bg-white/10 font-bold px-8 py-6 rounded-lg shadow-lg transition duration-300 text-lg"
              >
                View Gallery
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                About Nasirnagar
              </h2>
              <div className="h-1 w-20 bg-yellow-500 mx-auto"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={rajbariImg}
                    alt="Nasirnagar landscape"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  A Rich Heritage
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Nasirnagar is a riverine upazila in Brahmanbaria, Bangladesh,
                  known for its natural beauty, historical sites, and rich
                  cultural heritage. The area has a fascinating history dating
                  back centuries, with influences from various dynasties that
                  ruled the region.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Today, Nasirnagar is home to diverse communities living in
                  harmony, preserving traditions while embracing modern
                  development. The upazila is known for its educational
                  institutions, agricultural productivity, and notable
                  personalities who have contributed to Bangladesh&#39;s
                  cultural and intellectual landscape.
                </p>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  Discover Attractions
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section id="attractions" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Key Attractions</h2>
            <div className="h-1 w-20 bg-yellow-500 mx-auto"></div>
            <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
              Explore the most significant places and experiences that make
              Nasirnagar special.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <motion.div
                key={attraction.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-6">{attraction.icon}</div>
                <h3 className="text-xl font-bold mb-3">{attraction.title}</h3>
                <p className="text-gray-400">{attraction.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Photo Gallery
            </h2>
            <div className="h-1 w-20 bg-yellow-500 mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Explore the beauty of Nasirnagar through our collection of
              stunning photographs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative overflow-hidden rounded-lg shadow-lg group"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Nasirnagar gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-white text-white"
                    >
                      <Camera className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
              View All Photos
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <div className="h-1 w-20 bg-yellow-500 mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Have questions about visiting Nasirnagar? Get in touch with us.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 bg-gray-900 text-white">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <p className="mb-6 text-gray-300">
                  We&#39;d love to hear from you. Please fill out the form and
                  we&#39;ll get back to you as soon as possible.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-yellow-400 mr-3 mt-1" />
                    <p>Nasirnagar Upazila, Brahmanbaria, Bangladesh</p>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-400 mr-3 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <p>info@nasirnagar.gov.bd</p>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-400 mr-3 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <p>+880 1234 567890</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollY > 300 ? 1 : 0 }}
        className="fixed bottom-6 right-6 bg-yellow-500 text-black p-3 rounded-full shadow-lg z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </motion.button>
    </div>
  );
}
