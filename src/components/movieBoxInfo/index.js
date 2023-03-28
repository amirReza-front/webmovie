import React from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
const MovieBox = (props) => {
  let { buttons, fromSingle, data, moreBtn,emptyBtn,hiddenDownloadBtn } = props;
  let navigation = useNavigate();
  return (
    <>
      {!Object.keys(data).length > 0 ? (
        <div
          className={
            fromSingle ? "movie_Introduction_single" : "movie_Introduction"
          }
        >
          <Skeleton height="40px" style={{ marginBottom: "10px" }} />
          <Skeleton style={{ width: "200px" }} />
          <Skeleton height="200px" />
          <Skeleton style={{ width: "150px", height: "38px" }} />
        </div>
      ) : (
        <div
          className={
            fromSingle ? "movie_Introduction_single" : "movie_Introduction"
          }
        >
          {data?.PostTitleEn && (
            <div className="introduc_name">{data?.PostTitleEn}</div>
          )}

          {data?.PostTitleFa && (
            <div className="introduc_name_persian">({data.PostTitleFa})</div>
          )}

          <div className="introduce_rates mb10">
            {data?.PostVoteAvrage != null ||
              ("" && (
                <div className="movie_imdb">
                  <span className="movie_imdb_svg">imdb</span>
                  {data.PostVoteAvrage} | 10
                </div>
              ))}
            {data?.PostYear && (
              <div className="movie_year">{data.PostYear}</div>
            )}
            {data?.PostRunTime && <div>{data.PostRunTime}</div>}
            {data?.Country?.map((i) => {
              return <div className="country">{i.Title}</div>;
            })}
          </div>
          <div className="gerne_con alignCenter mb10">
            {data?.Geners?.map((i, index) => {
              return (
                <div key={index} className="gerne">
                  {i.Title}
                </div>
              );
            })}
          </div>
          {data?.PostBodyEn ? (
            <div className="introduce_description ltr">{data.PostBodyEn}</div>
          ) : (
            <div className="introduce_description">{data?.PostBodyFa}</div>
          )}
          
          {emptyBtn ? null :<div className="mt10">
            {data?.StreamOnline && (
              <>
                <button className="movie_Introduction_btn movie_Introduction_type3"
                
                >
                  تماشای آنلاین
                  <svg
                    className="nav_items_svg playSingle"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
                  </svg>
                </button>
                {data.StreamOnline.length > 1 &&
                  <button
                  onClick={() => navigation(`/series-watch-online/${data.PostID}`)}
                  className="movie_Introduction_btn movie_Introduction_type4"
                  >
                    دیگر  قسمت ها
                  </button>
                }
                {moreBtn && (
                  <button
                    onClick={() => navigation(`video/${data.PostID}`)}
                    className="movie_Introduction_btn movie_Introduction_type2"
                  >
                    بیشتر
                  </button>
                )}
         
               
          
              </>
            )}
            {data?.DownloadsLink && !hiddenDownloadBtn ? <button onClick={() => navigation(`/download/${data.PostID}`)} className="movie_Introduction_btn movie_Introduction_type1">
              دانلود
            </button> : null}
          </div>}
          
        </div>
      )}
    </>
  );
};

export default MovieBox;
