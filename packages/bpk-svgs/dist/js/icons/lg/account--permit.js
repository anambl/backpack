import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path fillRule="evenodd" d="M7 2a3 3 0 0 0-3 3v16.382a1 1 0 0 0 1.447.894l5.659-2.829a2 2 0 0 1 1.788 0l5.659 2.83A1 1 0 0 0 20 21.381V5a3 3 0 0 0-3-3H7zm9.707 6.858a1.16 1.16 0 0 0 0-1.54.944.944 0 0 0-1.414 0l-4.357 4.743-2.299-2.068c-.426-.383-1.056-.317-1.408.146-.352.463-.292 1.15.134 1.532L11.064 15l5.643-6.142z" clipRule="evenodd" /></svg>);