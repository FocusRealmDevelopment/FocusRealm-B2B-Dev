import React from 'react';
import FolderIcon from '../../assets/images/folder.png';
import FolderOpenIcon from '../../assets/images/folderopen.png';
import LinkIcon from '../../assets/images/link.png';
import { accordiondata } from './data';

const AccordionContent = () => {
  return (
    <>
      {accordiondata.map((topic, index) => (
        <div className="rounded-box-small mb-4" key={index} >
          <div className="pdf-container">
            <img
              src={index === 0 ? FolderIcon : index === 1 ? FolderOpenIcon : LinkIcon}
              alt={index === 0 ? "Folder Icon" : index === 1 ? "Folder Open Icon" : "Link Icon"}
              style={{ width: "24px", height: "24px" , marginRight:"8px"}}
            />
            {/* <h1 className="title">Topic {index + 1}</h1> */}
            {topic && <p>{topic}</p>}
          </div>
        </div>
      ))}
    </>
  );
};

export default AccordionContent;
