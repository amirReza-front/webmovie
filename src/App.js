import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/global.css";
import "./assets/fonts/font.css";
// import SinglePage from "./components/single-video";
import HomePage from "./pages/home";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import '../node_modules/react-loading-skeleton/dist/skeleton.css'
import SeriOnlineStream from "./pages/series-watch-online";
import SinglePage from "./pages/video";
import DownloadPage from "./pages/download";
import  Grid  from "../src/components/home/list";

function App() {
  return (
    <SkeletonTheme baseColor="#1b232f" highlightColor="#444">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="video/:id" element={<SinglePage />} />
        <Route path="video" element={<SinglePage />} />
        <Route path="list" element={<Grid />} />
        <Route path="series-watch-online/:id" element={<SeriOnlineStream />} />
        <Route path="download/:id" element={<DownloadPage />} />

      </Routes>
    </BrowserRouter>

    </SkeletonTheme>
    
  );
}

export default App;
