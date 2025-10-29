import { React, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import OnboardPhone from "../components/login/Phone";
import OnboardVerify from "../components/login/Verify";
import OnboardProfile from "../components/login/Profile";

const LoginPage = () => {
  return (
    <div className="container-fluid min-vh-100 position-relative overflow-hidden pt-2">
      <div className="position-absolute bg-danger rounded-circle" style={{ width: '220px', height: '220px', top: '-55px', left: '-100px', opacity: 0.6 }}></div>
      <div className="position-absolute bg-danger rounded-circle" style={{ width: '220px', height: '220px', bottom: '-100px', right: '-100px', opacity: 0.6 }}></div>
      <div className="card p-2 position-relative">
        <h5>
          <img
            src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_1280.png"
            alt="logo"
            style={{ width: "50px", aspectRatio: "1", objectFit: "cover" }}
          />
          TRAYA
        </h5>
        <div className="progress position-absolute bottom-0 start-0 end-0" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: "3px" }}>
          <div className="progress-bar bg-success" style={{ width: "25%" }}></div>
        </div>
      </div>

      <div className="d-flex align-item-center" style={{ height: "calc(100vh - 100px)" }}>
        <OnboardPhone />
      </div>
    </div>
  );
};

export default LoginPage;
