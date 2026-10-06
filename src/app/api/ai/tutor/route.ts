import { NextResponse } from "next/server"
import { tutorAgent } from "@/ai/tutor-agent"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { question, context } = body

    const response = await tutorAgent.explain({
      userId: (session.user as any).id,
      question,
      context,
    })

    return NextResponse.json(response)
  } catch (error) {
    console.error("Tutor agent error:", error)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
