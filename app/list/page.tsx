import { connectDB } from "@/util/database";
import ListItem from "./listitem";

export default async function List() {
  const db = (await connectDB).db("diary");
  const result = await db.collection("post").find().toArray();

  const mappedResult = result.map((item) => ({
    _id: item._id.toString(),
    title: item.title,
    content: item.content,
  }));

  return (
    <div className="list-bg">
      <ListItem result={mappedResult} />
    </div>
  );
}
