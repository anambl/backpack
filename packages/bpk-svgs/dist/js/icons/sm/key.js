import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path fillRule="evenodd" d="M9 4.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zM1.5 9a7.5 7.5 0 1 1 13.738 4.164l6.823 6.823a1.5 1.5 0 0 1-2.122 2.121l-.452-.453-.393.419a1.5 1.5 0 1 1-2.188-2.053l.458-.488-.864-.864-1.892 1.892a1.5 1.5 0 0 1-2.121-2.122l1.892-1.892-1.272-1.27A7.5 7.5 0 0 1 1.5 9z" clipRule="evenodd" /></svg>);