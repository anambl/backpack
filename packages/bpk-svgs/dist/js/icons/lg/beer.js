import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path fillRule="evenodd" d="M4 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v.5c0 .276.225.497.499.53a4 4 0 0 1 0 7.94c-.274.033-.499.254-.499.53V19a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4zm14 6.5c0 .276.227.506.495.438a2 2 0 0 0 0-3.876c-.268-.068-.495.162-.495.438v3zM6 5a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0V5z" clipRule="evenodd" /></svg>);