import { useState } from "react";

function Subject(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            console.log("dskfjskdfjsdk");
            event.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

export default Subject;
