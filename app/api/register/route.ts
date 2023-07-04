import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { hash } from "bcryptjs"

// TODO: Make this more robust, right now it's just so I can add users when I need to
export async function POST(req: Request) {
  const prisma = new PrismaClient()
  const data = await req.json()
  const accountData = { ...data }

  async function main() {
    const hashedPassword = await hash(accountData.password, 12)
    const user = await prisma.user.create({
      data: {
        email: accountData.email,
        name: accountData.name,
        password: hashedPassword,
      },
    })
    console.log({ user })
  }
  await main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })

  return NextResponse.json({ status: `added user : ${data.email}` })
}
