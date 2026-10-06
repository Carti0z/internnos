import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const submission = await prisma.submission.findFirst({
      where: {
        taskId: params.id,
        userId: (session.user as any).id,
      },
      orderBy: {
        submittedAt: "desc",
      },
    })

    if (!submission) {
      return NextResponse.json({ error: "No submission found" }, { status: 404 })
    }

    return NextResponse.json(submission)
  } catch (error) {
    console.error("Error fetching submission:", error)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
