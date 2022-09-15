import { Link } from "react-router-dom";

function Data({ id, coverImg, title, summary }) {
  return (
    <ul>
      <img src={coverImg}></img>
      <h2>
        <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link>
      </h2>
      <div>{summary}</div>
    </ul>
  );
}

export default Data;
