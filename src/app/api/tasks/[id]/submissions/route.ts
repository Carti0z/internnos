import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { content, githubUrl } = body

    const { id } = await params

    // Check if user already has a pending submission
    const existingSubmission = await prisma.submission.findFirst({
      where: {
        taskId: id,
        userId: (session.user as any).id,
        status: {
          in: ["PENDING", "UNDER_REVIEW"],
        },
      },
    })

    if (existingSubmission) {
      return NextResponse.json(
        { error: "You already have a pending submission for this task" },
        { status: 400 }
      )
    }

    // Create submission
    const submission = await prisma.submission.create({
      data: {
        taskId: id,
        userId: (session.user as any).id,
        content,
        githubUrl,
        status: "PENDING",
      },
    })

    return NextResponse.json(submission, { status: 201 })
  } catch (error) {
    console.error("Error creating submission:", error)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
