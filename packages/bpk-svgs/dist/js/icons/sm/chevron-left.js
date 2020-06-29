import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path fillRule="evenodd" d="M14.586 19.113c-.47.526-1.52.506-2.008 0L6.63 12.716a1 1 0 0 1-.004-1.358l6.012-6.532c.47-.526 1.46-.369 1.948.138.487.507.573 1.47.103 1.997l-4.638 5.078 4.535 4.97c.488.506.47 1.577 0 2.104z" clipRule="evenodd" /></svg>);