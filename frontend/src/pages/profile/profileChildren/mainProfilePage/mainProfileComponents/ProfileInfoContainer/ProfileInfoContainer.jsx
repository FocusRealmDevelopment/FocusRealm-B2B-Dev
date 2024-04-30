/* eslint-disable react/prop-types */
// import React from 'react';
import ProfileComponents from "../../../../../../components/profileComponents/ProfileComponents";
import styles from "./profileinfocontainer.module.css";

const ProfileInfoContainer = ({ profileData }) => {
  return (
    <div className={`${styles.body}`}>
      <div className={`grid grid-cols-3 justify-between w-full`}>
        <ProfileComponents
          componentName={"Name"}
          componentDesc={profileData?.name ?? "Patrick Dash R"}
        />
        <ProfileComponents
          componentName={"Class & Section"}
          componentDesc={profileData?.Batch ?? "12 A"}
        />
        <ProfileComponents
          componentName={"Phone"}
          componentDesc={profileData?.mobileNumber ?? "+91 9895098950"}
        />
        <ProfileComponents
          componentName={"School"}
          componentDesc={profileData?.school ?? "Patrick Dash R"}
        />
        <ProfileComponents
          componentName={"Date Of Birth"}
          componentDesc={profileData?.age ?? "24 Apr 2010"}
        />
        <ProfileComponents
          componentName={"Address"}
          componentDesc={profileData?.address ?? "56b, Kannwar Nagar, Vikhroli"}
        />
        <ProfileComponents
          componentName={"Roll Number"}
          componentDesc={profileData?.rollNumber ?? "000001"}
        />
        <ProfileComponents
          componentName={"Email"}
          componentDesc={profileData?.email ?? "patrick.dash@gmail.com"}
        />
        <ProfileComponents
          componentName={"PIN Code"}
          componentDesc={profileData?.pinCode ?? "500028"}
        />
      </div>
    </div>
  );
};

export default ProfileInfoContainer;
