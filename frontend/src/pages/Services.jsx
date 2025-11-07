import React from 'react';
import { useTranslation } from 'react-i18next';
import { GraduationCap, Users, FileText, BookOpen, Award, MapPin, CheckCircle2 } from 'lucide-react';

export const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Users,
      title: t('services.counseling'),
      description: 'Personalized career counseling to help you choose the right path for your future.',
      features: ['One-on-one counseling sessions', 'Aptitude and interest assessment', 'Career path guidance', 'Course selection advice']
    },
    {
      icon: GraduationCap,
      title: t('services.admission'),
      description: 'Complete assistance with university applications and admission process.',
      features: ['University selection', 'Application preparation', 'Document review', 'Application submission']
    },
    {
      icon: FileText,
      title: t('services.visa'),
      description: 'Expert guidance through the visa application process.',
      features: ['Visa documentation', 'Interview preparation', 'Application tracking', 'Post-visa support']
    },
    {
      icon: BookOpen,
      title: t('services.test'),
      description: 'Comprehensive test preparation for IELTS, TOEFL, GRE, GMAT, and more.',
      features: ['Practice tests', 'Study materials', 'Expert instructors', 'Score improvement strategies']
    },
    {
      icon: Award,
      title: t('services.scholarship'),
      description: 'Help you find and apply for scholarships and financial aid.',
      features: ['Scholarship search', 'Application guidance', 'Financial planning', 'Funding opportunities']
    },
    {
      icon: MapPin,
      title: t('services.documentation'),
      description: 'Complete support with all documentation requirements.',
      features: ['Document preparation', 'Verification services', 'Translation services', 'Attestation support']
    },
  ];

  const process = [
    { step: 1, title: 'Initial Consultation', desc: 'Free counseling session to understand your goals' },
    { step: 2, title: 'Course Selection', desc: 'Choose the right course and university' },
    { step: 3, title: 'Application', desc: 'Complete application preparation and submission' },
    { step: 4, title: 'Visa Process', desc: 'Guidance through visa application and interview' },
    { step: 5, title: 'Pre-Departure', desc: 'Orientation and preparation for your journey' },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }} data-testid="services-title">
            {t('services.title')}
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                data-testid={`service-detail-${index}`}
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A simple, step-by-step approach to make your study abroad journey smooth
            </p>
          </div>
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 transform -translate-y-1/2" style={{ zIndex: 0 }} />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative" style={{ zIndex: 1 }}>
              {process.map((item, index) => (
                <div key={index} className="text-center" data-testid={`process-step-${index}`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold mb-4 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book a free consultation with our expert counselors
          </p>
          <a href="/contact">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-xl" data-testid="services-cta-btn">
              Book Free Consultation
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};
