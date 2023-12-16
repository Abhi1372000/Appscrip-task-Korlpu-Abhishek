import React from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";
import "./style.css";

const index = () => {
  return (
    <>
      <div className="baseContainer">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          <Main />
        </div>
      </div>
    </>
  );
};

export default index;
