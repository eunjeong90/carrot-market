import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import client from "../../libs/client";

export default async function handler(req:NextApiRequest, res:NextResponse ) {
  
  await client.user.create({
    data: {
    email: "hi",
    name: "hi"
    },
  });
  res.json({
    ok: true,
  });
}