import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Fractional CTO for{' '}
                <span className="text-blue-600">Growing Startups</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Get enterprise-level technology leadership without the enterprise price tag. 
                Strategic guidance, technical architecture, and development oversight tailored for your startup's growth.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                <span className="text-gray-700">Strategic technology roadmap & architecture</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                <span className="text-gray-700">Team building & technical hiring guidance</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                <span className="text-gray-700">Cost-effective leadership (save 60-80% vs full-time CTO)</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors group"
              >
                Book Free Strategy Call
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Pricing Plans
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Trusted by startups across industries:</p>
              <div className="flex items-center space-x-6 text-gray-400">
                <div className="text-sm font-medium">SaaS</div>
                <div className="text-sm font-medium">E-commerce</div>
                <div className="text-sm font-medium">FinTech</div>
                <div className="text-sm font-medium">HealthTech</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm font-medium">Available for consultation</span>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">What you get with a Fractional CTO:</h3>
                  <ul className="space-y-3 text-blue-100">
                    <li className="flex items-start space-x-3">
                      <span className="text-blue-300 mt-1">•</span>
                      <span>Technology strategy & roadmap planning</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-blue-300 mt-1">•</span>
                      <span>Technical architecture & system design</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-blue-300 mt-1">•</span>
                      <span>Team building & technical hiring</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-blue-300 mt-1">•</span>
                      <span>Vendor selection & technology stack decisions</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-blue-300 mt-1">•</span>
                      <span>Security & compliance guidance</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-blue-300 mt-1">•</span>
                      <span>Scalability planning & performance optimization</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">$15K-25K</div>
                    <div className="text-sm text-blue-200">vs $200K+ for full-time CTO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 