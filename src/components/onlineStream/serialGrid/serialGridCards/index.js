import React from 'react'
import svgs from '../../../../assets/svg';
import './index.css'
const SerialGridCards = ({data,Thumbnail}) => {
    return ( <>
         <a target="_blank" href={`enama.ir/video/${data.JPostID}`} className='grid_body_item2 flexCenter serial_stream relative'>
            <img className='SerialGridCards_Thumbnail' src={Thumbnail}/>
            <div className='grid_body_item2_cover'></div>
            <div className='grid_body_item2_title'>{` فصل ${data.Season} قسمت ${data.Episode}`}</div>
                <span className='grid_body_item2_episode'>{data.Episode}</span>
                {data.IsFarsi == 1 ? <span className='grid_body_item2_duble'>دوبله</span> : <span className='grid_body_item2_en'>زبان اصلی</span>}
            </a>
    </> );
}
 
export default SerialGridCards;