import React from 'react'
import svgs from '../../../assets/svg';
import SerialGridCards from './serialGridCards'
import './index.css'
import { Link, useNavigate } from 'react-router-dom';
const SerialStreamGrid = ({data,Thumbnail}) => {
    let prevSeason 
    let navigation = useNavigate();
    // console.log("data",data)
    return ( 
    <div className='relative'>
    <button onClick={()=> navigation(-1)} className='btn_back'>بازگشت</button >
        {data.singlePageData.StreamOnline?.map((i,j)=>{
                    
                    if(prevSeason != i.Season){
                        prevSeason = i.Season
                        let filterBySeson = data.singlePageData.StreamOnline.filter((item)=> item.Season == i.Season)
                        
                       return(
                        <div className='relative' key={j}>
                        <div className='season_title'>فصل {i.Season}</div>
                            <div className='grid_body2 justFlex flex_wrap section '>
                            {filterBySeson.map((i,j)=>{
                                  return <SerialGridCards key={j} Thumbnail={Thumbnail}data={i}/>
                            })}
                               
                            </div>
                        </div> 
                       )
                    }else{
                        prevSeason = i.Season
                    }
                    // return <SerialGridCards key={j} Thumbnail={Thumbnail}data={i}/>
                })}
     
    </div>

    
    
    );
}
 
export default SerialStreamGrid;