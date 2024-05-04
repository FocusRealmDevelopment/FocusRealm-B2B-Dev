/* eslint-disable react/prop-types */
// import React from 'react';
import styles from "./profilecomponents.module.css";
import "../../styles/global.css";

const ProfileComponents = ({ componentName, componentDesc }) => {
  return (
    <div className={`${styles.body} mb-3`}>
      <div className={`text-[#666666] text-sm poppins-regular`}>
        {componentName}
      </div>
      <div className={`text-[#0148b7] text-sm poppins-regular`}>
        {componentDesc}
      </div>
    </div>
  );
};

export default ProfileComponents;
