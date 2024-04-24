

import { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"
import { NextResponse,NextRequest } from "next/server"

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    try {
      const { name, img, position, detail } = await req.json()
      const company = await prisma.company.create({
        data: {
          name,
          img,
          position,
          detail,
        },
      })
      return NextResponse.json(company)
    } catch (error) {
      console.error("Error:", error)
      return NextResponse.json({ message: "Internal Server Error" })
    }
  } else {
    return NextResponse.json({ message: "Method Not Allowed" })
  }
}

export async function GET(req: NextRequest) {

    if (req.method === "GET") {
      try {
        const companies = await prisma.company.findMany();
        console.log(companies);
        return NextResponse.json(companies);
      } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ message: "Internal Server Error" });
      }
    } else {
      return NextResponse.json({ message: "Method Not Allowed" });
    }
  }

  // export async function DELETE( req: NextRequest  ) {
  //   if (req.method === "DELETE") {
     
  //     try {
  //       const { id }: any = req.body
  //       if (!id) {
  //         return NextResponse.json({ message: "Parameter 'id' is required" })
  //       }
  //       const deletedCompany = await prisma.company.delete({
  //         where: {
  //           id: Number(id),
  //         }
  //       })
  //       if (!deletedCompany) {
  //         return NextResponse.json({ message: "Company not found" })
  //       }
  //       return NextResponse.json(deletedCompany)
  //     } catch (error) {
  //       console.error("Error:", error)
  //       return NextResponse.json({ message: "Internal Server Error" })
  //     }
  //   } else {
  //     return NextResponse.json({ message: "Method Not Allowed" })
  //   }
  // }
  
  // export async function PUT(req: NextApiRequest) {
  //   if (req.method === "PUT") {
  //     try {
  //       const { id, name, img, position, detail } = req.body;
  //       if (!id) {
  //         return NextResponse.json({ message: "Parameter 'id' is required" });
  //       }
  //       const updatedCompany = await prisma.company.update({
  //         where: {
  //           id: Number(id),
  //         },
  //         data: {
  //           name,
  //           img,
  //           position,
  //           detail,
  //         },
  //       })
  //       return NextResponse.json(updatedCompany)
  //     } catch (error) {
  //       console.error("Error:", error);
  //       return NextResponse.json({ message: "Internal Server Error" })
  //     }
  //   } else {
  //     return NextResponse.json({ message: "Method Not Allowed" })
  //   }
  // }
