import React from "react";
import "./DataStyle.css";
const DataDis = () => {
  return (
    <>
      <div style={{ marginLeft: "25px" }}>
        <table
          className="table-responsive"
          style={{ width: "100%", marginTop: "30px", borderSpacing: "5px" }}
        >
          <thead class="thead " style={{ height: "72px" }}>
            <tr style={{ backgroundColor: "rgb(240, 240, 242)" }}>
              <th>Rank</th>
              <th>Name</th>
              <th>Calmar Ratio</th>
              <th>Overall Profit</th>
              <th>Avg. Daily Profit</th>
              <th>Win %(Day)</th>
              <th>Price (Rs)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Selling with re entr</td>
              <td>
                <span class="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none bg-success-light rounded-lg">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="green"
                    class="w-5 h-5 mr-1"
                    style={{ width: "20px" }}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                    ></path>
                  </svg>
                  3.96
                </span>
              </td>
              <td>381845</td>
              <td>319.54</td>
              <td>0.65</td>
              <td>-</td>
              <button style={{ color: "blue" }}>
                <a
                  href="https://unfluke.in/BasicBackTest?tab=strategy-view&amp;filename=0_1708075862702_684849&amp;h=t"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ color: "blue" }}
                >
                  View
                </a>
              </button>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>strategy_name</td>
              <td>
                <span class="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none bg-success-light rounded-lg">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="green"
                    class="w-5 h-5 mr-1"
                    style={{ width: "20px" }}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                    ></path>
                  </svg>
                  3.62
                </span>
              </td>
              <td>268872.5</td>
              <td>216.31</td>
              <td>0.64</td>
              <td>500</td>
              <button style={{ color: "blue" }}>
                <span>Buy</span>
              </button>
              <div class="Toastify"></div>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Based on premium and</td>
              <td>
                <span class="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none bg-success-light rounded-lg">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="green"
                    class="w-5 h-5 mr-1"
                    style={{ width: "20px" }}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                    ></path>
                  </svg>
                  3.42
                </span>
              </td>
              <td>255425</td>
              <td>208.51</td>
              <td>0.64</td>
              <td>-</td>
              <button style={{ color: "blue" }}>
                <a
                  href="https://unfluke.in/BasicBackTest?tab=strategy-view&amp;filename=0_1708020432643_224339&amp;h=t"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ color: "blue" }}
                >
                  View
                </a>
              </button>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>strategy_name</td>
              <td>
                <span class="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none bg-success-light rounded-lg">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="green"
                    class="w-5 h-5 mr-1"
                    style={{ width: "20px" }}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                    ></path>
                  </svg>
                  3.22
                </span>
              </td>
              <td>370845</td>
              <td>303.47</td>
              <td>0.65</td>
              <td>-</td>
              <button style={{ color: "blue" }}>
                <a
                  href="https://unfluke.in/BasicBackTest?tab=strategy-view&amp;filename=0_1709565300515_86849&amp;h=t"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ color: "blue" }}
                >
                  View
                </a>
              </button>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>strategy_name</td>
              <td>
                <span class="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none bg-success-light rounded-lg">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="green"
                    class="w-5 h-5 mr-1"
                    style={{ width: "20px" }}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                    ></path>
                  </svg>
                  3.22
                </span>
              </td>
              <td>370845</td>
              <td>303.47</td>
              <td>0.65</td>
              <td>-</td>
              <button style={{ color: "blue" }}>
                <a
                  href="https://unfluke.in/BasicBackTest?tab=strategy-view&amp;filename=0_1709565616248_816433&amp;h=t"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ color: "blue" }}
                >
                  View
                </a>
              </button>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Based on premium wit</td>
              <td>
                <span class="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none bg-success-light rounded-lg">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="green"
                    class="w-5 h-5 mr-1"
                    style={{ width: "20px" }}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                    ></path>
                  </svg>
                  3.01
                </span>
              </td>
              <td>135980</td>
              <td>185.77</td>
              <td>0.49</td>
              <td>-</td>
              <button style={{ color: "blue" }}>
                <a
                  href="https://unfluke.in/BasicBackTest?tab=strategy-view&amp;filename=0_1708021661991_446710&amp;h=t"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ color: "blue" }}
                >
                  View
                </a>
              </button>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>strategy_name</td>
              <td>
                <span class="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none bg-success-light rounded-lg">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="green"
                    class="w-5 h-5 mr-1"
                    style={{ width: "20px" }}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                    ></path>
                  </svg>
                  2.76
                </span>
              </td>
              <td>267867.5</td>
              <td>218.49</td>
              <td>0.6</td>
              <td>-</td>
              <button style={{ color: "blue" }}>
                <a
                  href="https://unfluke.in/BasicBackTest?tab=strategy-view&amp;filename=0_1710748346591_466565&amp;h=t"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ color: "blue" }}
                >
                  View
                </a>
              </button>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Wait and trade_Save</td>
              <td>
                <span class="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none bg-success-light rounded-lg">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="green"
                    class="w-5 h-5 mr-1"
                    style={{ width: "20px" }}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                    ></path>
                  </svg>
                  2.62
                </span>
              </td>
              <td>178252.5</td>
              <td>161.9</td>
              <td>0.63</td>
              <td>-</td>
              <button style={{ color: "blue" }}>
                <a
                  href="https://unfluke.in/BasicBackTest?tab=strategy-view&amp;filename=0_1708020180248_819078&amp;h=t"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ color: "blue" }}
                >
                  View
                </a>
              </button>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>iron condor</td>
              <td>
                <span class="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none bg-success-light rounded-lg">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="green"
                    class="w-5 h-5 mr-1"
                    style={{ width: "20px" }}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                    ></path>
                  </svg>
                  2.44
                </span>
              </td>
              <td>176420</td>
              <td>137.51</td>
              <td>0.65</td>
              <td>-</td>
              <button style={{ color: "blue" }}>
                <a
                  href="https://unfluke.in/BasicBackTest?tab=strategy-view&amp;filename=0_1716291315324_516695&amp;h=t"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ color: "blue" }}
                >
                  View
                </a>
              </button>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>strategy_name</td>
              <td>
                <span class="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none bg-success-light rounded-lg">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="green"
                    class="w-5 h-5 mr-1"
                    style={{ width: "20px" }}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                    ></path>
                  </svg>
                  2.04
                </span>
              </td>
              <td>244555</td>
              <td>198.66</td>
              <td>0.62</td>
              <td>-</td>
              <button style={{ color: "blue" }}>
                <a
                  href="https://unfluke.in/BasicBackTest?tab=strategy-view&amp;filename=0_1711607113017_566295&amp;h=t"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ color: "blue" }}
                >
                  View
                </a>
              </button>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ display: "flex", alignContent: "center",justifyContent:"center" }}>
        <button className="btnload"
          style={{
            width: "200px",
            fontSize:"larger",
            height: "50px",
            textAlign: "center",
            backgroundColor: "blueviolet",
          }}
        >
          Load More    &darr;
        </button>
      </div>
    </>
  );
};

export default DataDis;
