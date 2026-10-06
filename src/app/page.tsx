"use client"

import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "How long does each internship program last?",
      answer: "Our internship programs are designed as 8-week intensive experiences. During this time, you'll complete real-world projects, receive AI feedback, and build a professional portfolio."
    },
    {
      question: "Do I need prior experience to join?",
      answer: "No prior experience is required for our beginner-level programs. We have career paths suitable for complete beginners as well as those with some background looking to specialize."
    },
    {
      question: "Is the certificate recognized by employers?",
      answer: "Yes, our certificates are recognized by our partner companies and can be verified through our platform. More importantly, you'll have a portfolio of real projects to showcase your skills."
    },
    {
      question: "How does the AI feedback system work?",
      answer: "Our AI supervisors review your project submissions within 24-48 hours, providing detailed feedback on code quality, best practices, and areas for improvement. You can revise and resubmit based on feedback."
    },
    {
      question: "What is the time commitment per week?",
      answer: "We recommend 10-15 hours per week for optimal results. The program is designed to be flexible, allowing you to learn at your own pace while balancing other commitments."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "We offer a 7-day money-back guarantee. If you're not satisfied with the program within the first week, we'll provide a full refund, no questions asked."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-indigo-600">InternOS</div>
            <div className="flex gap-4">
              <Link href="/auth/signin" className="text-gray-600 hover:text-indigo-600 transition">
                Sign In
              </Link>
              <Link 
                href="/auth/signup" 
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition shadow-md hover:shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800"></div>
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Abstract geometric patterns */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 py-32 min-h-[90vh] flex items-center">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-indigo-200 text-sm font-medium">🚀 Transform Your Career with AI-Powered Experience</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Launch Your Career with 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
                Real-World Experience
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Don't just learn skills. Gain <span className="text-white font-semibold">actual work experience</span> through AI-powered virtual internships. 
              Complete real projects, get AI feedback, and build a portfolio that gets you hired.
            </p>

            {/* Perfect CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link 
                href="/auth/signup" 
                className="group relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-10 py-4 rounded-xl text-lg font-bold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
              >
                <span className="flex items-center gap-2">
                  Start Your Internship
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              
              <Link 
                href="/courses" 
                className="group bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-xl text-lg font-semibold border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                Explore Programs
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-gray-300">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Free to Start</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">AI-Powered Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Real Portfolio Projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="relative z-10 bg-white">
          <div className="container mx-auto px-6 py-24">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">How It Works</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Your journey from beginner to career-ready professional in 6 simple steps</p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Choose Your Career", desc: "Select from Software Engineering, Data Analysis, UI/UX Design, and more" },
                { step: "02", title: "Start Your Internship", desc: "Get matched with a virtual company and begin your 8-week journey" },
                { step: "03", title: "Complete Real-World Tasks", desc: "Work on actual projects that mirror real workplace challenges" },
                { step: "04", title: "Get AI Feedback", desc: "Receive personalized reviews and guidance from AI supervisors" },
                { step: "05", title: "Build Your Portfolio", desc: "Showcase your completed projects and achievements" },
                { step: "06", title: "Earn Your Certificate", desc: "Get a verifiable certificate to boost your career prospects" },
              ].map((item) => (
                <div key={item.step} className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-indigo-100 group hover:-translate-y-2">
                  <div className="text-4xl font-bold text-indigo-600 mb-2 group-hover:scale-110 transition-transform">{item.step}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Courses */}
        <div className="relative z-10 bg-white">
          <div className="container mx-auto px-6 py-24">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Featured Programs</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Choose your career path and start building real-world experience</p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Software Engineering", duration: "8 weeks", level: "Beginner-Intermediate", icon: "💻" },
                { title: "Data Analysis", duration: "8 weeks", level: "Beginner-Intermediate", icon: "📊" },
                { title: "UI/UX Design", duration: "8 weeks", level: "Beginner-Intermediate", icon: "🎨" },
              ].map((course) => (
                <div key={course.title} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                  <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                    {course.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.duration} • {course.level}</p>
                  <Link 
                    href="/courses" 
                    className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 group-hover:translate-x-1 transition-transform"
                  >
                    Learn More 
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video Demo Section */}
        <div className="relative z-10 bg-gray-50">
          <div className="container mx-auto px-6 py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">See InternOS in Action</h2>
              <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Watch how our AI-powered platform transforms beginners into job-ready professionals</p>
              
              <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl aspect-video group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-white text-lg font-semibold">Watch Platform Demo</p>
                    <p className="text-white/70 text-sm mt-2">2:30 min overview</p>
                  </div>
                </div>
                {/* Placeholder for actual video */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Real project walkthrough
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  AI feedback demonstration
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Student success stories
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="relative z-10 bg-gray-900 text-white">
          <div className="container mx-auto px-6 py-24">
            <h2 className="text-3xl font-bold text-center mb-4">Why Choose InternOS?</h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Our results speak for themselves - see what makes our program different</p>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { value: "95%", label: "Completion Rate", desc: "Students who finish their program" },
                { value: "80%", label: "Hired Within 3 Months", desc: "Graduates who land jobs" },
                { value: "50+", label: "Real Projects", desc: "Portfolio-ready assignments" },
                { value: "24/7", label: "AI Support", desc: "Instant feedback and guidance" },
              ].map((stat) => (
                <div key={stat.label} className="text-center group">
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{stat.label}</h3>
                  <p className="text-gray-400 text-sm">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="relative z-10 bg-white">
          <div className="container mx-auto px-6 py-24">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Everything you need to know about our AI-powered internship programs</p>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeFaq === index && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="relative z-10 bg-gradient-to-br from-indigo-600 to-purple-700">
          <div className="container mx-auto px-6 py-24 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Your next opportunity starts with experience.</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">Join thousands of students building real-world skills and getting hired today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/auth/signup" 
                className="bg-white text-indigo-600 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Your Internship
              </Link>
              <Link 
                href="/courses" 
                className="border-2 border-white text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition"
              >
                View All Programs
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <div className="text-2xl font-bold text-indigo-400 mb-4">InternOS</div>
              <p className="text-gray-400 mb-4">AI-powered virtual internships that build real-world experience and launch careers.</p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/courses" className="text-gray-400 hover:text-white transition">Programs</Link></li>
                <li><Link href="/auth/signup" className="text-gray-400 hover:text-white transition">Sign Up</Link></li>
                <li><Link href="/auth/signin" className="text-gray-400 hover:text-white transition">Sign In</Link></li>
                <li><Link href="/dashboard" className="text-gray-400 hover:text-white transition">Dashboard</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition">Terms of Service</Link></li>
                <li><Link href="/refund" className="text-gray-400 hover:text-white transition">Refund Policy</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact Us</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-semibold mb-4">Stay Updated</h3>
              <p className="text-gray-400 mb-4">Get career tips and program updates delivered to your inbox.</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">© 2026 InternOS. All rights reserved. Built with ❤️ for career changers.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
