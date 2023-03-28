import React from "react";
import svgs from "../../../assets/svg";
import './index.css'
const Navbar = () => {
    return ( 
        <div className="home_nav flexSpace">

        <div className="nav_items nav_activ pointer">
            {svgs.homeIcon}
            <span className="nav_items_txt">صفحه اصلی</span>
        </div>
        <div className="nav_items  pointer">
            {svgs.goodMovies}
            <span className="nav_items_txt">فیلم هایی که باید دید</span>
        </div>
        <div className="nav_items pointer">
            {svgs.badMovies}
            <span className="nav_items_txt ">فیلم هایی که نباید دید</span>
        </div>
        <div className="nav_items pointer ">
            {svgs.option}
            <span className="nav_items_txt">فیلم های آینده</span>
        </div>
        <div className="nav_items pointer ">
            {svgs.profile}
            <span className="nav_items_txt">لیست های پیشنهادی</span>
        </div>

    </div>

     );
}
 
export default Navbar;