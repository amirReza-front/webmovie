import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import types from '../../types';
import MovieBox from '../movieBoxInfo';
import Navbar from '../home/navbar';
import MySwiper from '../swiper';
import './index.css'
import {Helmet} from "react-helmet";
const SinglePageComponent = (props) => {
    let id = useParams().id
    let mainData= useSelector(state => state.singlePageReducer)
    let dispatch = useDispatch()
    useEffect(()=>{
        dispatch({
            type: types.singlePage.REQUESTED,
            data: { PostID:id},
        })
    },[id])
    return ( 
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>{mainData.singlePageData.PostTitleEn}</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
    </Helmet>
    <div className='container'>
        <img className="main_img absolute_full" src={'https://cdn-1.cloudcast.dev/backdrop/1920/1080/' + mainData.singlePageData?.PostBackdrop } alt=""></img>
        <div className="gradient_effect absolute_full"></div>
        <Navbar />
         <div className='single_page_bottom'>
            <MovieBox buttons={true} fromSingle={true} data ={mainData.singlePageData} moreBtn={false}/>
            <div style={{width:"50%"}}>
                 <MySwiper Noloop={true} type={4} />
                 <MySwiper type={3} />
                {/* <Actors crews={mainData.singlePageData?.Crew}/> */}
            </div>
         </div>

    </div>
    </>
     );
}
 
export default SinglePageComponent;