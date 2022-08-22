function TOC(props) {
  const topics = props.topics;
  const listItems = topics.map((topic) => {
    return (
      <li key={topic.id}>
        <a href={"/" + topic.id}>{topic.title}</a>
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
