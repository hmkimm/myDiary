import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const edited = {
      title: req.body.title,
      content: req.body.content,
    };
    const db = (await connectDB).db("diary");
    const result = await db
      .collection("post")
      .updateOne({ _id: new ObjectId(req.body._id) }, { $set: edited });
    res.status(200).redirect(302, "/list");
  }
}
