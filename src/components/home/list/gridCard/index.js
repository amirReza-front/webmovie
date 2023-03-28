import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const GridCards = ({ data }) => {
  return (
    <Link to={`/video/${data.PostID}`} className={`grid_body_item  flexStart ${data.PostStatus == "Movie" && "hiddeen_overflow"}`}>
        {data.PostStatus == "Movie" ? <> <img
          src={"https://cdn-1.cloudcast.dev/Poster/250/250/" +  `${data.PostPoster ? data.PostPoster : "null.jpg"}`}
        />
        <p className="card_main_title">{data.PostTitleEn}</p>
        <div className="card_overly">
          <p className="card_description">{data.PostBodyEn}</p>
          <div className="card_rating">
            <span className="card_imdb">IMDB </span>
            {data.PostVoteAvrage}
          </div>
        </div></>
         : 
         <>
         <div className="back_card back_card1">
        <img
          src={"https://cdn-1.cloudcast.dev/Poster/250/250/" +  `${data.PostPoster ? data.PostPoster : "null.jpg"}`}
        />
        
      </div>
      <div className="back_card back_card2 ">
        <img
          src={"https://cdn-1.cloudcast.dev/Poster/250/250/" +  `${data.PostPoster ? data.PostPoster : "null.jpg"}`}
        />
        
      </div>
      <div className="main_cover fullWidth">
        <img
          src={"https://cdn-1.cloudcast.dev/Poster/250/250/" +  `${data.PostPoster ? data.PostPoster : "null.jpg"}`}
        />
        <p className="card_main_title">{data.PostTitleEn}</p>
        <div className="card_overly">
          <p className="card_description">{data.PostBodyEn}</p>
          <div className="card_rating">
            <span className="card_imdb">IMDB </span>
            {data.PostVoteAvrage}
          </div>
        </div>
      </div>
        </>}
      
     
    </Link>
  );
};

export default GridCards;
