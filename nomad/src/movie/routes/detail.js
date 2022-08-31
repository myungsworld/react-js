import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [detail, setDetail] = useState(JSON);
  const { id } = useParams();
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setDetail(json);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <h1>
      <img src={detail.data.movie.small_cover_image}></img>
    </h1>
  );
}
export default Detail;
