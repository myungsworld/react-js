import "./App.css";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import Create from "./components/Create";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    { id: 1, title: "Title1", description: "description1" },
    { id: 2, title: "Title2", description: "description2" },
    { id: 3, title: "Title3", description: "description3" },
  ]);

  let content = null;
  if (mode === "WELCOME") {
    content = <Content title="WELCOME" desc="WELCOME."></Content>;
  } else if (mode === "READ") {
    let title,
      description = null;
    title = topics[id - 1].title;
    description = topics[id - 1].description;
    content = <Content title={title} description={description}></Content>;
  } else if (mode === "CREATE") {
    content = (
      <Create
        onCreate={(_title, _description) => {
          const newTopic = {
            id: nextId,
            title: _title,
            description: _description,
          };
          let newTopics = [...topics];
          newTopics.push(newTopic);
          setNextId(nextId + 1);
          setTopics(newTopics);
          setId(nextId);
          setMode("READ");
        }}
      ></Create>
    );
  }

  return (
    <div className="App">
      <Subject
        title="Web"
        onChangeMode={() => {
          setMode("WELCOME");
        }}
      ></Subject>
      <TOC
        topics={topics}
        onChangeMod={(_id) => {
          setMode("READ");
          setId(_id);
        }}
      ></TOC>
      {content}
      <a
        href="/create"
        onClick={(event) => {
          event.preventDefault();
          setMode("CREATE");
        }}
      >
        Create
      </a>
    </div>
  );
}

export default App;
