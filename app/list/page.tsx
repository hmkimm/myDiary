import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function List() {
  const db = (await connectDB).db("diary");
  const result = await db.collection("post").find().toArray();
  return (
    <div className="list-bg">
      {result.map((el, i) => {
        return (
          <Link prefetch={false} href={`/detail/${el._id}`}>
            <div className="list-item" key={i}>
              <h4>{el.title}</h4>
              <p>{el.content}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
