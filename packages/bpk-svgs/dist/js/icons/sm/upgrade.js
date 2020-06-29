import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path fillRule="evenodd" d="M12 22.5c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5 1.5 6.201 1.5 12 6.201 22.5 12 22.5zm4.06-12.44L12 6l-4.06 4.06a1.5 1.5 0 1 0 2.12 2.122l.44-.44V16.5a1.5 1.5 0 0 0 3 0v-4.757l.44.439a1.5 1.5 0 0 0 2.12-2.121z" clipRule="evenodd" /></svg>);