import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getQueryVariable} from '../../../../common/utils'
import types from '../../../../types';
import './index.css'
import SuggestInput from './suggestInput';
const Searchbar = ({info,showSearchBar}) => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.genrs)
    let form = useRef(null)

useEffect(()=>{
    dispatch({type:types.Geners.REQUESTED})
},[])
function suggetedMovie(e){
    info.Keyword = e.target.value
    info.PageIndex = 0
    setTimeout(()=>{
        dispatch({
            type: types.list.REQUESTED,
            data: {...info},
            grid:true
          });
    },2000)
}

function submitForm(e){
    e.preventDefault();
    
    let RateFROM = form.current.querySelector(".RateFROM").value
    let RateTO = form.current.querySelector(".RateTO").value
    // let Country = form.current.querySelector(".Country").value
    let IMDBID =  form.current.querySelector(".IMDBID").value
    let Geners =  form.current.querySelector(".Geners").value
    let Keyword = form.current.querySelector(".Keyword").value
    info.Keyword = Keyword
    info.Geners = Geners
    info.RateFROM = RateFROM
    info.RateTO = RateTO
    info.PageIndex = 0
    // info.Country = Country
    info.IMDBID = IMDBID
    dispatch({
        type: types.list.REQUESTED,
        data: {...info},
        grid:true
      });
}

    return ( <>{
        showSearchBar ?  <form ref ={form} onSubmit={submitForm} className='searchbar'>
        <div className='justFlex input_wrapper flex_wrap'>
            <div className='input_wrapper_item alignCenter'>
                <label className='input_wrapper_item_label'>نوع</label>
                <div className='seri_toggle'>
                    <div className='seri_toggle_movie seri_toggle_avtive'>همه</div>
                    <div className='seri_toggle_movie'>فیلم</div>
                    <div className='seri_toggle_serial'>سریال</div>
                </div>

            </div>
            {/* <SuggestInput /> */}
            <div className="input_wrapper_item alignCenter">
        <label className="input_wrapper_item_label">عنوان</label>
        <input className="input_wrapper_item_input Keyword" onChange={suggetedMovie} placeholder="lorem" />
      </div>
            {/* <div className='input_wrapper_item alignCenter'>
                <label className='input_wrapper_item_label'>کشور</label>
                <input className='input_wrapper_item_input Country'  placeholder='lorem'  />

            </div> */}
            <div className='input_wrapper_item alignCenter'>
                <label className='input_wrapper_item_label'>کد IMDB</label>
                <input className='input_wrapper_item_input IMDBID' placeholder='lorem'  />

            </div>
            <div className='input_wrapper_item alignCenter year_part'>
                <label className='input_wrapper_item_label'>سال</label>
                <input className='input_wrapper_item_input YearFROM' defaultValue={getQueryVariable("YearFROM") ? getQueryVariable("YearFROM") : ""} placeholder='از سال'  />
                <span className='spx4r'>تا</span>
                <input className='input_wrapper_item_input' defaultValue={getQueryVariable("YearTO") ? getQueryVariable("YearTO") : ""} placeholder='تا سال'  />

            </div>
            <div className='input_wrapper_item alignCenter year_part'>
                <label className='input_wrapper_item_label'>امتیاز</label>
                <input className='input_wrapper_item_input RateFROM' defaultValue={getQueryVariable("RateFROM") ? getQueryVariable("RateFROM") : ""}  placeholder='از امتیاز 0'  />
                <span className='spx4r'>تا</span>
                <input className='input_wrapper_item_input RateTO' defaultValue={getQueryVariable("RateTO") ? getQueryVariable("RateTO") : ""}  placeholder='تا امتیاز 10'  />

            </div>
            <div className='input_wrapper_item alignCenter drop_down_part'>
                <label className='input_wrapper_item_label'>ژانر</label>
                {/* <input className='input_wrapper_item_input' placeholder='lorem'  /> */}
                {data.Genrs.length > 0 ?
                     <select className='drop_down_part_select Geners' name="list" id="personlist" defaultValue={getQueryVariable("Geners") ? getQueryVariable("Geners") : ""}>
                        <option key={"-1"} value={""}>همه</option>
                       {data.Genrs.map((i,j)=>{
                            return  <option key={j} value={i.Generid}>{i.GenerFa}</option>
                        })}
                        </select>
                
               
             
                : null}
               

            </div>

        </div>
        <div className='searchbar_bottom flexSpace'>
           
            <button className='search-btn'>
            جستجو
        </button>

        </div>
        

    </form> :null
    }
  
    </> );
}
 
export default Searchbar;