"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function SkillsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [skills, setSkills] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin")
    }
  }, [status, router])

  useEffect(() => {
    if (status === "authenticated") {
      fetchSkills()
    }
  }, [status])

  const fetchSkills = async () => {
    try {
      const response = await fetch("/api/skills")
      if (response.ok) {
        const data = await response.json()
        setSkills(data)
      }
    } catch (error) {
      console.error("Failed to fetch skills:", error)
    } finally {
      setLoading(false)
    }
  }

  if (status === "loading" || loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Skills</h1>
          <p className="text-gray-600">Track your skill development through internship tasks and projects</p>
        </div>

        {skills.length === 0 ? (
          <div className="bg-white p-12 rounded-xl shadow-sm text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">No skills developed yet</h2>
            <p className="text-gray-600 mb-6">
              Complete internship tasks to start building your skill profile.
            </p>
            <a href="/dashboard" className="text-indigo-600 hover:text-indigo-700">
              Start Your Internship
            </a>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((userSkill) => (
              <div key={userSkill.id} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{userSkill.skill.name}</h3>
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {userSkill.proficiencyLevel}
                  </span>
                </div>
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span>Proficiency</span>
                    <span>{userSkill.score || 0}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full transition-all"
                      style={{ width: `${userSkill.score || 0}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <div>Evidence: {userSkill.evidenceCount} tasks/projects</div>
                  <div className="text-gray-400">Last assessed: {new Date(userSkill.updatedAt).toLocaleDateString()}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
