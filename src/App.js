import React from "react";
import './App.css';
import brand_img from "./Image/cropped_unfluke_full.148e5bfc.png";
import noti_img from "./Image/bell-icon.d99e8edc.png";
import profile_img from "./Image/profile.jpg";
import coin_img from "./Image/coin.9bfaef7e.jpeg";
import Card from "./Card";
import DataDis from "./DataDis";

function App() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-secondary"
        style={{ fontSize: "20px", fontFamily: "" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {/* D:\Project_react\dashboard\public\Image\cropped_unfluke_full.148e5bfc.png
    public\Image\cropped_unfluke_full.148e5bfc.png */}
            <img src={brand_img} height="35" width="120" alt="brandimg" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active active"
                  aria-current="page"
                  href="#"
                >
                  LeaderBoard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  HistoricalChart
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link active dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  HistoricalTrading
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Trading
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Order
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                    Holding
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Position
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active active" href="#">
                  Scanners
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active active" href="#">
                  Alerts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  BasicBacktest
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Pricing
                </a>
              </li>
            </ul>
            <div style={{ marginLeft: "12px" }}>
              <ul
                className="navbar-nav me-auto mb-2 mb-lg-0"
                style={{ gap: "60px" }}
              >
                <a href="#">
                  {" "}
                  <li className="nav-item">
                    <img src={noti_img} width={40} height="30" />
                  </li>
                </a>
                <a href="#">
                  {" "}
                  <li className="nav-item">
                    <img src={coin_img} width={40} height="30" />
                  </li>
                </a>
                <a href="#">
                  {" "}
                  <li className="nav-item">
                    <img src={profile_img} width={40} height="30" />
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      
      {/* <div style={{ marginTop: "30px" }}>
        <Card />
      </div> */}
      {/* data display */}
      <div  style={{display:'flex' ,padding:'10px', justifyContent:"center"}} >
        <img src="https://c0.wallpaperflare.com/preview/227/603/787/arrow-bank-banking-bar.jpg"style={{width:'40%', height:"300px", padding:"15px", borderRadius:'30px'}}/>
        <img src="https://c1.wallpaperflare.com/preview/634/496/50/refugees-economic-migrants-financial-equalization-help.jpg"  style={{width:'40%', height:"300px", padding:"15px", borderRadius:'30px' }} />
        </div>
        {/* <div className="continer">
        <h1 className="leaderheading"
          // style={{ textAlign: "center", marginTop: "5px", marginBottom: "7px", fontFamily:'monospace' }}
        >
          {" "}
          LeaderBoard
        </h1>
      </div> */}
      <DataDis/>
    </>
  );
}

export default App;
