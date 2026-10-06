"use client"

import { useSession } from "next-auth/react"
import { useRouter, useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function InternshipPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const params = useParams()
  const [internship, setInternship] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin")
    }
  }, [status, router])

  useEffect(() => {
    if (status === "authenticated" && params.id) {
      fetchInternship()
    }
  }, [status, params.id])

  const fetchInternship = async () => {
    try {
      const response = await fetch(`/api/internships/${params.id}`)
      if (response.ok) {
        const data = await response.json()
        setInternship(data)
      }
    } catch (error) {
      console.error("Failed to fetch internship:", error)
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

  if (!internship) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Internship not found</h1>
            <a href="/dashboard" className="text-indigo-600 hover:text-indigo-700">
              Return to Dashboard
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <a href="/dashboard" className="text-indigo-600 hover:text-indigo-700 mb-4 inline-block">
            ← Back to Dashboard
          </a>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{internship.title}</h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>{internship.companyName}</span>
            <span>•</span>
            <span>{internship.department}</span>
            <span>•</span>
            <span>{internship.role}</span>
          </div>
        </div>

        {/* Progress */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Overall Progress</h2>
            <span className="text-2xl font-bold text-indigo-600">0%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "0%" }}></div>
          </div>
        </div>

        {/* Modules */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Curriculum</h2>
          {internship.modules?.map((module: any, index: number) => (
            <div key={module.id} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                      Week {module.weekNumber}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900">{module.title}</h3>
                  </div>
                  <p className="text-gray-600">{module.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500 mb-1">Progress</div>
                  <div className="text-lg font-semibold text-indigo-600">0%</div>
                </div>
              </div>

              {/* Tasks */}
              <div className="mt-4 space-y-3">
                {module.tasks?.map((task: any) => (
                  <div
                    key={task.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer"
                    onClick={() => router.push(`/tasks/${task.id}`)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">○</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{task.title}</div>
                        <div className="text-sm text-gray-500">
                          {task.estimatedHours}h • {task.difficulty}
                        </div>
                      </div>
                    </div>
                    <div className="text-indigo-600">
                      Start →
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
