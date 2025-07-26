import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "$2,500",
    period: "/month",
    description: "Perfect for early-stage startups getting their technology foundation right.",
    features: [
      "10 hours/month of CTO guidance",
      "Technology strategy & roadmap",
      "Technical architecture review",
      "Team hiring guidance",
      "Monthly strategy calls",
      "Email support"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Growth",
    price: "$5,000",
    period: "/month",
    description: "Ideal for growing startups that need ongoing technical leadership and team scaling.",
    features: [
      "20 hours/month of CTO services",
      "Everything in Starter, plus:",
      "Team building & management",
      "Vendor selection & management",
      "Security & compliance guidance",
      "Weekly strategy calls",
      "Priority support",
      "Technical documentation review"
    ],
    cta: "Most Popular",
    popular: true
  },
  {
    name: "Scale",
    price: "$10,000",
    period: "/month",
    description: "For established startups preparing for funding, acquisition, or major scaling.",
    features: [
      "40 hours/month of CTO leadership",
      "Everything in Growth, plus:",
      "Full technical team oversight",
      "Investor-ready technical due diligence",
      "Scalability planning & optimization",
      "Board-level technical reporting",
      "Crisis management support",
      "24/7 emergency support"
    ],
    cta: "Contact Us",
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transparent Pricing Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the right level of Fractional CTO support for your startup's current stage and needs. 
            All plans include a free initial consultation.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-sm border-2 transition-all duration-300 hover:shadow-lg ${
                plan.popular 
                  ? 'border-blue-500 shadow-lg scale-105' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Custom Solutions Available
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">One-Time Engagements</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Technology assessment & audit</li>
                  <li>• Technical due diligence for investors</li>
                  <li>• Architecture redesign projects</li>
                  <li>• Security & compliance reviews</li>
                  <li>• Team restructuring guidance</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Specialized Services</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Fundraising technical preparation</li>
                  <li>• M&A technical integration</li>
                  <li>• Crisis management & recovery</li>
                  <li>• Board advisory services</li>
                  <li>• Interim CTO during transitions</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600 mb-4">
                All engagements start with a free 30-minute consultation to understand your needs.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Schedule Free Consultation
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">How quickly can you start?</h4>
                <p className="text-gray-600">We can typically begin within 1-2 weeks after our initial consultation and agreement.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Can I change plans later?</h4>
                <p className="text-gray-600">Yes, you can upgrade or downgrade your plan with 30 days notice.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Do you work with remote teams?</h4>
                <p className="text-gray-600">Absolutely! We're experienced in working with distributed teams across different time zones.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">What industries do you specialize in?</h4>
                <p className="text-gray-600">We work across all industries, with particular expertise in SaaS, FinTech, HealthTech, and E-commerce.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">How do you measure success?</h4>
                <p className="text-gray-600">We establish clear KPIs and milestones upfront, with regular progress reports and quarterly reviews.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">What's included in the consultation?</h4>
                <p className="text-gray-600">A comprehensive review of your current technology state, challenges, and recommendations for moving forward.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 