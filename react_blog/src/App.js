import React, {useState} from 'react';


// jsx
const App = () => {

  const [posts, setPosts] = useState([
    {
      userID: "1",
      id: "101",
      title: "Title",
    }, 
    {
      body: "Body",
    }
  ]);

  return <div>
    <h1>Blog App</h1>
    </div>;
};

export default App
