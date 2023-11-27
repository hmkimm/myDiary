import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

interface propsType {
  params: {
    id: string;
  };
}
export default async function Edit(props: propsType) {
  const db = (await connectDB).db("diary");
  const result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  await db
    .collection("post")
    .updateOne({ _id: new ObjectId(props.params.id) }, { $set: { result } });

  console.log(result);
  return (
    <div>
      <h4>수정 페이지</h4>
      <form action="/api/post/edit" method="POST">
        <input name="title" defaultValue={result!.title} />
        <input name="content" defaultValue={result!.content} />
        <input
          name="_id"
          defaultValue={result!._id.toString()}
          style={{ display: "none" }}
        />
        <button type="submit">수정하기</button>
      </form>
    </div>
  );
}
