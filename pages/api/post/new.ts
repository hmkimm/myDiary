import { connectDB } from "@/util/database";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    if (!req.body.title) {
      return res.status(500).json("제목을 입력해주세요");
    }
    try {
      const db = (await connectDB).db("diary")
      const result = await db.collection("post").insertOne(req.body);

      return res.status(200).redirect(302, "/list");
    } catch (error) {
      alert('DB에 문제가 생겼습니다.')
    }
  }
  req.body;
}
