// import React from 'react';
import { useEffect } from "react";
import styles from "./mainprofilepage.module.css";
import { FaArrowLeft } from "react-icons/fa";
import "../../../../styles/global.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../../../features/fetchProfile/profileSlice";
import ProfileInfoContainer from "./mainProfileComponents/ProfileInfoContainer/ProfileInfoContainer";
import PerformanceContainer from "./mainProfileComponents/performanceContainer/PerformanceContainer";
import PerformanceCard from "../../../../components/performanceCard/PerformanceCard";
// import ProfileComponents from "../../../../components/profileComponents/ProfileComponents";
// import profile from "../../../../assets/images/profile.jpeg";

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
          onClick={() => window.history.back()}
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
          heading={profileData?.name ?? "Patrick's"}
          gridCols={4}
        >
          <PerformanceCard />
        </PerformanceContainer>
      </div>
    </div>
  );
};

export default MainProfilePage;
