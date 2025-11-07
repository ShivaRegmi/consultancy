import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { db } from '../firebase';
import { collection, query, getDocs, orderBy } from 'firebase/firestore';

export const Blog = () => {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Demo data for when Firebase is not configured
  const demoPosts = [
    {
      id: '1',
      title: 'Top 10 Tips for IELTS Success',
      excerpt: 'Master the IELTS exam with these proven strategies and tips from our expert instructors.',
      content: 'Full content here...',
      author: 'Admin',
      date: new Date().toISOString(),
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop'
    },
    {
      id: '2',
      title: 'Studying in USA: Complete Guide 2025',
      excerpt: 'Everything you need to know about pursuing higher education in the United States.',
      content: 'Full content here...',
      author: 'Admin',
      date: new Date().toISOString(),
      image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&h=400&fit=crop'
    },
    {
      id: '3',
      title: 'Scholarship Opportunities for Nepali Students',
      excerpt: 'Discover various scholarship programs available for students from Nepal.',
      content: 'Full content here...',
      author: 'Admin',
      date: new Date().toISOString(),
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop'
    },
    {
      id: '4',
      title: 'How to Ace Your Student Visa Interview',
      excerpt: 'Essential tips and common questions for your student visa interview preparation.',
      content: 'Full content here...',
      author: 'Admin',
      date: new Date().toISOString(),
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop'
    },
    {
      id: '5',
      title: 'Best Engineering Universities in Canada',
      excerpt: 'Explore top-ranked Canadian universities for engineering programs.',
      content: 'Full content here...',
      author: 'Admin',
      date: new Date().toISOString(),
      image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&h=400&fit=crop'
    },
    {
      id: '6',
      title: 'Study Abroad: Budgeting and Financial Planning',
      excerpt: 'Learn how to manage your finances while studying abroad with our comprehensive guide.',
      content: 'Full content here...',
      author: 'Admin',
      date: new Date().toISOString(),
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop'
    },
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        if (db) {
          const q = query(collection(db, 'blog_posts'), orderBy('date', 'desc'));
          const querySnapshot = await getDocs(q);
          const postsData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setPosts(postsData.length > 0 ? postsData : demoPosts);
        } else {
          setPosts(demoPosts);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
        setPosts(demoPosts);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }} data-testid="blog-title">
            {t('blog.title')}
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-16" data-testid="loading">
              <p className="text-gray-600">Loading posts...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article 
                  key={post.id} 
                  className="group rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                  data-testid={`blog-post-${post.id}`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <button className="flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors" data-testid={`read-more-${post.id}`}>
                      <span>{t('blog.read_more')}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
