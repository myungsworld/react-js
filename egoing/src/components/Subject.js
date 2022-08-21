import { useState } from "react";

function Subject(props) {
    return (
      <header>
        <h1>
          <a href="/">{props.title}</a>
        </h1>
      </header>
    );
  }

export default Subject;  