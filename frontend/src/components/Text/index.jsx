import React from "react";

const sizes = {
  xs: "text-[9px] font-normal",
  lg: "text-xs font-normal",
  s: "text-[10px] font-normal",
  "2xl": "text-sm font-normal",
  "3xl": "text-base font-medium",
  "4xl": "text-lg font-medium",
  xl: "text-[13px] font-normal",
  md: "text-[11px] font-normal",
};

const Text = ({ children, className = "", as, size = "2xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-800 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
