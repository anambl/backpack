import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path fillRule="evenodd" d="M6 1.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V15a4.5 4.5 0 1 0 0-9V4.5a3 3 0 0 0-3-3H6zM18 12a1.5 1.5 0 0 0 0-3v3zm-3.406-4.02a1.536 1.536 0 0 1-.068 2.15L9.402 15 6.38 11.552a1.535 1.535 0 0 1 .124-2.147 1.486 1.486 0 0 1 2.118.126l.977 1.114 2.876-2.734a1.486 1.486 0 0 1 2.12.07z" clipRule="evenodd" /><path d="M1.5 22.5A1.5 1.5 0 0 1 3 21h15a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1-1.5-1.5z" /></svg>);