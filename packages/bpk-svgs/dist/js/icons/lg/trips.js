import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path fillRule="evenodd" d="M12 2C9.297 2 7.312 3.29 6.457 4.227A1.808 1.808 0 0 0 6 5.455V20a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5.515a1.89 1.89 0 0 0-.555-1.356C16.547 3.279 14.693 2 12 2zM8.5 7a.5.5 0 0 1-.5-.5v-.583c0-.264.1-.52.306-.684C9.003 4.676 10.296 4 12 4c1.7 0 2.944.676 3.677 1.262a.899.899 0 0 1 .323.71V6.5a.5.5 0 0 1-.5.5h-7z" clipRule="evenodd" /><path d="M21 19.053c0 .708-.405 1.328-1.01 1.669-.494.278-.99-.194-.99-.761V8.039c0-.567.496-1.039.99-.76.605.34 1.01.96 1.01 1.668v10.106zM5 8.039c0-.567-.496-1.039-.99-.76-.605.34-1.01.96-1.01 1.668v10.106c0 .708.405 1.328 1.01 1.669.494.278.99-.194.99-.761V8.039z" /></svg>);