import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /><path fillRule="evenodd" d="M4.5 4.5c-1.5 0-3 1.5-3 3.25V18c0 1.5 1.5 3 3.15 3h14.7c1.65 0 3.15-1.5 3.15-3V7.75c0-1.75-1.5-3.25-3-3.25h-.801c-1.008 0-2.105-.248-2.698-1.088l-.404-.574A3.12 3.12 0 0 0 13.05 1.5h-2.29a3.12 3.12 0 0 0-2.548 1.338l-.718 1.02c-.396.56-.877.642-1.549.642H4.5zM18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0z" clipRule="evenodd" /></svg>);