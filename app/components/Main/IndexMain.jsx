import Filterbar from "../Filterbar/Filterbar";
import Main from "./Main";
import Sidebar from "./Sidebar";

import "./style.css";

const IndexMain = () => {
  return (
    <>
      <div className="mainContentContainer">
        <hr />
        <div>
          <Filterbar />
        </div>
        <div className="baseContainer">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="main">
            <Main />
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexMain;
