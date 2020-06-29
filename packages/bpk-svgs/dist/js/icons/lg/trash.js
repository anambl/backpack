import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M5 4a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2H5zm13.91 4.083A1 1 0 0 0 17.913 7H6.087a1 1 0 0 0-.997 1.083L6 19c0 1.5 1.5 3 3 3h6c1.5 0 3-1.5 3-3l.91-10.917zM8 3.79V4h8v-.147a.864.864 0 0 0-.324-.699C15.022 2.66 13.774 2 12 2c-1.803 0-3.134.68-3.74 1.179-.181.147-.26.377-.26.61z" /></svg>);