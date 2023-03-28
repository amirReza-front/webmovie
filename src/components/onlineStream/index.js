import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import types from "../../types";
import MovieBox from "../movieBoxInfo";
import Navbar from "../home/navbar";
import SerialStreamGrid from "./serialGrid";

const SeriOnlineStreamComponent = () => {
  let id = useParams().id;
  let mainData = useSelector((state) => state.singlePageReducer);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: types.singlePage.REQUESTED,
      data: { PostID: id },
    });
  }, [id]);
  return (
    <>
      <div className="container">
        <img
          className="main_img absolute_full"
          src={
            "https://cdn-1.cloudcast.dev/backdrop/1920/1080/" +
            mainData.singlePageData?.PostBackdrop
          }
          alt=""
        ></img>
        <div className="gradient_effect absolute_full"></div>
        <div className="section">
            <Navbar />

          <MovieBox
            buttons={true}
            fromSingle={false}
            data={mainData.singlePageData}
            emptyBtn={true}
          />

        </div>
        
        <SerialStreamGrid  data={mainData} Thumbnail={"https://cdn-1.cloudcast.dev/poster/250/280/"+mainData.singlePageData?.PostPoster}/>
      </div>
    </>
  );
};

export default SeriOnlineStreamComponent;
