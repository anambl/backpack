import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M10.19 10.19a1.5 1.5 0 1 0 0 3h6.878l-1.94 1.939a1.5 1.5 0 1 0 2.122 2.121l5.56-5.56-5.56-5.561a1.5 1.5 0 1 0-2.121 2.121l1.939 1.94h-6.879z" /><path d="M9.44 4.19a1.5 1.5 0 1 0 0-3H5.69a4.5 4.5 0 0 0-4.5 4.5v12a4.5 4.5 0 0 0 4.5 4.5h3.75a1.5 1.5 0 0 0 0-3H5.69a1.5 1.5 0 0 1-1.5-1.5v-12a1.5 1.5 0 0 1 1.5-1.5h3.75z" /></svg>);