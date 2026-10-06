"use client"

import { useSession } from "next-auth/react"
import { useRouter, useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function TaskPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const params = useParams()
  const [task, setTask] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [submission, setSubmission] = useState({
    content: "",
    githubUrl: "",
    liveUrl: "",
  })

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin")
    }
  }, [status, router])

  useEffect(() => {
    if (status === "authenticated" && params.id) {
      fetchTask()
    }
  }, [status, params.id])

  const fetchTask = async () => {
    try {
      const response = await fetch(`/api/tasks/${params.id}`)
      if (response.ok) {
        const data = await response.json()
        setTask(data)
      }
    } catch (error) {
      console.error("Failed to fetch task:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const response = await fetch(`/api/tasks/${params.id}/submissions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submission),
      })

      if (response.ok) {
        router.push(`/tasks/${params.id}/review`)
      } else {
        alert("Failed to submit task")
      }
    } catch (error) {
      console.error("Failed to submit task:", error)
      alert("Failed to submit task")
    } finally {
      setSubmitting(false)
    }
  }

  if (status === "loading" || loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  if (!session) {
    return null
  }

  if (!task) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Task not found</h1>
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{task.title}</h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>{task.estimatedHours}h estimated</span>
            <span>•</span>
            <span className="capitalize">{task.difficulty}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Task Details */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-600 whitespace-pre-line">{task.description}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Instructions</h2>
              <p className="text-gray-600 whitespace-pre-line">{task.instructions}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Evaluation Criteria</h2>
              <p className="text-gray-600 whitespace-pre-line">{task.evaluationCriteria}</p>
            </div>
          </div>

          {/* Submission Form */}
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm sticky top-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Submit Assignment</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    GitHub URL
                  </label>
                  <input
                    type="url"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="https://github.com/username/repo"
                    value={submission.githubUrl}
                    onChange={(e) => setSubmission({ ...submission, githubUrl: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Live URL (optional)
                  </label>
                  <input
                    type="url"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="https://your-app.vercel.app"
                    value={submission.liveUrl}
                    onChange={(e) => setSubmission({ ...submission, liveUrl: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Comments (optional)
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    rows={4}
                    placeholder="Any additional notes about your submission..."
                    value={submission.content}
                    onChange={(e) => setSubmission({ ...submission, content: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? "Submitting..." : "Submit for Review"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
