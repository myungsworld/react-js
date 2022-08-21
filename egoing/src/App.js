import './App.css';
import TOC from "./components/TOC";
import Content from "./components/Content"
import Subject from "./components/Subject"


function App() {
  const topics = [
    {id : 1 , title:"Song"},
    {id : 2 , title : "Dong"},
    {id : 3 , title :"Myung"}
  ]
  return (
    <div className='App'>
      <Subject title="Web" sub="world wide web!"></Subject>
      <TOC topics={topics}></TOC>
      <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
    </div>
  );
}

export default App;
