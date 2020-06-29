import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path fillRule="evenodd" d="M1.744 3.525c-.17.23-.244.553-.244.881V20.09c0 1.331.84 2.411 1.875 2.411h8.25c1.037 0 1.875-1.08 1.875-2.41V4.5c0-.385-.104-.758-.313-1.014C12.261 2.358 10.5 1.5 7.5 1.5c-3 0-4.925.896-5.756 2.025zm1.363 9.024a2.311 2.311 0 0 0-.017.026c-.282.422.13.93.782.93h2.814c.481 0 .81.264.81.62v3.613c0 .262.415.362.597.138l3.784-6.182c.349-.431-.088-1.185-.765-1.185H8.31c-.48 0-.814-.123-.814-.48V6.235c0-.255-.487-.317-.681-.114a.198.198 0 0 0-.028.039l-3.632 6.316-.047.073z" clipRule="evenodd" /><path d="M15.34 5.05a1.5 1.5 0 0 1 2.11-.21l3.4 2.78a4.5 4.5 0 0 1 1.65 3.484v4.646a3.75 3.75 0 1 1-7.5 0v-3a1.5 1.5 0 0 1 3 0v3a.75.75 0 0 0 1.5 0v-4.646a1.5 1.5 0 0 0-.55-1.161l-3.4-2.782a1.5 1.5 0 0 1-.21-2.11z" /></svg>);