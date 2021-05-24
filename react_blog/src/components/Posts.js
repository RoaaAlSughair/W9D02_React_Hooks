import React, {useState} from 'react';


// jsx
const Posts = () => {

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

  const [userID, setUserID] = useState("");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return <div>

  { 
    posts.map((element) => {
    return <p key = {element.id}>{element.title}{element.body}</p>
  })
  }

  <input type="text" placeholder="Enter userID here" onChange= {(e) => {setUserID(e.target.value)}}/>
  <input type="text" placeholder="Enter id here" onChange= {(e) => {setId(e.target.value)}}/>
  <input type="text" placeholder="Enter title here" onChange= {(e) => {setTitle(e.target.value)}}/>
  <input type="text" placeholder="Enter body here" onChange= {(e) => {setBody(e.target.value)}}/>
  <button>Create new post</button>

    </div>;
};

export default Posts