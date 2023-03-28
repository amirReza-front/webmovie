import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import img from "../../../assets/images/sadeghi.jpg";
const Actors = ({ crews }) => {

  let [arr, setArr] = useState(checkCrows(crews) ? checkCrows(crews) : null);
  let showMore = useRef(true);
  let count = 5;
  function checkCrows(i) {
    if (i) {
      if (i.length < 5) {
        return i.slice(0, i.length);
      } else {
        return i.slice(0, 5);
      }
    } else {
      return null;
    }
  }
  function showMoreItemsActor(){
    showMore.current = false
    setArr(crews)
  }
  useEffect(()=>{
    setArr(checkCrows(crews) ? checkCrows(crews) : null)
    showMore.current = true
  },[crews])
  return (
    <>
      {crews ? (
        <div className="mt40">
          <p className="swiper_title">بازیگران</p>
          <div>
            <div className="cycle_main_parent">
              {arr?.map((i,index) => {
                return (
                  <div className="cycle_container" key={index}>
                    <img className="img_cycles" src={img} alt="" />
                    <span className="img_cycles_titles one_line_elipsis">{i.Names}</span>
                  </div>
                );
              })}
              <div
                className={`cycle_container cycle_more ${
                  showMore.current == true ? "" : "hidden"
                }`}
                onClick={showMoreItemsActor}
              >
                نمایش بیشتر
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Actors;
