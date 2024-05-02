// import React from 'react';
import "../../../../styles/global.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProfile } from "../../../../features/fetchProfile/profileSlice";
import { FaArrowLeft } from "react-icons/fa";
import PerformanceContainer from "../../profileComponents/performanceContainer/PerformanceContainer";
import PerformanceCard from "../../../../components/performanceCard/PerformanceCard";
import gradeImage from "../../../../assets/images/gradeImage.png";
import pointsImage from "../../../../assets/images/pointsImage.png";
import attendanceImage from "../../../../assets/images/attendanceImage.png";
import activeImage from "../../../../assets/images/activeImage.png";

import styles from "./detailedanalytics.module.css";

const DetailedAnalytics = () => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile.data);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  return (
    <div className={`${styles.body} p-4`}>
      <div className={`flex items-center gap-3`}>
        <div
          onClick={() => window.history.back()} //this is the function to go to the previous page
          className={`${styles.iconContainer} duration-200 cursor-pointer flex items-center justify-center p-2 rounded-[50%] bg-white`}
        >
          <FaArrowLeft />
        </div>
        <h1 className={`text-2xl poppins-semibold`}>
          {profileData?.name ?? "Patrick Dash"}&apos;s Detailed Analytics
        </h1>
      </div>
      <div>
        <PerformanceContainer
          heading={
            profileData.name
              ? `${profileData.name}'s Performance`
              : "Patrick's Performance"
          }
          gridCols={"grid-cols-4"}
        >
          <PerformanceCard
            logo={gradeImage}
            componentName={"Grade"}
            componentDesc={"A1"}
          />
          <PerformanceCard
            logo={pointsImage}
            componentName={"Points"}
            componentDesc={"342"}
          />
          <PerformanceCard
            logo={attendanceImage}
            componentName={"Attendance"}
            componentDesc={"82%"}
          />
          <PerformanceCard
            logo={activeImage}
            componentName={"Active Hours"}
            componentDesc={"164"}
          />
        </PerformanceContainer>
        <PerformanceContainer heading={"My Visit"} gridCols={"grid-cols-4"}>
          <PerformanceCard
            completionPercentage={87.15}
            componentName={"English"}
            componentDesc={87.15}
          />
          <PerformanceCard
            completionPercentage={87.15}
            componentName={"Hindi"}
            componentDesc={87.15}
          />
          <PerformanceCard
            completionPercentage={87.15}
            componentName={"Physics"}
            componentDesc={87.15}
          />
          <PerformanceCard
            completionPercentage={87.15}
            componentName={"Chemistry"}
            componentDesc={87.15}
          />
          <PerformanceCard
            completionPercentage={87.15}
            componentName={"Science"}
            componentDesc={87.15}
          />
          <PerformanceCard
            completionPercentage={87.15}
            componentName={"History"}
            componentDesc={87.15}
          />
          <PerformanceCard
            completionPercentage={87.15}
            componentName={"Maths"}
            componentDesc={87.15}
          />
          <PerformanceCard
            completionPercentage={87.15}
            componentName={"IT"}
            componentDesc={87.15}
          />
        </PerformanceContainer>
      </div>
    </div>
  );
};

export default DetailedAnalytics;
