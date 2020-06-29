import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M11 8a1 1 0 1 0-2 0v2.671l2.336 2.076a1 1 0 0 0 1.328-1.494L11 9.773V8z" /><path fillRule="evenodd" d="M10.5 2a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17zm0 2A6.508 6.508 0 0 0 4 10.5c0 3.583 2.917 6.5 6.5 6.5s6.5-2.917 6.5-6.5S14.083 4 10.5 4z" clipRule="evenodd" /><path d="M17.234 17.233c.59-.591 1.184-.958 1.324-.818l2.998 2.998a1.516 1.516 0 0 1-2.142 2.144l-2.998-3c-.14-.14.227-.732.818-1.324z" /></svg>);