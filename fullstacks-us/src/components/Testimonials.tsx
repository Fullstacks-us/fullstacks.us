import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    company: "TechFlow Solutions",
    content: "Working with FullStacks US as our Fractional CTO was a game-changer. They helped us build a scalable architecture that supported our growth from 10K to 100K users. The strategic guidance and technical expertise were invaluable.",
    rating: 5,
    industry: "SaaS"
  },
  {
    name: "Michael Rodriguez",
    role: "CTO",
    company: "FinTech Innovations",
    content: "The Fractional CTO service provided exactly what we needed during our Series A preparation. They conducted a thorough technical due diligence review and helped us address all investor concerns. Highly recommended!",
    rating: 5,
    industry: "FinTech"
  },
  {
    name: "Jennifer Park",
    role: "VP of Engineering",
    company: "HealthTech Pro",
    content: "We were struggling with team scaling and technical debt. Our Fractional CTO came in, assessed the situation, and implemented a clear roadmap. Within 6 months, our development velocity increased by 40%.",
    rating: 5,
    industry: "HealthTech"
  },
  {
    name: "David Thompson",
    role: "Founder",
    company: "E-commerce Plus",
    content: "The cost savings alone made it worth it - we saved over $150K compared to hiring a full-time CTO. But the real value was in the strategic technology decisions that positioned us for success.",
    rating: 5,
    industry: "E-commerce"
  },
  {
    name: "Lisa Wang",
    role: "COO",
    company: "Startup Accelerator",
    content: "As an accelerator, we've worked with many CTOs, but the Fractional CTO model from FullStacks US is revolutionary. Our portfolio companies get enterprise-level guidance at startup-friendly prices.",
    rating: 5,
    industry: "Accelerator"
  },
  {
    name: "Robert Kim",
    role: "Technical Lead",
    company: "AI Solutions Inc",
    content: "The technical architecture guidance was spot-on. We were able to build a robust AI platform that scales efficiently. The team building advice helped us hire the right people for our growth stage.",
    rating: 5,
    industry: "AI/ML"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what startup leaders say about working with our Fractional CTO services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-blue-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {testimonial.industry}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Startups Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">$2M+</div>
              <div className="text-blue-100">Cost Savings Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">12+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Success Stories
          </h3>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-xl">↑</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">TechFlow Solutions</h4>
                  <p className="text-sm text-gray-600">SaaS Platform</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">User Growth:</span>
                  <span className="font-semibold">10K → 100K users</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Revenue Increase:</span>
                  <span className="font-semibold">300% growth</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Team Scaling:</span>
                  <span className="font-semibold">5 → 25 engineers</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time to Market:</span>
                  <span className="font-semibold">50% faster</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">$</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">FinTech Innovations</h4>
                  <p className="text-sm text-gray-600">Financial Services</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Funding Raised:</span>
                  <span className="font-semibold">$5M Series A</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Technical Debt:</span>
                  <span className="font-semibold">Reduced by 70%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Security Score:</span>
                  <span className="font-semibold">A+ Rating</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Compliance:</span>
                  <span className="font-semibold">100% Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Technology Strategy?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the growing number of startups that have accelerated their growth with our Fractional CTO services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book Free Consultation
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Pricing Plans
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 