import React from 'react';

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-dark mb-4">
            Expert Cycling Services in Hitchin
          </h2>
          <p className="text-xl text-text-body max-w-2xl mx-auto">
            Professional bike services with 30+ years of experience. Every bike purchase includes £130 worth of free services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Service & Repairs Card */}
          <div className="card no-shadow text-center">
            <div className="mb-6">
              <img 
                src="/images/organized/services/bike-maintenance.webp" 
                className="w-full h-48 object-cover mb-4"
                alt="Professional bike maintenance and repairs"
              />
              <div className="text-accent-yellow text-4xl mb-4">🔧</div>
            </div>
            <h3 className="text-2xl font-bold text-primary-dark mb-4">Service & Repairs</h3>
            <p className="text-text-body mb-6">
              Comprehensive bike maintenance and repairs by qualified technicians. From basic tune-ups to complete overhauls.
            </p>
            <ul className="text-left text-text-body mb-6 space-y-2">
              <li>✅ Basic Service: £45</li>
              <li>✅ Premium Service: £75</li>
              <li>✅ Emergency Repairs: £60/hour</li>
              <li>✅ Winter Preparation: £55</li>
            </ul>
            <button className="btn-primary w-full">
              Book Service
            </button>
          </div>

          {/* BikeFit Card */}
          <div className="card no-shadow text-center">
            <div className="mb-6">
              <img 
                src="/images/organized/services/bikefit-diagram.jpg" 
                className="w-full h-48 object-cover mb-4"
                alt="Professional bike fitting process"
              />
              <div className="text-accent-yellow text-4xl mb-4">📏</div>
            </div>
            <h3 className="text-2xl font-bold text-primary-dark mb-4">Professional BikeFit</h3>
            <p className="text-text-body mb-6">
              Optimize your comfort and performance with our professional bike fitting service. Included free with every bike purchase.
            </p>
            <ul className="text-left text-text-body mb-6 space-y-2">
              <li>✅ Comfort optimization</li>
              <li>✅ Performance enhancement</li>
              <li>✅ Injury prevention</li>
              <li>✅ Follow-up adjustments</li>
            </ul>
            <div className="mb-4">
              <span className="text-2xl font-bold text-primary-dark">£80</span>
              <span className="text-text-body"> (FREE with bike purchase)</span>
            </div>
            <button className="btn-secondary w-full">
              Book BikeFit
            </button>
          </div>

          {/* Cycle Scheme Card */}
          <div className="card no-shadow text-center">
            <div className="mb-6">
              <img 
                src="/images/organized/brands/cyclescheme-logo.png" 
                className="w-full h-32 object-contain mb-8"
                alt="Cycle to Work Scheme"
              />
              <div className="text-accent-yellow text-4xl mb-4">💼</div>
            </div>
            <h3 className="text-2xl font-bold text-primary-dark mb-4">Cycle-to-Work Scheme</h3>
            <p className="text-text-body mb-6">
              Save up to 42% on bikes and accessories through the government's Cycle-to-Work scheme. Tax-free monthly payments.
            </p>
            <ul className="text-left text-text-body mb-6 space-y-2">
              <li>✅ Up to 42% savings</li>
              <li>✅ Monthly payments</li>
              <li>✅ Bikes up to £1,000</li>
              <li>✅ Accessories included</li>
            </ul>
            <button className="btn-primary w-full">
              Apply Now
            </button>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-primary-dark mb-8">Why Choose CycleDealia?</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-accent-yellow text-3xl mb-4">🏆</div>
              <h4 className="font-bold text-primary-dark mb-2">30+ Years Experience</h4>
              <p className="text-text-body">Trusted cycling experts in Hitchin since 1985</p>
            </div>
            <div className="text-center">
              <div className="text-accent-yellow text-3xl mb-4">💰</div>
              <h4 className="font-bold text-primary-dark mb-2">£130 Free Services</h4>
              <p className="text-text-body">Free setup, fitting, and follow-up services</p>
            </div>
            <div className="text-center">
              <div className="text-accent-yellow text-3xl mb-4">🚴</div>
              <h4 className="font-bold text-primary-dark mb-2">Premium Brands</h4>
              <p className="text-text-body">Giant, Kona, Dawes, and other trusted brands</p>
            </div>
            <div className="text-center">
              <div className="text-accent-yellow text-3xl mb-4">🌟</div>
              <h4 className="font-bold text-primary-dark mb-2">Local Experts</h4>
              <p className="text-text-body">Serving Hitchin, Hertfordshire, and surrounding areas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;