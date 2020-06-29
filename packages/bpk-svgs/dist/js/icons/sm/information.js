import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path fillRule="evenodd" d="M22.854 9.233l-8.087-8.087a3.913 3.913 0 0 0-5.534 0L1.146 9.233a3.913 3.913 0 0 0 0 5.534l8.087 8.087a3.913 3.913 0 0 0 5.534 0l8.087-8.087a3.913 3.913 0 0 0 0-5.534zM10.5 7.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm0 9a1.5 1.5 0 0 0 3 0V12a1.5 1.5 0 0 0-3 0v4.5z" clipRule="evenodd" /></svg>);