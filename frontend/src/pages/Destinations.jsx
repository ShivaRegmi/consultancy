import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, GraduationCap, DollarSign, Clock } from 'lucide-react';

export const Destinations = () => {
  const { t } = useTranslation();
  const [selectedCountry, setSelectedCountry] = useState(null);

  const countries = [
    {
      id: 1,
      name: 'United States',
      flag: '🇺🇸',
      image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&h=400&fit=crop',
      universities: 200,
      avgTuition: '$20,000 - $50,000/year',
      duration: '3-4 years',
      description: 'World-class education with diverse programs and research opportunities.',
      topUniversities: ['Harvard University', 'Stanford University', 'MIT', 'Yale University']
    },
    {
      id: 2,
      name: 'United Kingdom',
      flag: '🇬🇧',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop',
      universities: 150,
      avgTuition: '£15,000 - £35,000/year',
      duration: '3 years',
      description: 'Historic universities with excellent academic reputation and shorter course duration.',
      topUniversities: ['Oxford University', 'Cambridge University', 'Imperial College', 'UCL']
    },
    {
      id: 3,
      name: 'Australia',
      flag: '🇦🇺',
      image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&h=400&fit=crop',
      universities: 100,
      avgTuition: 'AUD 20,000 - 45,000/year',
      duration: '3-4 years',
      description: 'High quality of life, work opportunities, and excellent education system.',
      topUniversities: ['University of Melbourne', 'ANU', 'University of Sydney', 'UNSW']
    },
    {
      id: 4,
      name: 'Canada',
      flag: '🇨🇦',
      image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&h=400&fit=crop',
      universities: 120,
      avgTuition: 'CAD 15,000 - 35,000/year',
      duration: '3-4 years',
      description: 'Affordable education with immigration opportunities and multicultural environment.',
      topUniversities: ['University of Toronto', 'UBC', 'McGill University', 'University of Alberta']
    },
    {
      id: 5,
      name: 'Germany',
      flag: '🇩🇪',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop',
      universities: 80,
      avgTuition: 'Free - €20,000/year',
      duration: '3-4 years',
      description: 'Low tuition fees, strong engineering programs, and research opportunities.',
      topUniversities: ['TUM', 'LMU Munich', 'Heidelberg University', 'Free University Berlin']
    },
    {
      id: 6,
      name: 'New Zealand',
      flag: '🇳🇿',
      image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600&h=400&fit=crop',
      universities: 40,
      avgTuition: 'NZD 22,000 - 35,000/year',
      duration: '3-4 years',
      description: 'Safe, welcoming environment with high-quality education and beautiful landscapes.',
      topUniversities: ['University of Auckland', 'University of Otago', 'Victoria University', 'Canterbury']
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }} data-testid="destinations-title">
            {t('destinations.title')}
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('destinations.subtitle')}
          </p>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country) => (
              <div 
                key={country.id} 
                className="group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => setSelectedCountry(country)}
                data-testid={`country-card-${country.id}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={country.image} 
                    alt={country.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-4xl mb-2 block">{country.flag}</span>
                    <h3 className="text-2xl font-bold text-white">{country.name}</h3>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <GraduationCap className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                      <div className="text-sm font-semibold text-gray-900">{country.universities}+</div>
                      <div className="text-xs text-gray-500">Universities</div>
                    </div>
                    <div className="text-center">
                      <DollarSign className="w-6 h-6 text-green-600 mx-auto mb-1" />
                      <div className="text-xs font-semibold text-gray-900 leading-tight">{country.avgTuition.split('/')[0]}</div>
                      <div className="text-xs text-gray-500">Avg. Tuition</div>
                    </div>
                    <div className="text-center">
                      <Clock className="w-6 h-6 text-amber-600 mx-auto mb-1" />
                      <div className="text-sm font-semibold text-gray-900">{country.duration}</div>
                      <div className="text-xs text-gray-500">Duration</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{country.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Country Detail Modal */}
      {selectedCountry && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCountry(null)}
          data-testid="country-modal"
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img 
                src={selectedCountry.image} 
                alt={selectedCountry.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-5xl mb-2 block">{selectedCountry.flag}</span>
                <h2 className="text-3xl font-bold text-white">{selectedCountry.name}</h2>
              </div>
              <button 
                onClick={() => setSelectedCountry(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                data-testid="close-modal-btn"
              >
                <span className="text-2xl text-gray-700">&times;</span>
              </button>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-6">{selectedCountry.description}</p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-blue-50 rounded-xl text-center">
                  <GraduationCap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">{selectedCountry.universities}+</div>
                  <div className="text-sm text-gray-600">Universities</div>
                </div>
                <div className="p-4 bg-green-50 rounded-xl text-center">
                  <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900 text-sm">{selectedCountry.avgTuition}</div>
                  <div className="text-sm text-gray-600">Tuition</div>
                </div>
                <div className="p-4 bg-amber-50 rounded-xl text-center">
                  <Clock className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">{selectedCountry.duration}</div>
                  <div className="text-sm text-gray-600">Duration</div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Top Universities</h3>
                <ul className="space-y-2">
                  {selectedCountry.topUniversities.map((uni, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{uni}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <a href="/contact">
                  <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors" data-testid="inquire-btn">
                    Inquire Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
