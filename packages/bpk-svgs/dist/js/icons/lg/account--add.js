import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path fillRule="evenodd" d="M7 4.568c0-.453.184-.886.572-1.069C8.107 3.25 8.946 3 10 3c1.053 0 1.858.247 2.392.498.4.188.608.635.608 1.102v5.022C13 11.2 11.5 12 10 12s-3-.8-3-2.378V4.568zm2 4.46c0 .537.448.972 1 .972s1-.435 1-.972V9H9v.028z" clipRule="evenodd" /><path d="M2.99 15.598C4.325 14.972 6.896 14 9.972 14c.444 0 .878.02 1.3.058A7.002 7.002 0 0 0 11 16a6.98 6.98 0 0 0 2.101 5H5.045C3.44 21 2 19.783 2 18.227v-.995c0-.695.36-1.339.99-1.634z" /><path fillRule="evenodd" d="M23.001 16.001A5 5 0 1 1 13 16a5 5 0 0 1 10.001.001zm-2 0a1 1 0 0 0-1-1h-1v-1a1 1 0 1 0-2 0v1h-1A1 1 0 0 0 16 17h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 0 0 1-1z" clipRule="evenodd" /></svg>);