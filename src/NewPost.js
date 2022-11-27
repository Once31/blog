import React from "react";

const NewPost = ({
  postTitle,
  postBody,
  setPostBody,
  setPostTitle,
  handleSubmit,
}) => (
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

export default NewPost;
