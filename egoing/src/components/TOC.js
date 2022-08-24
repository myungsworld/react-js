function TOC(props) {
  const topics = props.topics;
  const listItems = topics.map((topic) => {
    return (
      <li key={topic.id}>
        <a
          id={topic.id}
          href={"/" + topic.id}
          onClick={(event) => {
            event.preventDefault();
            console.log("TOC id: ", event.target.id);
            props.onChangeMod(Number(event.target.id));
          }}
        >
          {topic.title}
        </a>
      </li>
    );
  });

  return (
    <nav>
      <ul>{listItems}</ul>
    </nav>
  );
}

export default TOC;
