import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path fillRule="evenodd" d="M6 1.5a3 3 0 0 0-3 3V21a1.5 1.5 0 0 0 3 0V5.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75V21a1.5 1.5 0 0 0 3 0v-.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75V21a1.5 1.5 0 0 0 3 0V9a3 3 0 0 0-3-3h-5.25a.75.75 0 0 1-.75-.75V4.5a3 3 0 0 0-3-3H6zM12 15a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 0-3h-3A1.5 1.5 0 0 0 12 15zm1.5-6a1.5 1.5 0 0 0 0 3h3a1.5 1.5 0 0 0 0-3h-3z" clipRule="evenodd" /></svg>);