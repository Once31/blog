import React from "react";
import { format } from "date-fns";
import { useHistory } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";

const NewPost = () => {
  const history = useHistory();
  const postTitle = useStoreState((state) => state.postTitle);
  const postBody = useStoreState((state) => state.postBody);
  const setPostTitle = useStoreActions((actions) => actions.setPostTitle);
  const setPostBody = useStoreActions((actions) => actions.setPostBody);

  const posts = useStoreState((state) => state.posts);
  const savePost = useStoreActions((actions) => actions.savePost);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = {
      id: id,
      title: postTitle,
      datetime: datetime,
      body: postBody,
    };
    savePost(newPost);
    history.push("/");
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
