import React from "react";

const sizes = {
  "xs": "text-sm font-normal leading-[200%]",
  "lg": "text-[25px] font-normal leading-[200%]",
  "s": "text-base font-normal",
  "md": "text-xl font-normal leading-[200%]",
  "xl": "text-2xl font-normal leading-[200%]",
  "2xl": "text-3xl font-normal leading-[200%]",
  "3xl": "text-4xl font-normal leading-[200%]",
};


const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-300_01 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
