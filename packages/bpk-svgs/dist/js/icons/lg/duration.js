import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M11.965 12.249a1 1 0 0 0 .278-.692v-4.2c0-.252.16-.419.4-.335 2.722.25 4.884 3.012 4.244 6.108-.4 1.841-1.842 3.348-3.603 3.766-1.602.335-3.043-.167-4.164-1.088a.417.417 0 0 1 0-.586l2.845-2.973z" /><path fillRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0z" clipRule="evenodd" /></svg>);