import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M12.205 7.674l1.186 3.441c.394 1.143-.33 2.385-1.391 2.385-1.06 0-1.785-1.242-1.391-2.385l1.186-3.441c.08-.232.33-.232.41 0z" /><path fillRule="evenodd" d="M1.767 4.404c-.182.19-.267.447-.267.71V19A3.5 3.5 0 0 0 5 22.5h14a3.5 3.5 0 0 0 3.5-3.5V5.187a1.09 1.09 0 0 0-.345-.81C20.481 2.852 17.781 1.5 12 1.5c-5.815 0-8.777 1.38-10.233 2.904zM19.5 12a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0z" clipRule="evenodd" /></svg>);