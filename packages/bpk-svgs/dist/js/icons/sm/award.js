import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3v6.737a3 3 0 0 1-2.176 2.885l-5.795 1.655a4.5 4.5 0 1 1-5.058 0l-5.795-1.655A3 3 0 0 1 1.5 11.237V4.5zm6 1.5A1.5 1.5 0 0 1 9 4.5h6A1.5 1.5 0 0 1 16.5 6v4.106a1.5 1.5 0 0 1-1.088 1.442l-3 1.202a1.5 1.5 0 0 1-.824 0l-3-1.202A1.5 1.5 0 0 1 7.5 10.106V6zm6 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" clipRule="evenodd" /></svg>);