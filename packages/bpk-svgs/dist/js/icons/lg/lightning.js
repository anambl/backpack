import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path fillRule="evenodd" d="M11.91 22.77c-.213.402-.8.244-.8-.217v-6.944a.437.437 0 0 0-.427-.446H5.428c-.326 0-.532-.365-.374-.663L12.09 1.23c.214-.402.8-.244.8.217v6.944c0 .246.192.446.428.446h5.255c.326 0 .532.365.374.663L11.91 22.77z" clipRule="evenodd" /></svg>);