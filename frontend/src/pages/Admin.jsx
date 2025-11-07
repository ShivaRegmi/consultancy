import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LogIn, LogOut, FileText, BookOpen, MessageSquare, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { toast } from 'sonner';
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';

export const Admin = () => {
  const { t } = useTranslation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Blog state
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: '', excerpt: '', content: '', image: '' });

  // Courses state
  const [courses, setCourses] = useState([]);

  // Testimonials state
  const [testimonials, setTestimonials] = useState([]);

  // Leads state
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    // Check if user is already logged in
    if (auth) {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        setIsLoggedIn(!!user);
        if (user) {
          loadData();
        }
      });
      return () => unsubscribe();
    }
  }, []);

  const loadData = async () => {
    if (!db) return;
    
    try {
      // Load blogs
      const blogsSnapshot = await getDocs(collection(db, 'blog_posts'));
      setBlogs(blogsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));

      // Load leads
      const leadsSnapshot = await getDocs(collection(db, 'leads'));
      setLeads(leadsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));

      // Load courses
      const coursesSnapshot = await getDocs(collection(db, 'courses'));
      setCourses(coursesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));

      // Load testimonials
      const testimonialsSnapshot = await getDocs(collection(db, 'testimonials'));
      setTestimonials(testimonialsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (auth) {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success('Logged in successfully!');
        loadData();
      } else {
        toast.error('Firebase not configured. Please set up Firebase.');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Invalid credentials. Please check your email and password.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      if (auth) {
        await signOut(auth);
        toast.success('Logged out successfully!');
      }
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Error logging out');
    }
  };

  const handleAddBlog = async (e) => {
    e.preventDefault();
    if (!db) {
      toast.error('Firebase not configured');
      return;
    }

    try {
      await addDoc(collection(db, 'blog_posts'), {
        ...newBlog,
        author: 'Admin',
        date: new Date().toISOString()
      });
      toast.success('Blog post added successfully!');
      setNewBlog({ title: '', excerpt: '', content: '', image: '' });
      loadData();
    } catch (error) {
      console.error('Error adding blog:', error);
      toast.error('Error adding blog post');
    }
  };

  const handleDeleteBlog = async (id) => {
    if (!db) return;
    try {
      await deleteDoc(doc(db, 'blog_posts', id));
      toast.success('Blog post deleted');
      loadData();
    } catch (error) {
      console.error('Error deleting blog:', error);
      toast.error('Error deleting blog post');
    }
  };

  // Login Screen
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen pt-16 bg-gradient-to-br from-blue-50 to-amber-50 flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 mb-4">
                <LogIn className="w-8 h-8 text-blue-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }} data-testid="admin-login-title">
                {t('admin.title')}
              </h1>
              <p className="text-gray-600">Sign in to manage your website</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-4" data-testid="admin-login-form">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('admin.email')}
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  required
                  data-testid="admin-email-input"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('admin.password')}
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  data-testid="admin-password-input"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700" 
                disabled={loading}
                data-testid="admin-login-btn"
              >
                {loading ? 'Signing in...' : t('admin.login')}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-800">
                <strong>Note:</strong> Please configure Firebase and set up your admin account to access the dashboard.
              </p>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }} data-testid="admin-dashboard-title">
            {t('admin.title')}
          </h1>
          <Button onClick={handleLogout} variant="outline" data-testid="admin-logout-btn">
            <LogOut className="w-4 h-4 mr-2" />
            {t('admin.logout')}
          </Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="blogs" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="blogs" data-testid="tab-blogs">
              <FileText className="w-4 h-4 mr-2" />
              {t('admin.blogs')}
            </TabsTrigger>
            <TabsTrigger value="courses" data-testid="tab-courses">
              <BookOpen className="w-4 h-4 mr-2" />
              {t('admin.courses')}
            </TabsTrigger>
            <TabsTrigger value="testimonials" data-testid="tab-testimonials">
              <MessageSquare className="w-4 h-4 mr-2" />
              {t('admin.testimonials')}
            </TabsTrigger>
            <TabsTrigger value="leads" data-testid="tab-leads">
              <Users className="w-4 h-4 mr-2" />
              {t('admin.leads')}
            </TabsTrigger>
          </TabsList>

          {/* Blogs Tab */}
          <TabsContent value="blogs">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Add Blog Form */}
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Add New Blog Post</h2>
                <form onSubmit={handleAddBlog} className="space-y-4" data-testid="add-blog-form">
                  <Input
                    placeholder="Blog Title"
                    value={newBlog.title}
                    onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                    required
                    data-testid="blog-title-input"
                  />
                  <Input
                    placeholder="Image URL"
                    value={newBlog.image}
                    onChange={(e) => setNewBlog({ ...newBlog, image: e.target.value })}
                    required
                    data-testid="blog-image-input"
                  />
                  <Textarea
                    placeholder="Excerpt (short description)"
                    value={newBlog.excerpt}
                    onChange={(e) => setNewBlog({ ...newBlog, excerpt: e.target.value })}
                    rows={3}
                    required
                    data-testid="blog-excerpt-input"
                  />
                  <Textarea
                    placeholder="Full Content"
                    value={newBlog.content}
                    onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
                    rows={6}
                    required
                    data-testid="blog-content-input"
                  />
                  <Button type="submit" className="w-full" data-testid="add-blog-btn">
                    Add Blog Post
                  </Button>
                </form>
              </Card>

              {/* Blog List */}
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Blog Posts ({blogs.length})</h2>
                <div className="space-y-4 max-h-[600px] overflow-y-auto">
                  {blogs.map((blog) => (
                    <div key={blog.id} className="p-4 border border-gray-200 rounded-lg" data-testid={`blog-item-${blog.id}`}>
                      <h3 className="font-semibold text-gray-900">{blog.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{blog.excerpt}</p>
                      <Button 
                        variant="destructive" 
                        size="sm" 
                        className="mt-2"
                        onClick={() => handleDeleteBlog(blog.id)}
                        data-testid={`delete-blog-${blog.id}`}
                      >
                        Delete
                      </Button>
                    </div>
                  ))}
                  {blogs.length === 0 && (
                    <p className="text-gray-500 text-center py-8">No blog posts yet</p>
                  )}
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Courses Tab */}
          <TabsContent value="courses">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Courses ({courses.length})</h2>
              <p className="text-gray-600">Course management interface will be available here.</p>
            </Card>
          </TabsContent>

          {/* Testimonials Tab */}
          <TabsContent value="testimonials">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Testimonials ({testimonials.length})</h2>
              <p className="text-gray-600">Testimonial management interface will be available here.</p>
            </Card>
          </TabsContent>

          {/* Leads Tab */}
          <TabsContent value="leads">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Leads & Inquiries ({leads.length})</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4">Name</th>
                      <th className="text-left py-3 px-4">Email</th>
                      <th className="text-left py-3 px-4">Phone</th>
                      <th className="text-left py-3 px-4">Message</th>
                      <th className="text-left py-3 px-4">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leads.map((lead) => (
                      <tr key={lead.id} className="border-b border-gray-100" data-testid={`lead-${lead.id}`}>
                        <td className="py-3 px-4">{lead.name}</td>
                        <td className="py-3 px-4">{lead.email}</td>
                        <td className="py-3 px-4">{lead.phone}</td>
                        <td className="py-3 px-4 max-w-xs truncate">{lead.message}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">
                          {lead.timestamp ? new Date(lead.timestamp).toLocaleDateString() : 'N/A'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {leads.length === 0 && (
                  <p className="text-gray-500 text-center py-8">No leads yet</p>
                )}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
