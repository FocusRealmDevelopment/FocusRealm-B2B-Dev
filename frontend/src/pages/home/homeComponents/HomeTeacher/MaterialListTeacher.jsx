import React from "react";
import PDFIcon from "../../../../assets/images/pdf.png";
import materialListData from "./materialListData"; // Import the data

const iconMap = {
  PDFIcon,
};

const MaterialListTeacher = () => {
  return (
    <>
      {materialListData.map(({ id, title, icon }) => (
        <div key={id} className="rounded-box-small" style={styles.container}>
          <div className="pdf-container" style={styles.pdfContainer}>
            <div style={styles.content}>
              <img
                src={iconMap[icon]}
                alt={`${icon} Icon`}
                style={styles.icon}
              />
              <h1 className="title" style={styles.title}>{title}</h1>
            </div>
            <svg
              width="4"
              height="14"
              viewBox="0 0 4 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={styles.svgIcon}
            >
              <path
                d="M2 0.25C1.175 0.25 0.5 0.925 0.5 1.75C0.5 2.575 1.175 3.25 2 3.25C2.825 3.25 3.5 2.575 3.5 1.75C3.5 0.925 2.825 0.25 2 0.25ZM2 10.75C1.175 10.75 0.5 11.425 0.5 12.25C0.5 13.075 1.175 13.75 2 13.75C2.825 13.75 3.5 13.075 3.5 12.25C3.5 11.425 2.825 10.75 2 10.75ZM2 5.5C1.175 5.5 0.5 6.175 0.5 7C0.5 7.825 1.175 8.5 2 8.5C2.825 8.5 3.5 7.825 3.5 7C3.5 6.175 2.825 5.5 2 5.5Z"
                fill="#666666"
              />
            </svg>
          </div>
        </div>
      ))}
    </>
  );
};

const styles = {
  container: {
    padding: "16px",
    borderRadius: "8px",
    backgroundColor: "#FFFFFF",
    marginBottom: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pdfContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  content: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    width: "24px",
    height: "24px",
  },
  title: {
    marginLeft: "8px",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "21px",
    textAlign: "left",
  },
  svgIcon: {
    marginLeft: "auto",
  },
};


export default MaterialListTeacher;
