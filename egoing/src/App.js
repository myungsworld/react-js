import './App.css';

function Subject(props) {
  return (
    <header>
      <h1>{props.title}</h1>
      {props.sub}
    </header>
  );
}

function TOC() {
  return (
    <nav>
      <ul>
        <li><a href="1.html">HTML</a></li>
        <li><a href="2.html">CSS</a></li>
        <li><a href="3.html">JavaScript</a></li>
      </ul>
    </nav> 
  );
}

function Content(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.desc}
    </article>
  );
}

function App() {
  return (
    <div className='App'>
      <Subject title="React" sub="world wide web!"></Subject>
      <TOC></TOC>
      <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
    </div>
  );
}

export default App;
