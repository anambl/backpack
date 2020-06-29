import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M18 5h1.252C20.218 5 21 5.766 21 6.712v10.575c0 .947-.782 1.713-1.748 1.713H18a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM3 6.712v10.576C3 18.234 3.781 19 4.747 19H6a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4.747C3.781 5 3 5.766 3 6.712zM1 9c-.55 0-1 .336-1 .75v4.5c0 .414.45.75 1 .75.552 0 1-.336 1-.75v-4.5C2 9.336 1.552 9 1 9zm22 0c-.55 0-1 .336-1 .75v4.5c0 .414.45.75 1 .75.552 0 1-.336 1-.75v-4.5c0-.414-.448-.75-1-.75zM9 13a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2H9z" /></svg>);