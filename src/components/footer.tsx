import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-yellow-500">Nasir</span>nagar
            </h3>
            <p className="text-gray-300 mb-4">
              Discover the hidden gem of Brahmanbaria, Bangladesh. A riverine
              upazila known for its natural beauty, historical sites,
              educational institutions, and notable personalities.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-yellow-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-yellow-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-yellow-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/government-offices"
                  className="text-gray-300 hover:text-yellow-500"
                >
                  Government Offices
                </Link>
              </li>
              <li>
                <Link
                  href="/hospitals"
                  className="text-gray-300 hover:text-yellow-500"
                >
                  Hospitals
                </Link>
              </li>
              <li>
                <Link
                  href="/educational-institutes"
                  className="text-gray-300 hover:text-yellow-500"
                >
                  Educational Institutes
                </Link>
              </li>
              <li>
                <Link
                  href="/tourist-spots"
                  className="text-gray-300 hover:text-yellow-500"
                >
                  Tourist Spots
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-yellow-500"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                <span className="text-gray-300">
                  Upazila Parishad Complex, Nasirnagar, Brahmanbaria, Bangladesh
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="text-gray-300">+880 1234-567890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="text-gray-300">info@nasirnagar.gov.bd</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Nasirnagar Upazila. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
