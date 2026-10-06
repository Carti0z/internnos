"use client"

import { useSession } from "next-auth/react"
import { useRouter, useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function TaskReviewPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const params = useParams()
  const [submission, setSubmission] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin")
    }
  }, [status, router])

  useEffect(() => {
    if (status === "authenticated" && params.id) {
      fetchSubmission()
    }
  }, [status, params.id])

  const fetchSubmission = async () => {
    try {
      const response = await fetch(`/api/tasks/${params.id}/submissions/latest`)
      if (response.ok) {
        const data = await response.json()
        setSubmission(data)
      }
    } catch (error) {
      console.error("Failed to fetch submission:", error)
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
        <div className="max-w-3xl mx-auto">
          <a href="/dashboard" className="text-indigo-600 hover:text-indigo-700 mb-4 inline-block">
            ← Back to Dashboard
          </a>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Submission Received</h1>
              <p className="text-gray-600">
                Your assignment has been submitted and is awaiting AI review.
              </p>
            </div>

            {submission && (
              <div className="border-t pt-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Submission Details</h2>
                <div className="space-y-3">
                  {submission.githubUrl && (
                    <div>
                      <span className="text-sm text-gray-500">GitHub URL:</span>
                      <a href={submission.githubUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 ml-2">
                        {submission.githubUrl}
                      </a>
                    </div>
                  )}
                  {submission.liveUrl && (
                    <div>
                      <span className="text-sm text-gray-500">Live URL:</span>
                      <a href={submission.liveUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 ml-2">
                        {submission.liveUrl}
                      </a>
                    </div>
                  )}
                  <div>
                    <span className="text-sm text-gray-500">Submitted:</span>
                    <span className="ml-2">{new Date(submission.submittedAt).toLocaleDateString()}</span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Status:</span>
                    <span className="ml-2 capitalize">{submission.status.toLowerCase()}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 text-center">
              <button
                onClick={() => router.push("/dashboard")}
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                Return to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
