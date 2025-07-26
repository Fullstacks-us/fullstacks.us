import { 
  Code, 
  Users, 
  Shield, 
  TrendingUp, 
  Settings, 
  BarChart3,
  Zap,
  Target
} from 'lucide-react';

const services = [
  {
    icon: Target,
    title: "Technology Strategy",
    description: "Develop comprehensive technology roadmaps aligned with your business goals and growth objectives.",
    features: ["Technology assessment", "Roadmap planning", "Innovation strategy", "Competitive analysis"]
  },
  {
    icon: Code,
    title: "Technical Architecture",
    description: "Design scalable, secure, and maintainable systems that grow with your business.",
    features: ["System design", "Scalability planning", "Performance optimization", "Technical debt management"]
  },
  {
    icon: Users,
    title: "Team Building",
    description: "Build and scale high-performing technical teams with the right skills and culture.",
    features: ["Technical hiring", "Team structure", "Culture development", "Mentorship programs"]
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Implement robust security measures and ensure compliance with industry standards.",
    features: ["Security audits", "Compliance frameworks", "Risk assessment", "Incident response"]
  },
  {
    icon: TrendingUp,
    title: "Growth & Scaling",
    description: "Optimize your technology stack and processes for rapid growth and market expansion.",
    features: ["Performance optimization", "Infrastructure scaling", "Process automation", "Cost optimization"]
  },
  {
    icon: Settings,
    title: "Vendor Management",
    description: "Select and manage technology vendors, tools, and platforms that align with your needs.",
    features: ["Vendor evaluation", "Contract negotiation", "Tool selection", "Integration planning"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Fractional CTO Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From strategic planning to technical execution, we provide the leadership and expertise 
            your startup needs to build and scale world-class technology solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why Choose Fractional CTO */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Why Choose a Fractional CTO?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Zap className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Immediate Impact</h4>
                    <p className="text-gray-600">Hit the ground running with proven strategies and frameworks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <BarChart3 className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Cost Effective</h4>
                    <p className="text-gray-600">Save 60-80% compared to hiring a full-time CTO</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Flexible Engagement</h4>
                    <p className="text-gray-600">Scale up or down based on your current needs and budget</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Risk Mitigation</h4>
                    <p className="text-gray-600">Avoid costly technical mistakes with expert guidance</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Perfect for Startups Who:</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Need strategic technology guidance</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Are building or scaling technical teams</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Want to optimize technology costs</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Need help with technical decisions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Are preparing for funding or acquisition</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 