import React from 'react';

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-dark mb-4">
            Premium Bikes for Every Rider
          </h2>
          <p className="text-xl text-text-body max-w-2xl mx-auto">
            Discover our carefully selected range of premium bikes from trusted manufacturers. Each bike includes our £130 free service package.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mountain Bike Product Card */}
          <div className="card no-shadow hover:opacity-95 transition-opacity group">
            <div className="relative overflow-hidden mb-4">
              <img 
                src="/images/organized/homepage/featured-mountain-bike.webp" 
                className="w-full h-64 object-cover"
                alt="Premium Full-Suspension Mountain Bike"
              />
              <div className="absolute top-4 left-4 bg-primary-dark text-white px-3 py-1 text-sm font-semibold">
                🏆 Best Seller
              </div>
              <div className="absolute top-4 right-4 bg-link-cta text-white px-3 py-1 text-sm">
                🚚 Free Setup
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-primary-dark mb-2">Premium Full-Suspension MTB</h3>
              <p className="text-text-body mb-4">Professional mountain bike with advanced suspension system, perfect for trail riding and mountain adventures.</p>
              
              {/* Technical specs with matte flat design */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-accent-yellow">⚡</span>
                  <span>27-speed gearing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent-yellow">🔧</span>
                  <span>Full suspension</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent-yellow">🛡️</span>
                  <span>2-year warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent-yellow">📏</span>
                  <span>S, M, L, XL</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-bold text-primary-dark">£1,299</span>
                <div className="flex items-center gap-2">
                  <span className="text-accent-yellow text-lg">⭐⭐⭐⭐⭐</span>
                  <span className="text-sm text-text-body">(24 reviews)</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <button className="w-full btn-primary">
                  🛒 View Details
                </button>
                <div className="flex gap-2">
                  <button className="flex-1 border border-link-cta text-link-cta py-2 font-medium hover:bg-link-cta hover:text-white transition-colors">
                    📋 Specifications
                  </button>
                  <button className="flex-1 border border-accent-yellow text-primary-dark py-2 font-medium hover:bg-accent-yellow transition-colors">
                    📏 Book BikeFit
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* E-Bike Product Card */}
          <div className="card no-shadow hover:opacity-95 transition-opacity group">
            <div className="relative overflow-hidden mb-4">
              <img 
                src="/images/organized/homepage/featured-ebike.webp" 
                className="w-full h-64 object-cover"
                alt="Premium Electric Mountain Bike"
              />
              <div className="absolute top-4 left-4 bg-link-cta text-white px-3 py-1 text-sm font-semibold">
                ⚡ E-Bike
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-primary-dark mb-2">Electric Mountain Bike</h3>
              <p className="text-text-body mb-4">High-performance e-bike with powerful motor and long-range battery. Perfect for extended adventures and commuting.</p>
              
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-accent-yellow">⚡</span>
                  <span>80km range</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent-yellow">🔧</span>
                  <span>Shimano motor</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent-yellow">🛡️</span>
                  <span>3-year warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent-yellow">📏</span>
                  <span>M, L, XL</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-bold text-primary-dark">£2,499</span>
                <div className="flex items-center gap-2">
                  <span className="text-accent-yellow text-lg">⭐⭐⭐⭐⭐</span>
                  <span className="text-sm text-text-body">(18 reviews)</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <button className="w-full btn-primary">
                  🛒 View Details
                </button>
                <div className="flex gap-2">
                  <button className="flex-1 border border-link-cta text-link-cta py-2 font-medium hover:bg-link-cta hover:text-white transition-colors">
                    📋 E-Bike Guide
                  </button>
                  <button className="flex-1 border border-accent-yellow text-primary-dark py-2 font-medium hover:bg-accent-yellow transition-colors">
                    🚴 Test Ride
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Commuter Bike Product Card */}
          <div className="card no-shadow hover:opacity-95 transition-opacity group">
            <div className="relative overflow-hidden mb-4">
              <img 
                src="/images/organized/homepage/featured-commuter.png" 
                className="w-full h-64 object-cover"
                alt="Urban Commuter Bike"
              />
              <div className="absolute top-4 left-4 bg-accent-yellow text-primary-dark px-3 py-1 text-sm font-semibold">
                🏙️ Commuter
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-primary-dark mb-2">Urban Commuter Bike</h3>
              <p className="text-text-body mb-4">Reliable and efficient bike designed for daily commuting. Cycle-to-Work scheme available for tax-free purchase.</p>
              
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-accent-yellow">⚡</span>
                  <span>21-speed</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent-yellow">🔧</span>
                  <span>Puncture resistant</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent-yellow">🛡️</span>
                  <span>2-year warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent-yellow">📏</span>
                  <span>M, L</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-bold text-primary-dark">£599</span>
                <div className="flex items-center gap-2">
                  <span className="text-accent-yellow text-lg">⭐⭐⭐⭐⭐</span>
                  <span className="text-sm text-text-body">(31 reviews)</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <button className="w-full btn-primary">
                  🛒 View Details
                </button>
                <div className="flex gap-2">
                  <button className="flex-1 border border-link-cta text-link-cta py-2 font-medium hover:bg-link-cta hover:text-white transition-colors">
                    📋 Commuter Guide
                  </button>
                  <button className="flex-1 border border-accent-yellow text-primary-dark py-2 font-medium hover:bg-accent-yellow transition-colors">
                    💼 Cycle Scheme
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;