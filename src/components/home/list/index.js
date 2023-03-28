import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import img from "../../../assets/images/apple.jpg";
import types from "../../../types";
import Searchbar from "./searchbar";
import GridCards from "./gridCard";
import "./index.css";
import { getQueryVariable } from "../../../common/utils";
import Navbar from "../navbar";
import MovieBox from "../../movieBoxInfo";
import footer from "../footer";
const Grid = () => {
  let mainData = useSelector((state) => state.listPageReducer);
  let data = useRef([])
  const dispatch = useDispatch();
  let obj = useRef({
    PageIndex: 0,
    PageSize: 30,
    IsList: 1,
  });
  let showSearchBar = useRef(true);
  useEffect(() => {
    checkParams();

  }, []);
  useEffect(()=>{

    console.log("data",mainData.poster.PostPoster);
  })
  function checkParams() {
    if (+getQueryVariable("Actor") > 0 || +getQueryVariable("playListID") > 0) {
      showSearchBar.current = false;
    } else {
      showSearchBar.current = true;
    }
    obj.current.YearFROM = getQueryVariable("YearFROM");
    obj.current.YearTO = getQueryVariable("YearTO");
    obj.current.RateFROM = getQueryVariable("RateFROM");
    obj.current.RateTO = getQueryVariable("RateTO");
    obj.current.Geners = getQueryVariable("Geners");
    obj.current.playListID = getQueryVariable("playListID");
    obj.current.Actor = getQueryVariable("Actor");
    // if(info.YearFROM || info.YearTO || info.RateFROM || info.RateTO || info.Geners || info.playListID || info.Actor ){

    // }
    dispatch({
      type: types.list.REQUESTED,
      data: { ...obj.current },
      grid: true,
    });
  }
  function showmore() {
    obj.current.PageIndex += 1;

    dispatch({
      type: types.list.REQUESTED,
      data: { ...obj.current },
      grid: true,
      moreBtn: true,
    });

  }


  return (
    <>
      <div className="container">
        <img
          className="main_img absolute_full"
          src={`https://cdn-1.cloudcast.dev/backdrop/1920/1080/${
            mainData.poster ? mainData.poster.PostBackdrop : "null.jpg"
          }`}
          alt=""
        />
        <div className="gradient_effect absolute_full"></div>
        <div className="section">
          <Navbar />

          <MovieBox
            data={mainData.poster  ? mainData.poster  : []}
            home={true}
            moreBtn={true}
          />
        </div>
        <Searchbar info={obj.current} showSearchBar={showSearchBar.current} />
        <div className="grid_container section">
          <div className="grid_head swiper_title">فیلم های امروز</div>
          <div className="grid_body flexStart flex_wrap">
            {  mainData.listPageData.length > 0
              ?   mainData.listPageData.map((i, j) => {
                  return <GridCards key={j} data={i} />;
                })
              : 
              <div className="not_found"> 
              <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/2x/external-no-recording-movie-theater-flaticons-lineal-color-flat-icons-2.png"/>
              <div className="not_found_text">نتیجه مورد نظر یافت نشد</div>
              </div>}
          </div>
        </div>
        <div className="Tcenter">
          {mainData.listPageData.length >= obj.current.PageSize && (
            <button className="showMore pointer" onClick={showmore}>
              نمایش بیشتر
            </button>
          )}
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Grid;
