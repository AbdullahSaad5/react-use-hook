import { Suspense, useState } from "react";
import "./App.css";
import Data from "./Data";
import DataWithUser from "./DataWithUser";

const URLs = {
  USERS: "https://jsonplaceholder.typicode.com/users",
  POSTS: "https://jsonplaceholder.typicode.com/posts",
  COMMENTS: "https://jsonplaceholder.typicode.com/comments",
};

function App() {
  const [url, setUrl] = useState(URLs.USERS);
  const [mode, setMode] = useState("normal");

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <div>
          <input
            type="radio"
            name="url"
            id="users"
            value={URLs.USERS}
            onChange={(e) => setUrl(e.target.value)}
            checked={url === URLs.USERS}
          />
          <label htmlFor="users">Users</label>
        </div>
        <div>
          <input
            type="radio"
            name="url"
            id="posts"
            value={URLs.POSTS}
            onChange={(e) => setUrl(e.target.value)}
            checked={url === URLs.POSTS}
          />
          <label htmlFor="posts">Posts</label>
        </div>
        <div>
          <input
            type="radio"
            name="url"
            id="comments"
            value={URLs.COMMENTS}
            onChange={(e) => setUrl(e.target.value)}
            checked={url === URLs.COMMENTS}
          />
          <label htmlFor="comments">Comments</label>
        </div>
      </div>

      <button
        style={{
          marginTop: "1rem",
        }}
        onClick={() => setMode(mode === "normal" ? "hook" : "normal")}
      >
        {mode === "normal" ? "Switch to use hook" : "Switch to normal"}
      </button>

      <Suspense fallback={<h1>Loading...</h1>}>
        {mode === "normal" ? <Data url={url} /> : <DataWithUser url={url} />}
      </Suspense>
    </>
  );
}

export default App;
