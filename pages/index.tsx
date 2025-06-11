import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Check, Star, ArrowRight, Phone, MessageCircle, Zap, Globe, Users, TrendingUp, Play, Shield, Award, Headphones } from 'lucide-react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleGetStarted = () => {
    // Navigate to signup
    window.location.href = '/signup';
  };

  const testimonials = [
    {
      text: "proPAL AI transformed our customer service. We can now handle 10x more calls in Hindi and English seamlessly!",
      author: "Rajesh Kumar",
      company: "TechStart Solutions",
      rating: 5
    },
    {
      text: "The multilingual support is incredible. Our customers love talking in their native language.",
      author: "Priya Sharma",
      company: "RetailPro India",
      rating: 5
    },
    {
      text: "ROI was visible within the first month. Automated 80% of our support calls.",
      author: "Amit Patel",
      company: "FinanceFirst",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      {/* Navigation Bar */}
      <nav className={`px-4 py-4 md:px-8 ${darkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-md shadow-lg fixed w-full z-50`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
              <Headphones className="text-white w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">proPAL</span>
              <span className={darkMode ? 'text-white' : 'text-gray-800'}> AI</span>
            </h1>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#features" className="font-medium hover:text-blue-600 transition-colors">Features</a>
            <a href="#how-it-works" className="font-medium hover:text-blue-600 transition-colors">How it Works</a>
            <a href="#pricing" className="font-medium hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#testimonials" className="font-medium hover:text-blue-600 transition-colors">Testimonials</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button onClick={toggleDarkMode} className={`rounded-full p-2 transition-colors ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}>
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button 
              onClick={() => window.location.href = '/login'} 
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
            >
              Sign In
            </button>
            <button 
              onClick={handleGetStarted} 
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 font-medium transition-all transform hover:scale-105"
            >
              Get Started Free
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleDarkMode} className={`mr-4 rounded-full p-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button onClick={toggleMenu} className="focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden fixed top-20 left-0 right-0 z-40 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl backdrop-blur-md`}>
          <div className="px-4 py-6 space-y-4">
            <a href="#features" className="block font-medium py-2 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#how-it-works" className="block font-medium py-2 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>How it Works</a>
            <a href="#pricing" className="block font-medium py-2 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <a href="#testimonials" className="block font-medium py-2 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <button 
              onClick={() => window.location.href = '/login'} 
              className={`w-full text-left py-2 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} rounded`}
            >
              Sign In
            </button>
            <button 
              onClick={handleGetStarted} 
              className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium"
            >
              Get Started Free
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className={`pt-32 pb-20 px-4 md:px-8 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'}`}>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Revolutionary Voice AI for Indian SMBs
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span>Transform Your Business with</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Multilingual Voice AI</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300 leading-relaxed">
                Automate customer calls, support, and outreach in Hindi, English, and 25+ Indian languages. Built specifically for Indian SMBs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={handleGetStarted}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 font-semibold flex items-center justify-center transition-all transform hover:scale-105 shadow-lg"
                >
                  Start Free Trial <ArrowRight size={20} className="ml-2" />
                </button>
                <button className={`px-8 py-4 rounded-xl ${darkMode ? 'border-2 border-gray-600 hover:bg-gray-800' : 'border-2 border-gray-300 hover:bg-gray-50'} font-semibold flex items-center justify-center transition-all`}>
                  <Play size={20} className="mr-2" />
                  Watch Demo
                </button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  No setup fees
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  14-day free trial
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  24/7 support
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl transform rotate-6 opacity-20"></div>
                <div className={`relative p-8 rounded-3xl shadow-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} transform transition-transform hover:scale-105`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-sm text-gray-500">Live Call</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className={`p-4 rounded-xl ${darkMode ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
                      <div className="flex items-center mb-2">
                        <Phone className="w-4 h-4 text-blue-500 mr-2" />
                        <span className="text-sm font-medium">Customer</span>
                      </div>
                      <p className="text-sm">"मुझे अपने order के बारे में जानकारी चाहिए"</p>
                    </div>
                    
                    <div className={`p-4 rounded-xl ${darkMode ? 'bg-purple-900/30' : 'bg-purple-50'}`}>
                      <div className="flex items-center mb-2">
                        <Headphones className="w-4 h-4 text-purple-500 mr-2" />
                        <span className="text-sm font-medium">proPAL AI</span>
                      </div>
                      <p className="text-sm">"जी हाँ, मैं आपकी मदद कर सकता हूँ। आपका order number क्या है?"</p>
                    </div>
                    
                    <div className="flex justify-center">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse delay-100"></div>
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse delay-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className={`py-16 px-4 md:px-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-2">25+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Indian Languages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-2">1000+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">SMBs Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-2">95%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className={`py-20 px-4 md:px-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Indian Businesses</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to automate customer interactions in multiple Indian languages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'}`}>
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-6">
                <Globe className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Multilingual Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Speak naturally in Hindi, English, Tamil, Telugu, Bengali, and 20+ other Indian languages and dialects.
              </p>
            </div>

            <div className={`p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'}`}>
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center mb-6">
                <Phone className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Automated Calls</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Handle customer support, sales calls, and follow-ups automatically with natural conversations.
              </p>
            </div>

            <div className={`p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'}`}>
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mb-6">
                <MessageCircle className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Conversations</h3>
              <p className="text-gray-600 dark:text-gray-300">
                AI understands context, emotions, and local nuances to provide human-like interactions.
              </p>
            </div>

            <div className={`p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'}`}>
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center mb-6">
                <TrendingUp className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Analytics Dashboard</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Track call performance, customer satisfaction, and business insights in real-time.
              </p>
            </div>

            <div className={`p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'}`}>
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 flex items-center justify-center mb-6">
                <Users className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">CRM Integration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Seamlessly integrate with popular CRM systems and business tools you already use.
              </p>
            </div>

            <div className={`p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'}`}>
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-teal-500 to-green-600 flex items-center justify-center mb-6">
                <Shield className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Enterprise Security</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Bank-grade security with data encryption and compliance with Indian data protection laws.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className={`py-20 px-4 md:px-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Join thousands of satisfied SMBs across India
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className={`p-8 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <div className="flex items-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg md:text-xl mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">
                    {testimonials[currentTestimonial].author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold">{testimonials[currentTestimonial].author}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{testimonials[currentTestimonial].company}</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Customer Experience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join 1000+ Indian SMBs already using proPAL AI to automate their customer interactions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleGetStarted}
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Start Free 14-Day Trial
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule Demo
            </button>
          </div>
          <p className="mt-6 opacity-80 text-sm">No credit card required • Cancel anytime • 24/7 support</p>
        </div>
      </div>

      {/* Footer */}
      <footer className={`py-16 px-4 md:px-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-2">
                  <Headphones className="text-white w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">proPAL</span>
                  <span className={darkMode ? 'text-white' : 'text-gray-800'}> AI</span>
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Revolutionizing customer interactions for Indian SMBs with multilingual voice AI
              </p>
              <div className="flex space-x-4">
                <div className={`w-10 h-10 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} flex items-center justify-center cursor-pointer hover:bg-blue-500 hover:text-white transition-colors`}>
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className={`w-10 h-10 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} flex items-center justify-center cursor-pointer hover:bg-blue-400 hover:text-white transition-colors`}>
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className={`w-10 h-10 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} flex items-center justify-center cursor-pointer hover:bg-blue-600 hover:text-white transition-colors`}>
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><a href="#features" className="hover:text-blue-600 transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</a></li>
                <li><a href="/dashboard" className="hover:text-blue-600 transition-colors">Dashboard</a></li>
                <li><a href="/agent" className="hover:text-blue-600 transition-colors">Voice Agents</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Press</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Status</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
            <p>© 2024 proPAL AI. All rights reserved. Made with ❤️ in India</p>
          </div>
        </div>
      </footer>
    </div>
  );
}