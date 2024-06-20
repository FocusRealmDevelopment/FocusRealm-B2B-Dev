import React from "react";
import FolderIcon from "../../../../assets/images/folder.png";
import FolderOpenIcon from "../../../../assets/images/folderopen.png";
import LinkIcon from "../../../../assets/images/link.png";
import accordionContentData from "./accordionContentData"; // Import the data

const iconMap = {
  FolderIcon,
  FolderOpenIcon,
  LinkIcon,
};

const AccordionContent = () => {
  return (
    <>
      {accordionContentData.map(({ id, icon, title }) => (
        <div key={id} className="small-box">
          <div className="rounded-box-small" style={styles.container}>
            <div className="pdf-container">
              <img
                src={iconMap[icon]}
                alt={`${icon} Icon`}
                style={{ width: "24px", height: "24px" }}
              />
              <h1 className="title">{title}</h1>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={styles.svgIcon}
              >
                <path
                  d="M9 2.25C8.175 2.25 7.5 2.925 7.5 3.75C7.5 4.575 8.175 5.25 9 5.25C9.825 5.25 10.5 4.575 10.5 3.75C10.5 2.925 9.825 2.25 9 2.25ZM9 12.75C8.175 12.75 7.5 13.425 7.5 14.25C7.5 15.075 8.175 15.75 9 15.75C9.825 15.75 10.5 15.075 10.5 14.25C10.5 13.425 9.825 12.75 9 12.75ZM9 7.5C8.175 7.5 7.5 8.175 7.5 9C7.5 9.825 8.175 10.5 9 10.5C9.825 10.5 10.5 9.825 10.5 9C10.5 8.175 9.825 7.5 9 7.5Z"
                  fill="#666666"
                />
              </svg>
            </div>
          </div>
        </div>
      ))}
      <div className="small-box">
        <div className="rounded-box-small-teacher-add-item">
          <div className="pdf-container">
            <svg
              width="28"
              height="26"
              viewBox="0 0 28 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 13C0 5.8203 5.8203 0 13 0H15C22.1797 0 28 5.8203 28 13C28 20.1797 22.1797 26 15 26H13C5.8203 26 0 20.1797 0 13Z"
                fill="#4F81D1"
                fillOpacity="0.2" // Changed fill-opacity to fillOpacity
              />
              <path
                d="M13.4286 12.4286V9H14.5714V12.4286H18V13.5714H14.5714V17H13.4286V13.5714H10V12.4286H13.4286Z"
                fill="#0148B7"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    position: "relative", // Added position: relative
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  svgIcon: {
    position: "absolute", // Added position: absolute
    right: 15, // Position the icon at the right edge of the container
  },
};

export default AccordionContent;
