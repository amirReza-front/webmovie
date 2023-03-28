import React, { useEffect, useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import types from "../../types";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import SwiperSkeleton from "./swiperSkletion";

const MySwiper = ({ type,Noloop }) => {
  //type 1 istrendweekly
  //type 2 IsUpComming
  //type 3 PostIDRelative
  //type 4 Crews
  let id =  useParams().id
  const dispatch = useDispatch();
  let mainData = useSelector((state) => state);
  function controllType(type) {
    switch (type) {
      case 1:
        dispatch({
          type: types.movieList.IsTrendWeekly.REQUESTED,
          data: { IsTrendWeekly: 1 },
        });
        return;
      case 2:
        dispatch({
          type: types.movieList.IsUpComming.REQUESTED,
          data: { IsUpComming: 1 },
        });
        return;
      case 3:
        dispatch({
          type: types.movieList.PostIDRelative.REQUESTED,
          data: { PostIDRelative:id },
        });
        return;
        case 4:
          dispatch({
            type: types.singlePage.REQUESTED,
            data: { PostID:id},
        })
        return;
      default:
        return;
    }
  }

  useEffect(() => {
    controllType(type);
 
  },[id]);
  return (
    <>
      <div className="siper-con-custom">
        <p className="swiper_title">
          {type == 1 ? "بهترین های هفته" :type == 2 ? "بزودی" :type == 3 ? "مرتبط" :"نقش آفرینان"  }
        </p>

        <Swiper
          loop = {Noloop ? false : true}
          slidesPerView={11.5}
          spaceBetween={15}
          className="mySwiper"
        >
          {type == 1 ? (
            mainData.swiperReducer.movieList.IsTrendWeekly.data.length > 0 ? (
              mainData.swiperReducer?.movieList?.IsTrendWeekly?.data?.map((i,index) => {
                return (
                  <SwiperSlide key={index} id={i.PostID}>
                    <Link to={`/video/${i.PostID}`}>
                      <img
                        className="swiper_img"
                        src={
                          "https://cdn-1.cloudcast.dev/Poster/250/180/" +  `${i.PostPoster ? i.PostPoster : "null.jpg"}`
                          
                        }
                        alt=""
                      />
                    </Link>
                  </SwiperSlide>
                );
              })
            ) : (
              <SwiperSkeleton />
            )
          ) : type == 2 ? (
            mainData.swiperReducer.movieList.IsTrendWeekly.data.length > 0 ? (
              mainData.swiperReducer?.movieList?.IsUpComming?.data?.map((i,index) => {
                return (
                  <SwiperSlide key={index} id={i.PostID}>
                    <Link to={`/video/${i.PostID}`}>
                      <img
                        className="swiper_img"
                        src={
                          "https://cdn-1.cloudcast.dev/Poster/250/180/" + `${i.PostPoster ? i.PostPoster : "null.jpg"}`
                        
                        }
                        alt=""
                      />
                    </Link>
                  </SwiperSlide>
                );
              })
            ) :   <SwiperSkeleton />
          ) : type == 3 ? 
          mainData.swiperReducer.movieList.PostIDRelative.data.length > 0 ? (
            mainData.swiperReducer?.movieList?.PostIDRelative?.data?.map((i,index) => {
              return (
                <SwiperSlide key={index} id={i.PostID}>
                  <Link to={`/video/${i.PostID}`}>
                    <img
                      className="swiper_img"
                      src={
                        "https://cdn-1.cloudcast.dev/Poster/250/180/" +  `${i.PostPoster ? i.PostPoster : "null.jpg"}`
                 
                      }
                      alt=""
                    />
                  </Link>
                </SwiperSlide>
              );
            })
          ):<SwiperSkeleton />
           :  type == 4 ? 
           mainData.singlePageReducer.singlePageData?.Crew?.length > 0 ? (
            mainData.singlePageReducer.singlePageData.Crew.map((i,index) => {
               return (
                 <SwiperSlide key={index} id={i.ActorID}>
                   <Link to={`/list/?Actor=${i.ActorID}`}>
                     <img
                       className="swiper_img"
                       src={
                         `https://cdn-1.cloudcast.dev/Actors/250/180/${i.IMDBID}.jpg`
                  
                       }
                       alt=""
                     />
                     <div className="actor_titles">{i.Names}</div>
                   </Link>
                 </SwiperSlide>
               );
             })
           ):<SwiperSkeleton />
            : null}
        </Swiper>
      </div>
    </>
  );
};
export default MySwiper ;
