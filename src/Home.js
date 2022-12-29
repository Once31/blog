import React from "react";
import Feed from "./Feed";
import { useContext } from "react";
import DataContext from "./Context/DataContext";
const Home = () => {
  const { searchResults, fetchError, isLoading } = useContext(DataContext);
  return (
    <main className="Home">
      {isLoading && <p className="statusMsg">Loading posts...</p>}
      {!isLoading && fetchError && (
        <p className="statusMsg" style={{ color: "red" }}>
          {fetchError}
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (searchResults.length > 0 ? (
          <Feed posts={searchResults} />
        ) : (
          <p>No Posts to show</p>
        ))}
    </main>
  );
};

export default Home;
