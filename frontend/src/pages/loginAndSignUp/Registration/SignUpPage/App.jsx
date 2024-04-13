// import React from 'react';
import Lpart from "./LeftPart";
import Rpart from "./RightPart";

export default function App() {
  return (
    <div className="w-[90%] h-[180%] top-[8%] shadow-[#0148B7] rounded-[40px]  drop-shadow border-2   border-[#0148B7]  absolute  ">
      {/* left Blue part starting */}
      <Lpart />

      {/*Right Side Part Of the page  */}
      <Rpart />
    </div>
  );
}
