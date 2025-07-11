import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Matte flat overlay - no gradients */}
      <div className="absolute inset-0 bg-primary-dark/80 z-10"></div>
      <img 
        src="/images/organized/homepage/hero-ebike-landscape.webp" 
        className="absolute inset-0 w-full h-full object-cover"
        alt="E-bike rider in countryside landscape"
      />
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 text-white">
        <div className="max-w-2xl">
          {/* Authority headline with cycling DNA */}
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            Premium Cycling Equipment &<br />
            <span className="text-accent-yellow">Expert Service</span><br />
            Since 1985
          </h1>
          
          {/* Trust indicators - cycling specific */}
          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <span className="text-accent-yellow text-2xl">⭐⭐⭐⭐⭐</span>
              <span className="text-lg">4.9/5 from 150+ reviews</span>
            </div>
            <div className="h-8 w-px bg-white/30"></div>
            <span className="text-lg">🚴 Serving Hitchin & Hertfordshire</span>
          </div>
          
          {/* Value proposition */}
          <p className="text-xl mb-8 text-gray-100">
            From beginner to pro, we provide premium bikes, professional maintenance, and personalized BikeFit services with £130 worth of free setup and service with every bike purchase.
          </p>
          
          {/* Primary CTAs with matte flat design */}
          <div className="flex gap-4">
            <button className="btn-primary text-lg px-8 py-4">
              🚴 Shop Premium Bikes
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              🔧 Book Service Today
            </button>
          </div>
          
          {/* Trust signals - cycling industry specific */}
          <div className="flex items-center gap-8 mt-8 text-sm">
            <span>✅ Free Bike Setup (£50 value)</span>
            <span>✅ Professional BikeFit (£80 value)</span>
            <span>✅ Cycle-to-Work Scheme</span>
            <span>✅ Giant, Kona & Premium Brands</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;