/* eslint-disable react/prop-types */
// import React from 'react';
import { Link } from "react-router-dom";
import styles from "./performancecard.module.css";
import { MdOutlineInsertChart } from "react-icons/md";
import { Doughnut } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  CategoryScale,
  Legend,
  Title,
  Tooltip,
} from "chart.js";

Chart.register(ArcElement, CategoryScale, Legend, Title, Tooltip);

const PerformanceCard = ({
  logo,
  completionPercentage,
  componentName,
  componentDesc,
  path,
  logo2,
  children,
}) => {
  // const completed = completionPercentage;
  const remaining = 100 - completionPercentage;

  const data = {
    labels: ["Red"],
    datasets: [
      {
        data: [completionPercentage, remaining],
        backgroundColor: ["#0148b7", "#dddddd"],
        // borderColor: ["rgba(255, 99, 132, 1)", "transparent"],
        // borderWidth: 1,
        hoverBackgroundColor: ["#0148b7", "#dddddd"],
        // hoverBorderColor: ["rgba(255, 99, 132, 1)", "transparent"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        enabled: false,
        display: false,
      },
      title: {
        display: false,
        text: "Doughnut Chart",
      },
      tooltip: {
        enabled: false,
      },
    },
    cutout: "60%",
    animation: {
      duration: 0, // General animation time
    },
  };

  return (
    <div
      className={`${styles.body} p-4 rounded-xl flex items-center justify-between bg-white`}
    >
      <div
        className={`${styles.compnentContainer} flex items-center gap-3 w-[70%]`}
      >
        {logo && <img className={`w-[30%]`} src={logo} alt="logo-pic" />}
        {completionPercentage ? (
          <div className={`w-[20%]`}>
            <Doughnut
              height={"100%"}
              width={"100%"}
              data={data}
              options={options}
            />
          </div>
        ) : null}
        <div className={`text-sm text-left`}>
          <h1 className={`text-[#666666] poppins-regular`}>{componentName}</h1>
          <h1 className={`text-[#0148b7] poppins-bold`}>{componentDesc}</h1>
        </div>
        {children}
      </div>
      <div className={`flex justify-end w-[30%]`}>
        {path && (
          <Link className={`${styles.advancedPageLink}`} to={path}>
            <MdOutlineInsertChart />
          </Link>
        )}
        {logo2 && (
          <img className={`w-[30%]`} src={logo2} alt="second-logo-pic" />
        )}
      </div>
    </div>
  );
};

export default PerformanceCard;
