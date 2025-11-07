import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, BookOpen, Clock, DollarSign, MapPin } from 'lucide-react';
import { Input } from '../components/ui/input';

export const Courses = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

  const courses = [
    {
      id: 1,
      title: 'Bachelor of Computer Science',
      university: 'Stanford University',
      country: 'USA',
      duration: '4 years',
      tuition: '$55,000/year',
      level: 'Undergraduate',
      field: 'Engineering'
    },
    {
      id: 2,
      title: 'Master of Business Administration',
      university: 'Harvard Business School',
      country: 'USA',
      duration: '2 years',
      tuition: '$75,000/year',
      level: 'Postgraduate',
      field: 'Business'
    },
    {
      id: 3,
      title: 'Bachelor of Medicine',
      university: 'Oxford University',
      country: 'UK',
      duration: '5 years',
      tuition: '£40,000/year',
      level: 'Undergraduate',
      field: 'Medicine'
    },
    {
      id: 4,
      title: 'Master of Data Science',
      university: 'University of Melbourne',
      country: 'Australia',
      duration: '2 years',
      tuition: 'AUD 45,000/year',
      level: 'Postgraduate',
      field: 'Engineering'
    },
    {
      id: 5,
      title: 'Bachelor of Engineering',
      university: 'University of Toronto',
      country: 'Canada',
      duration: '4 years',
      tuition: 'CAD 35,000/year',
      level: 'Undergraduate',
      field: 'Engineering'
    },
    {
      id: 6,
      title: 'Master of Public Health',
      university: 'Johns Hopkins University',
      country: 'USA',
      duration: '2 years',
      tuition: '$60,000/year',
      level: 'Postgraduate',
      field: 'Medicine'
    },
    {
      id: 7,
      title: 'Bachelor of Arts in Psychology',
      university: 'Cambridge University',
      country: 'UK',
      duration: '3 years',
      tuition: '£30,000/year',
      level: 'Undergraduate',
      field: 'Arts'
    },
    {
      id: 8,
      title: 'Master of Architecture',
      university: 'MIT',
      country: 'USA',
      duration: '2 years',
      tuition: '$58,000/year',
      level: 'Postgraduate',
      field: 'Architecture'
    },
    {
      id: 9,
      title: 'Bachelor of Economics',
      university: 'London School of Economics',
      country: 'UK',
      duration: '3 years',
      tuition: '£35,000/year',
      level: 'Undergraduate',
      field: 'Business'
    },
  ];

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.field.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }} data-testid="courses-title">
            {t('courses.title')}
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            {t('courses.subtitle')}
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder={t('courses.search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg rounded-full border-2 border-gray-200 focus:border-blue-500"
              data-testid="course-search-input"
            />
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-gray-900">{filteredCourses.length}</span> courses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div 
                key={course.id} 
                className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                data-testid={`course-card-${course.id}`}
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-2">
                    {course.level}
                  </span>
                  <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full ml-2 mb-2">
                    {course.field}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    <span>{course.university}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-green-600" />
                    <span>{course.country}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-amber-600" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <DollarSign className="w-4 h-4 text-purple-600" />
                    <span>{course.tuition}</span>
                  </div>
                </div>
                
                <a href="/contact">
                  <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors" data-testid={`apply-btn-${course.id}`}>
                    Apply Now
                  </button>
                </a>
              </div>
            ))}
          </div>
          
          {filteredCourses.length === 0 && (
            <div className="text-center py-16" data-testid="no-results">
              <p className="text-gray-600 text-lg">No courses found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
