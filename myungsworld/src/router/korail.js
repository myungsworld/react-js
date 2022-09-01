import { useEffect, useState } from "react";

function Korail() {
  const [loading, setLoading] = useState(true);
  const [trainInfos, setTrainInfos] = useState([]);
  const getTrainInfos = async () => {
    const json = await (
      await fetch(
        "https://apis.data.go.kr/1613000/TrainInfoService/getStrtpntAlocFndTrainInfo?serviceKey=LqjEgNY88C81XaVcG1Ra4a4CQnlURRK%2F1CAITXh0eURu2E2lTMHxSgxVx0EYtP3UjOKMC5p87nRKfga9hvW43g%3D%3D&pageNo=1&numOfRows=10&_type=json&depPlaceId=NAT010000&arrPlaceId=NAT011668&depPlandTime=20211201&trainGradeCode=00"
      )
    ).json();
    setTrainInfos(json.response.body.items.item);
    setLoading(false);
    console.log(json);
  };
  useEffect(() => {
    getTrainInfos();
  }, []);

  return (
    <div>
      <div>
        {loading
          ? "대구 부산 서울 부산 찍고 찍고"
          : trainInfos.map((train) => <p>{train.adultcharge}</p>)}{" "}
      </div>
      <button
        onClick={() => {
          console.log(trainInfos);
        }}
      >
        디버깅
      </button>
    </div>
  );
}

export default Korail;
