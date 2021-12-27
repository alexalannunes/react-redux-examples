import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../store/postsSlice";

function Header() {
  const s = useSelector(selectAllPosts);

  console.log(s);
  return (
    <div>
      <span>ddk</span>
    </div>
  );
}

export default Header;
