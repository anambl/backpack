import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M17.293 8H6.707c-1.454 0-2.24 1.638-1.296 2.701l5.081 5.724a1.75 1.75 0 0 0 2.547.049l5.505-5.724C19.553 9.7 18.779 8 17.293 8z" /></svg>);