import style from "./roadMap.module.css";
import { useEffect, useState } from "react";
import RoadMapCard from "../commondcomponent/roadMapCard";
import { useNavigate, useNavigation } from "react-router-dom";
import { getDetailRoadMapCard, getRoadMapCard } from "../../apis/api";
export default function RoadMapPageIndex() {
  const [over, setOver] = useState(false);
  const [over1, setOver1] = useState(false);
  const [roadMapList, setRoadMapList] = useState([]);
  // const navigation = useNavigation();
  let roadMap;
  const mouseOver = () => {
    setOver(true);
  };
  const mouseLeave = () => {
    setOver(false);
  };
  const mouseOver1 = () => {
    setOver1(true);
  };
  const mouseLeave1 = () => {
    setOver1(false);
  };

  const navigate = useNavigate();
  const clickWrite = () => {
    navigate("/createRoadmap");
  };

  useEffect(() => {
    roadMap = async () => {
      const result = await getRoadMapCard().then((res) => res);
      // console.log(result.data);
      setRoadMapList(result.data);
    };
    roadMap();
  }, []);

  const detailRoadMap = () => {
    // navigation(`/roadMapDetail/${index}`);
    console.log("dds");
    // const { index } = e.target;
    // console.log(index);
    // const detailRoadMapCard = async () => {
    //   await getDetailRoadMapCard(index).then((res) => {
    //     console.log(res);
    //   });
    // };
    // detailRoadMapCard();
  };
  return (
    <>
      <div className={style.roadMapContainerTitle}>
        <div className={style.filter}>
          <div className={style.filterBox}>
            <p
              onMouseOver={mouseOver}
              onMouseLeave={mouseLeave}
              classNameName={over ? "change" : ""}
            >
              recent
            </p>
            <p
              onMouseOver={mouseOver1}
              onMouseLeave={mouseLeave1}
              classNameName={over1 ? "change" : ""}
            >
              popular
            </p>
            <select>
              <option value="">weekly</option>
              <option value="">monthly</option>
            </select>
          </div>
          <hr />
        </div>
        <h1>RoadMap</h1>
        <button className={style.writeBtn} onClick={clickWrite}>
          Write
        </button>
      </div>
      <div className={style.postListBox}>
        {/* <!-- 포스트라이드 --> */}
        <div className={style.roadMapSlide}>
          <ul className={style.roadMapListWrap}>
            {/* <!-- 포스트카드 --> */}
            {roadMapList.map((v, index) => (
              <RoadMapCard v={v} index={index} onClick={detailRoadMap} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
