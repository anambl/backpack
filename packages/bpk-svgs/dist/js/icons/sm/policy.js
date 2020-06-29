import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path fillRule="evenodd" d="M8.068 2.325A2.812 2.812 0 0 1 10.06 1.5H18c1.5 0 3 1.575 3 3.15V19.5c0 1.656-1.345 3-3 3H6a3 3 0 0 1-3-3V8.56c0-.747.296-1.464.826-1.993l4.242-4.242zm1.652.81L6.137 6.707c-.291.29-.087.792.322.792h3.583a.46.46 0 0 0 .458-.463V3.464a.458.458 0 0 0-.78-.33zm2.634 14.757c.794-.526 2.646-1.963 2.646-3.91v-2.598a.425.425 0 0 0-.28-.398 7.855 7.855 0 0 0-5.44 0 .425.425 0 0 0-.28.397v2.598c0 1.948 1.852 3.385 2.646 3.911a.637.637 0 0 0 .708 0z" clipRule="evenodd" /></svg>);