import "./App.css";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import Create from "./components/Create";
import Update from "./components/Update";
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
  let contextControl = null;
  if (mode === "WELCOME") {
    content = <Content title="WELCOME" desc="WELCOME."></Content>;
  } else if (mode === "READ") {
    let title,
      description = null;
    if (topics.length === 0) {
      setMode("WELCOME");
    } else {
      title = topics[id - 1].title;
      description = topics[id - 1].description;
      content = <Content title={title} description={description}></Content>;
      contextControl = (
        <>
          <li>
            <a
              href={"/update/" + id}
              onClick={(event) => {
                event.preventDefault();
                setMode("UPDATE");
              }}
            >
              Update
            </a>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                let nT = [...topics];

                let newDTopics = nT.filter((v) => {
                  return v.id !== id;
                });
                setTopics(newDTopics);
                setNextId(newDTopics.length + 1);
                setMode("WELCOME");
                console.log(newDTopics);
                console.log("nextid:", nextId);
                console.log("id:", id);
              }}
            >
              Delete
            </button>
          </li>
        </>
      );
    }
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
  } else if (mode === "UPDATE") {
    let _title,
      _description = null;
    _title = topics[id - 1].title;
    _description = topics[id - 1].description;
    content = (
      <Update
        title={_title}
        description={_description}
        onUpdate={(newTitle, newDescription) => {
          const newUpdateTopics = topics.map((obj) => {
            if (obj.id === Number(id)) {
              return { ...obj, title: newTitle, description: newDescription };
            }
            return obj;
          });
          setTopics(newUpdateTopics);
          setMode("READ");
          // setTopics[id - 1].description = newDescription;
        }}
      ></Update>
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
      <li>
        <a
          href="/create"
          onClick={(event) => {
            event.preventDefault();
            setMode("CREATE");
          }}
        >
          Create
        </a>
      </li>
      {contextControl}
    </div>
  );
}

export default App;
