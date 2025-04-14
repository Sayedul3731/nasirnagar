export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Nasirnagar</h3>
            <p className="mb-4">
              Discover the beauty and heritage of Nasirnagar, a riverine upazila
              in Brahmanbaria, Bangladesh.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-yellow-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#attractions"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Attractions
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-white font-bold">Nasirnagar</span>. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
