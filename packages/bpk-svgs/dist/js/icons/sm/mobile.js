import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M16.125 0A3.375 3.375 0 0 1 19.5 3.375v17.25A3.375 3.375 0 0 1 16.125 24h-8.25A3.375 3.375 0 0 1 4.5 20.625V3.375A3.375 3.375 0 0 1 7.875 0h8.25zm-3.75 19.5h-.75a1.125 1.125 0 0 0 0 2.25h.75a1.125 1.125 0 0 0 0-2.25z" /></svg>);