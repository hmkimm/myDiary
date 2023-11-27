"use client";

import Link from "next/link";
import axios from "axios";

interface ResultType {
  _id: string;
  title: string;
  content: string;
}

interface ListItemProps {
  result: ResultType[];
}

export default function ListItem({ result }: ListItemProps) {
  return (
    <>
      {result.map((el, i) => {
        return (
          <div className="list-item" key={i}>
            <Link prefetch={false} href={`/detail/${el._id}`}>
              <h4>{el.title}</h4>
            </Link>
            <Link href={`/edit/${el._id}`}>수정하기 ✏️</Link>
            <span
              onClick={() => {
                axios
                  .delete("/api/delete", { data: { id: el._id } })
                  .then((res) => {
                    if (res.status === 200) {
                      console.log(res.data);
                    } else {
                      console.log("서버에 문제가 생겼습니다.");
                    }
                  })
                  .catch((error) => {
                    console.error(error);
                  });
              }}
            >
              삭제하기 🪣
            </span>
            <p>{el.content}</p>
          </div>
        );
      })}
    </>
  );
}
