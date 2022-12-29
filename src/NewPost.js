import React from "react";
import { format } from "date-fns";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import DataContext from "./Context/DataContext";
import api from "./api/posts";

const NewPost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const history = useHistory();
  const { posts, setPosts } = useContext(DataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = {
      id: id,
      title: postTitle,
      datetime: datetime,
      body: postBody,
    };
    try {
      const response = await api.post("/posts", newPost);
      const allPosts = [...posts, response.data];
      //   console.log(response);
      setPosts(allPosts);
      setPostTitle("");
      setPostBody("");
      history.push("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <main className="NewPost">
      <form className="newPostForm" onSubmit={handleSubmit}>
        <h2>New Post</h2>
        <label htmlFor="postTitle">Title:</label>
        <input
          id={postTitle}
          type="text"
          required
          value={postTitle}
          onChange={(e) => {
            setPostTitle(e.target.value);
          }}
        />

        <label htmlFor="postBody">Body:</label>
        <textarea
          id={postBody}
          value={postBody}
          onChange={(e) => {
            setPostBody(e.target.value);
          }}
        ></textarea>
        <button type="submit">Post</button>
      </form>
    </main>
  );
};

export default NewPost;
