import React from 'react';

const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-50 no-shadow">
      {/* Trust-building contact bar */}
      <div className="bg-primary-dark text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <span>📞 Call: 01462 631555</span>
            <span>📧 info@cycledealia.co.uk</span>
            <span>🚴 Expert Service & Repairs in Hitchin</span>
          </div>
          <div className="flex items-center gap-4">
            <span>🕒 Mon-Fri 10am-6pm, Sat 9:30am-5:30pm</span>
            <span>⭐ £130 Free Service Package</span>
          </div>
        </div>
      </div>
      
      {/* Main navigation with cycling DNA */}
      <nav className="px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <img src="/images/organized/brands/cycledealia-main-logo.png" alt="CycleDealia" className="h-12" />
          <div className="flex items-center gap-8">
            <a href="/" className="hover:text-link-cta transition-colors font-medium">Home</a>
            <a href="/bikes" className="hover:text-link-cta transition-colors font-medium">Bikes</a>
            <a href="/e-bikes" className="hover:text-link-cta transition-colors font-medium">E-Bikes</a>
            <a href="/service" className="hover:text-link-cta transition-colors font-medium">Service & Repairs</a>
            <a href="/bikefit" className="hover:text-link-cta transition-colors font-medium">BikeFit</a>
            <a href="/cycle-scheme" className="hover:text-link-cta transition-colors font-medium">Cycle Scheme</a>
            <button className="btn-primary">
              Book Service
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;