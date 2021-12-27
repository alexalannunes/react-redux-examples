import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { populate, selectAll, updateOne } from "../store/postsSlice";

const data = [
  { id: 1, count: 0 },
  { id: 2, count: 0 },
];
function PostList() {
  const posts = useSelector(selectAll);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(populate(data));
  }, []);

  const handleClick = (item) => {
    dispatch(updateOne(item));
  };
  return (
    <div>
      <span>{JSON.stringify(posts)}</span>
      {posts.length
        ? posts.map((item) => (
            <button onClick={() => handleClick(item)} key={item.id}>
              {" "}
              [{item.id}] count+1
            </button>
          ))
        : null}
    </div>
  );
}

export default PostList;
