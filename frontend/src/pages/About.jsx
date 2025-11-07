import React from 'react';
import { useTranslation } from 'react-i18next';
import { Target, Eye, Users } from 'lucide-react';

export const About = () => {
  const { t } = useTranslation();

  const team = [
    { name: 'Ram Pandey', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop' },
    { name: 'Sita Sharma', role: 'Head of Counseling', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop' },
    { name: 'Hari Thapa', role: 'Visa Specialist', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop' },
    { name: 'Maya Gurung', role: 'Student Coordinator', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop' },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }} data-testid="about-title">
            {t('about.title')}
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Leading educational consultancy in Nepal, dedicated to helping students achieve their dreams of studying abroad.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-lg" data-testid="mission-section">
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-4">{t('about.mission_title')}</h2>
              <p className="text-gray-700 leading-relaxed">
                {t('about.mission_text')}
              </p>
            </div>

            {/* Vision */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-white border border-amber-100 shadow-lg" data-testid="vision-section">
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center shadow-lg">
                  <Eye className="w-6 h-6 text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-4">{t('about.vision_title')}</h2>
              <p className="text-gray-700 leading-relaxed">
                {t('about.vision_text')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2010, Pandey Consultant has been at the forefront of educational consultancy in Nepal. 
                  What started as a small office in Kathmandu has now grown into one of the most trusted names in 
                  international education guidance.
                </p>
                <p>
                  Over the years, we've helped more than 5,000 students achieve their dreams of studying abroad. 
                  Our commitment to excellence, personalized approach, and deep understanding of the international 
                  education landscape sets us apart.
                </p>
                <p>
                  Today, we maintain partnerships with over 500 universities across 25 countries, ensuring our 
                  students have access to the best educational opportunities worldwide.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop" 
                alt="Team meeting" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              {t('about.team_title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals who make your study abroad dreams come true
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group text-center" data-testid={`team-member-${index}`}>
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Integrity', desc: 'We believe in honest and transparent communication with our students.' },
              { title: 'Excellence', desc: 'We strive for the highest standards in everything we do.' },
              { title: 'Support', desc: 'We provide comprehensive support throughout your study abroad journey.' },
            ].map((value, index) => (
              <div key={index} className="text-center p-6" data-testid={`value-${index}`}>
                <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-blue-100">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
