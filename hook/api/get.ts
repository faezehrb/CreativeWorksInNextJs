// import { PrismaClient } from "@prisma/client";

// interface Company {
//     id: number;
//     name: string;
//     img: string;
//     position: string;
//     detail: string;
//   }
  
//   const prisma = new PrismaClient()
  
//   async function getCompanyById(coId: Number) {
//     const response = await fetch(`http//localhost:3000/api/companies/${coId}`, {
//       method: 'GET'
//     })
//     return response.json()
//   }

// export default async function useGet({params}: any) {
//     const company = await getCompanyById(params.id)

// }  