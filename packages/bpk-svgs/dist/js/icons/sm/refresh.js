import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path fillRule="evenodd" d="M12 6a6.002 6.002 0 0 0-5.501 3.6 1.5 1.5 0 1 1-2.75-1.2A9.002 9.002 0 0 1 12 3c2.306 0 4.408.867 6 2.292V4.5a1.5 1.5 0 0 1 3 0V9a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1 0-3h.969A5.978 5.978 0 0 0 12 6zM8.03 16.5H9a1.5 1.5 0 0 0 0-3H4.5A1.5 1.5 0 0 0 3 15v4.5a1.5 1.5 0 0 0 3 0v-.792A8.965 8.965 0 0 0 12 21a9.002 9.002 0 0 0 8.25-5.4 1.5 1.5 0 1 0-2.749-1.2 6.002 6.002 0 0 1-9.47 2.1z" clipRule="evenodd" /></svg>);