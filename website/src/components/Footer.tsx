import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/images/organized/brands/cycledealia-main-logo.png" 
              alt="CycleDealia" 
              className="h-12 mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-4">
              Hitchin's trusted cycling specialists since 1985. Premium bikes, expert service, and professional BikeFit.
            </p>
            <div className="text-gray-300">
              <p className="mb-2">📍 15C Sun Street, Hitchin</p>
              <p className="mb-2">Hertfordshire, SG5 1AH</p>
              <p className="mb-2">📞 01462 631555</p>
              <p>📧 info@cycledealia.co.uk</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-accent-yellow mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-accent-yellow transition-colors">Home</a></li>
              <li><a href="/bikes" className="hover:text-accent-yellow transition-colors">Bikes</a></li>
              <li><a href="/e-bikes" className="hover:text-accent-yellow transition-colors">E-Bikes</a></li>
              <li><a href="/service" className="hover:text-accent-yellow transition-colors">Service & Repairs</a></li>
              <li><a href="/bikefit" className="hover:text-accent-yellow transition-colors">BikeFit</a></li>
              <li><a href="/cycle-scheme" className="hover:text-accent-yellow transition-colors">Cycle Scheme</a></li>
              <li><a href="/find-us" className="hover:text-accent-yellow transition-colors">Find Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-accent-yellow mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>🔧 Bike Service & Repairs</li>
              <li>📏 Professional BikeFit</li>
              <li>🚴 Premium Bike Sales</li>
              <li>⚡ E-Bike Specialists</li>
              <li>💼 Cycle-to-Work Scheme</li>
              <li>🛠️ Custom Bike Builds</li>
              <li>🚚 Free Setup & Delivery</li>
            </ul>
          </div>

          {/* Opening Hours & Contact */}
          <div>
            <h3 className="text-xl font-bold text-accent-yellow mb-4">Opening Hours</h3>
            <div className="text-gray-300 mb-6">
              <p className="mb-2">Monday - Friday: 10am - 6pm</p>
              <p className="mb-2">Saturday: 9:30am - 5:30pm</p>
              <p className="mb-4">Sunday: Closed</p>
              <button className="btn-primary mb-4">
                Book Service
              </button>
            </div>
          </div>
        </div>

        {/* Brand Partners */}
        <div className="border-t border-gray-600 pt-8 mt-8">
          <h3 className="text-xl font-bold text-accent-yellow mb-6 text-center">Trusted Brand Partners</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 items-center opacity-80">
            <img src="/images/organized/brands/giant-bikes.gif" alt="Giant Bikes" className="h-12 object-contain mx-auto brightness-0 invert" />
            <img src="/images/organized/brands/kona-bikes.gif" alt="Kona Bikes" className="h-12 object-contain mx-auto brightness-0 invert" />
            <img src="/images/organized/brands/dawes-bikes.gif" alt="Dawes Bikes" className="h-12 object-contain mx-auto brightness-0 invert" />
            <img src="/images/organized/brands/orro-bikes.gif" alt="Orro Bikes" className="h-12 object-contain mx-auto brightness-0 invert" />
            <img src="/images/organized/brands/cyclescheme-logo.png" alt="Cycle Scheme" className="h-12 object-contain mx-auto brightness-0 invert" />
            <img src="/images/organized/brands/halfords-cycle-to-work.png" alt="Halfords Cycle to Work" className="h-12 object-contain mx-auto brightness-0 invert" />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2024 CycleDealia. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-accent-yellow transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-accent-yellow transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;