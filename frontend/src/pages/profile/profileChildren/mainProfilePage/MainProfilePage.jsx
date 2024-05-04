// import React from 'react';
import styles from "./mainprofilepage.module.css";
import { FaArrowLeft } from "react-icons/fa";
import "../../../../styles/global.css";
import ProfileInfoContainer from "../../profileComponents/ProfileInfoContainer/ProfileInfoContainer";
import PerformanceContainer from "../../profileComponents/performanceContainer/PerformanceContainer";
import PerformanceCard from "../../../../components/performanceCard/PerformanceCard";
import gradeImage from "../../../../assets/images/gradeImage.png";
import pointsImage from "../../../../assets/images/pointsImage.png";
import attendanceImage from "../../../../assets/images/attendanceImage.png";
import activeImage from "../../../../assets/images/activeImage.png";
import eng from "../../../../assets/images/eng.png";
import chemistry from "../../../../assets/images/chemistry.png";
import science from "../../../../assets/images/science.png";
import math from "../../../../assets/images/math.png";
import physics from "../../../../assets/images/physics.png";
import hindi from "../../../../assets/images/hindi.png";
import history from "../../../../assets/images/history.png";
import it from "../../../../assets/images/it.png";
import performance from "../../../../assets/images/performance.png";
import overallTime from "../../../../assets/images/overallTime.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProfile } from "../../../../features/fetchProfile/profileSlice";
// import { Outlet } from "react-router-dom";

const MainProfilePage = () => {
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
          {profileData?.name ?? "Patrick Dash"}&apos;s Profile
        </h1>
      </div>
      <div
        className={`${styles.profileDeetContainer} bg-white mt-8 p-4 flex gap-14`}
      >
        <div className={`w-[15%]`}>{/* This is the Profile Pic div */}</div>
        <div className="w-full">
          <ProfileInfoContainer profileData={profileData} />
        </div>
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
        <PerformanceContainer
          heading={"Subject Wise Performance"}
          gridCols={"grid-cols-4"}
        >
          <PerformanceCard
            logo={eng}
            componentName={"English"}
            componentDesc={"342"}
            path={"/profile/detailed-analytics"}
          />
          <PerformanceCard
            logo={chemistry}
            componentName={"Chemistry"}
            componentDesc={"342"}
            path={"/profile/detailed-analytics"}
          />
          <PerformanceCard
            logo={science}
            componentName={"Science"}
            componentDesc={"342"}
            path={"/profile/detailed-analytics"}
          />
          <PerformanceCard
            logo={math}
            componentName={"Maths"}
            componentDesc={"342"}
            path={"/profile/detailed-analytics"}
          />
          <PerformanceCard
            logo={physics}
            componentName={"Physics"}
            componentDesc={"342"}
            path={"/profile/detailed-analytics"}
          />
          <PerformanceCard
            logo={hindi}
            componentName={"Hindi"}
            componentDesc={"342"}
            path={"/profile/detailed-analytics"}
          />
          <PerformanceCard
            logo={history}
            componentName={"History"}
            componentDesc={"342"}
            path={"/profile/detailed-analytics"}
          />
          <PerformanceCard
            logo={it}
            componentName={"IT"}
            componentDesc={"342"}
            path={"/profile/detailed-analytics"}
          />
        </PerformanceContainer>
        <PerformanceContainer
          heading={"Overall Performance"}
          gridCols={"grid-cols-2"}
        >
          <PerformanceCard completionPercentage={67.1} logo2={performance}>
            <div className={`w-[30%]`}>
              <h1 className={`text-[#666666] poppins-regular text-left`}>
                Overall Performance
              </h1>
              <h1 className={`text-[#0148b7] poppins-bold text-left`}>67.1%</h1>
            </div>
          </PerformanceCard>
          <PerformanceCard completionPercentage={87.15} logo2={overallTime}>
            <div>
              <h1 className={`text-[#666666] poppins-regular  text-left`}>
                Overall Time Spent
              </h1>
              <div className={`flex gap-4 text-left`}>
                <h1 className={`text-[#0148b7] poppins-bold`}>87.15%</h1>
                <h3 className={`text-[#0148B7] poppins-regular`}>
                  128 hours 30 mins
                </h3>
              </div>
              <div className={`text-[#666666] text-xs poppins-regular`}>
                View Detailed Analytics
              </div>
            </div>
          </PerformanceCard>
        </PerformanceContainer>
      </div>
    </div>
  );
};

export default MainProfilePage;
