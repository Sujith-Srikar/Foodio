import React from "react";

const sizes = {
  "3xl": "text-[52px] font-bold leading-[130%]",
  "2xl": "text-[40px] font-semibold leading-[110%]",
  "xl": "text-4xl font-bold leading-[115%]",
  "4xl": "text-[70px] font-bold",
  "s": "text-2xl font-semibold leading-[200%]",
  "md": "text-[25px] font-semibold",
  "xs": "text-xl font-semibold",
  "lg": "text-3xl font-semibold leading-[200%]",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
