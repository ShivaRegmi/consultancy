import React from 'react';
import { useTranslation } from 'react-i18next';
import { Star, Quote } from 'lucide-react';

export const SuccessStories = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      course: 'MS in Computer Science',
      university: 'Stanford University, USA',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      story: 'Pandey Consultant made my dream of studying at Stanford a reality. Their guidance throughout the application process was invaluable. From choosing the right program to visa preparation, they were with me every step of the way.',
      rating: 5
    },
    {
      id: 2,
      name: 'Priya Sharma',
      course: 'MBA',
      university: 'Oxford University, UK',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      story: 'I was overwhelmed with the application process, but the team at Pandey Consultant simplified everything. Their expertise in scholarship guidance helped me secure a 50% scholarship. Forever grateful!',
      rating: 5
    },
    {
      id: 3,
      name: 'Arun Thapa',
      course: 'Bachelor of Engineering',
      university: 'University of Melbourne, Australia',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      story: 'The counselors understood my goals and helped me find the perfect university and course. The visa process was smooth thanks to their thorough preparation. Now I\'m living my dream in Melbourne!',
      rating: 5
    },
    {
      id: 4,
      name: 'Sita Gurung',
      course: 'Master of Public Health',
      university: 'University of Toronto, Canada',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop',
      story: 'Professional, knowledgeable, and always available to answer questions. Pandey Consultant exceeded my expectations. They didn\'t just help me get admission, but also prepared me for life abroad.',
      rating: 5
    },
    {
      id: 5,
      name: 'Bikash Rai',
      course: 'Bachelor of Business',
      university: 'University of Sydney, Australia',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop',
      story: 'From my first consultation to landing in Sydney, every step was professionally handled. The team\'s dedication and personal attention made all the difference. Highly recommend!',
      rating: 5
    },
    {
      id: 6,
      name: 'Maya Tamang',
      course: 'MS in Data Science',
      university: 'MIT, USA',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop',
      story: 'I cannot thank Pandey Consultant enough for their support. They helped me craft a strong application that stood out. Their mock interview sessions were particularly helpful for my visa interview.',
      rating: 5
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }} data-testid="success-stories-title">
            {t('success.title')}
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('success.subtitle')}
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                data-testid={`testimonial-${testimonial.id}`}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.course}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-blue-200 mb-2" />
                  <p className="text-gray-700 text-sm leading-relaxed">{testimonial.story}</p>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <p className="text-sm font-semibold text-blue-600 mb-2">{testimonial.university}</p>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Your Success Story Starts Here
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful students who achieved their study abroad dreams with us
          </p>
          <a href="/contact">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-xl" data-testid="success-cta-btn">
              Start Your Journey Today
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};
