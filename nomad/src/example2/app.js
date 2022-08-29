import { useEffect, useState } from "react";

function Hello(props) {
  useEffect(() => {
    console.log("hi");
    return () => console.log("bye");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);

  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello></Hello> : null}
      <button onClick={onClick}>{showing ? "hide" : "show"}</button>
    </div>
  );
}

export default App;
