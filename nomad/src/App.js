import Button from "./Button";
import PropTypes from "prop-types";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  useEffect(() => {
    console.log("run only once");
  }, []);
  useEffect(() => {
    console.log("run only keyword changes");
  }, [keyword]);
  useEffect(() => {
    console.log("run only counter changes");
  }, [counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="search here..."
      ></input>
      <h1 className={styles.title}>{counter}</h1>
      <Button title={"++"} onClick={onClick}></Button>
    </div>
  );
}

export default App;
