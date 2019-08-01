import React from "react";

import Header from "./components/header/Header";
import Post from "./components/post/Post";

const App: React.FC = () => {
  return (
    <div className="App">
        <Header />
        <Post />
    </div>
  );
};

export default App;
