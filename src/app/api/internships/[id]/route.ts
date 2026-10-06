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

    const internship = await prisma.internship.findUnique({
      where: { id: params.id },
      include: {
        course: true,
        modules: {
          orderBy: { orderIndex: 'asc' },
          include: {
            tasks: {
              orderBy: { createdAt: 'asc' },
            },
          },
        },
      },
    })

    if (!internship) {
      return NextResponse.json({ error: "Internship not found" }, { status: 404 })
    }

    return NextResponse.json(internship)
  } catch (error) {
    console.error("Error fetching internship:", error)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
