import React, { useState } from "react";

const Home = () => {
  const [words, setWords] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    setWords(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={words}
          onChange={onChange}
          type="text"
          placeholder="what's on your mind?"
          maxLength={120}
        />
        <input type="submit" />
      </form>
    </div>
  );
};
export default Home;
