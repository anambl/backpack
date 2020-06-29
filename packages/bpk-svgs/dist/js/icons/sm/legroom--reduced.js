import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M10.5 3a1.5 1.5 0 1 0-3 0v11.25a2.25 2.25 0 0 0 2.25 2.25h1.326c2.17 0 3.623 2.235 2.741 4.218l-.188.423a1.5 1.5 0 1 0 2.742 1.218l.187-.422c1.764-3.968-1.14-8.437-5.482-8.437H10.5V3z" /><path d="M4.5 4.5A1.5 1.5 0 0 1 6 6v9a3 3 0 0 0 3 3h1.5a1.5 1.5 0 0 1 0 3H9a6 6 0 0 1-6-6V6a1.5 1.5 0 0 1 1.5-1.5z" /></svg>);