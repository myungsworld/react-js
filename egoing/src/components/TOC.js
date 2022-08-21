function TOC(props) {
  const lis = []
  const topics = props.topics
  const listItems = topics.map((topic) => {
    lis.push(<li key={topic.id}><a href={"/"+topic.id}>{topic.title}</a></li>)
  })
  return (
      <nav>
        <ul>
          {lis}
        </ul>
      </nav> 
    );
  }

export default TOC;  