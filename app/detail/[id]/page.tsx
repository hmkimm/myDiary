import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

interface DetailProps {
  params: {
    id: string;
  };
}
export default async function Detail(props: any) {
  const db = (await connectDB).db("diary");
  const result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  console.log(props.params.id);
  return (
    <div>
      <h4>상세페이지</h4>
      <h4>글제목</h4>
      <p>글내용</p>
    </div>
  );
}
