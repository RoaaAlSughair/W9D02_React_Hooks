import React, {useState} from 'react';


// jsx
const App = () => {

  const [posts, setPosts] = useState([
    {
      userID: "1",
      id: "101",
      title: "Title1",
      body: "Body1",
    },
    {
      userID: "2",
      id: "103",
      title: "Title2",
      body: "Body2",
    }
  ]);

  return <div>
    <h1>Blog App</h1>

  { 
    posts.map((element) => {
    return <p key = {element.id}>{element.title}{element.body}</p>
  })
  }
    </div>;
};

export default App
