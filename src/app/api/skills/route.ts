import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const userSkills = await prisma.userSkill.findMany({
      where: {
        userId: (session.user as any).id,
      },
      include: {
        skill: true,
      },
      orderBy: {
        updatedAt: "desc",
      },
    })

    return NextResponse.json(userSkills)
  } catch (error) {
    console.error("Error fetching skills:", error)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
