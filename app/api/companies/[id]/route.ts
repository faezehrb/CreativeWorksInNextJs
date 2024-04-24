import { PrismaClient } from "@prisma/client"
import { error } from "console"
import { NextResponse,NextRequest } from "next/server"

const prisma = new PrismaClient()

export async function GET(request: Request, context: any) {
      try {
        const { params } = context
        const companies = await prisma.company.findFirst({
            where: {
                id: Number(prisma),
            },
        })
        if (!companies){
            return NextResponse.json({ message: "Internal Server Error" })
        }
        return NextResponse.json(companies)
      } catch (error) {
        console.error("Error:", error)
        return NextResponse.json({ message: "Internal Server Error" })
      }
  }