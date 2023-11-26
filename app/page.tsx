import { connectDB } from "@/util/database";

export default async function Home() {
  const db = (await connectDB).db("diary");
  const result = await db.collection("post").find().toArray();
  console.log(result);

  return <div>안녕하세유~</div>;
}