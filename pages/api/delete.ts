import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    try {
      const db = (await connectDB).db("diary");
      const result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(req.body) });
      console.log(result);
      res.status(200).json("삭제완료");
    } catch (error) {
      res.status(500).json("DB에 문제가 있습니다.");
    }
  }
}
