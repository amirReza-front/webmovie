import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import types from '../../types';
import Navbar from '../home/navbar';
import MovieBox from '../movieBoxInfo';
import Footer from '../home/footer'
import"./index.css"
import { useParams } from 'react-router';
const DownloadComponent = () => {
    let id = useParams().id
    let mainData= useSelector(state => state.singlePageReducer)
    let dispatch = useDispatch()
    useEffect(()=>{
        dispatch({
            type: types.singlePage.REQUESTED,
            data: { PostID:id},
        })
    },[])
    console.log("mainData",mainData.singlePageData.DownloadsLink?.length)
    return (<>
        <div className="container">
          <img className="main_img absolute_full fixed" src={`https://cdn-1.cloudcast.dev/backdrop/1920/1080/${mainData.singlePageData?.PostBackdrop ? mainData.singlePageData?.PostBackdrop : "null.jpg"}` } alt="" />
          <div className="gradient_effect absolute_full fixed"></div>
          <div className="section">
            <Navbar />
            
            <MovieBox buttons={true} fromSingle={false} data ={mainData.singlePageData} hiddenDownloadBtn = {true} moreBtn={false}/>
          </div>
          <div className='download_container'>
            <div className='dl_links_title'>لینک های دانلود</div>
            {mainData.singlePageData.DownloadsLink?.length > 0 ? 
            mainData.singlePageData.DownloadsLink.map((i,j)=>{
                return(<div className='download_list' key={j}>
                    <div className='alignCenter flex_space'>
                        <div className='web_title'>{i.SiteName}</div>
                        <a className='web_dl_btn' href={i.URLDownload}>دانلود از {i.SiteName}</a>
                    </div>
            
                <div className='web_date'>{new Date(i.LastReadLink).toLocaleDateString('fa-IR')}</div>

            </div>)
            })
        :null}
                
          </div>
          <Footer />
        </div>
      </> );
}
 
export default DownloadComponent;