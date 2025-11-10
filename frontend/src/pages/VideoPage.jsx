import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole, faAnglesRight, faBrain, fa1, fa2, fa3, faQuestion, faHouse, faBoxOpen, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faDrupal, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const VideoPage = () => {
  return (
    <>
    <Header/>
      <div className="container pt-3" style={{minHeight: "100vh"}}>
        coming soon...
        <div className="row align-items-center d-none">
          <div className="col-sm-4 col-6 py-2">
            <video style={{width: "100%", aspectRatio: "16/9"}} controls>
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-sm-4 col-6 py-2">
            <video style={{width: "100%", aspectRatio: "16/9"}} controls>
              <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-sm-4 col-6 py-2">
            <video style={{width: "100%", aspectRatio: "16/9"}} controls>
              <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-sm-4 col-6 py-2">
            <video style={{width: "100%", aspectRatio: "16/9"}} controls>
              <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-sm-4 col-6 py-2">
            <video style={{width: "100%", aspectRatio: "16/9"}} controls>
              <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-sm-4 col-6 py-2">
            <video style={{width: "100%", aspectRatio: "16/9"}} controls>
              <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-sm-4 col-6 py-2">
            <video style={{width: "100%", aspectRatio: "16/9"}} controls>
              <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-sm-4 col-6 py-2">
            <video style={{width: "100%", aspectRatio: "16/9"}} controls>
              <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-sm-4 col-6 py-2">
            <video style={{width: "100%", aspectRatio: "16/9"}} controls>
              <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-sm-4 col-6 py-2">
            <video style={{width: "100%", aspectRatio: "16/9"}} controls>
              <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-sm-4 col-6 py-2">
            <video style={{width: "100%", aspectRatio: "16/9"}} controls>
              <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-sm-4 col-6 py-2">
            <video style={{width: "100%", aspectRatio: "16/9"}} controls>
              <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  );
};

export default VideoPage;
