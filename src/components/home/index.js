import React, { useEffect, useRef } from "react";
import MovieBox from "../movieBoxInfo";
import Navbar from "./navbar";
import Footer from "./footer";
import MySwiper from "../swiper";
import {useDispatch ,useSelector} from 'react-redux'
import types from "../../types";
import Grid from './list';
const HomeComponent = ({swiper}) => {
  const dispatch = useDispatch();
  let homeinfo = useSelector((state) => state.homeReducer);
  let cover = useRef()

  useEffect(()=>{
    dispatch({
      type: types.homeinfo.REQUESTED,
      data: { IsSpecialSuggestion:1 },
    });
    if(swiper == false){
      dispatch({
        type: types.list.REQUESTED,
        data: { IsList :1 , PageSize : 30},
        grid:true
      });
      // data.current.homeinfo = useSelector((state) => state.homeReducer)
    }
    // else{
    //   dispatch({
    //     type: types.homeinfo.REQUESTED,
    //     data: { IsSpecialSuggestion:1 },
    //   });
    // }
  
  },[])



  return (
    <>
      <div className="container">
        <img className="main_img absolute_full" src={`https://cdn-1.cloudcast.dev/backdrop/1920/1080/${ homeinfo.homeItem ? homeinfo.homeItem[0]?.PostBackdrop :"null.jpg" }`} alt="" />
        <div className="gradient_effect absolute_full"></div>
        <div className="section">
          <Navbar />
          
          <MovieBox data={ homeinfo.homeItem[0] ? homeinfo.homeItem[0] : []} home={true} moreBtn={true}/>
        </div>
        {swiper != false ?
        <>
        
        <MySwiper key="1" type={1} /> 
        <MySwiper key="2" type={2} />
        </>
         :
         <Grid />}
        <Footer />
      </div>
    </>
  );
};

export default HomeComponent;
