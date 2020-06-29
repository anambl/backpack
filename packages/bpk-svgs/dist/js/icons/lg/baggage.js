import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path fillRule="evenodd" d="M5.5 7a.5.5 0 0 0 .5-.5V5.455c0-.384.11-.85.457-1.228C7.312 3.29 9.297 2 12 2c2.693 0 4.547 1.279 5.445 2.159.393.384.555.891.555 1.356V6.5a.5.5 0 0 0 .5.5h.532C20.12 7 21 7.933 21 9.083V18c0 1.5-1.5 3-3 3H6c-1.5 0-3-1.5-3-3V9.083C3 7.933 3.881 7 4.968 7H5.5zm3 0a.5.5 0 0 1-.5-.5v-.583c0-.264.1-.52.306-.684C9.003 4.676 10.296 4 12 4c1.7 0 2.944.676 3.677 1.262a.899.899 0 0 1 .323.71V6.5a.5.5 0 0 1-.5.5h-7z" clipRule="evenodd" /></svg>);