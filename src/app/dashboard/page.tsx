"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin")
    }
  }, [status, router])

  if (status === "loading") {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Welcome, {session.user?.name || "Student"}!
        </h1>
        
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-indigo-600 mb-2">0%</div>
            <div className="text-gray-600">Internship Progress</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-indigo-600 mb-2">0/25</div>
            <div className="text-gray-600">Tasks Completed</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-indigo-600 mb-2">0%</div>
            <div className="text-gray-600">Current Score</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-indigo-600 mb-2">0</div>
            <div className="text-gray-600">Skills Developed</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Start Your Journey</h2>
          <p className="text-gray-600 mb-6">
            You haven't enrolled in any internship yet. Explore our programs and start your AI-powered internship today.
          </p>
          <a 
            href="/courses" 
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition inline-block"
          >
            Explore Programs
          </a>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-6">
          <a href="/projects" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">My Projects</h3>
                <p className="text-sm text-gray-600">View your portfolio</p>
              </div>
            </div>
          </a>

          <a href="/skills" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">My Skills</h3>
                <p className="text-sm text-gray-600">Track your progress</p>
              </div>
            </div>
          </a>

          <a href="/courses" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Browse Courses</h3>
                <p className="text-sm text-gray-600">Explore programs</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
