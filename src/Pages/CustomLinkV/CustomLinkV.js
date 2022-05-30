import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          paddingBottom: "0px",
          margin: "10px",
          textTransform: "uppercase",
          color: match ? "#ffff" : "#212129",
          backgroundColor: match ? "#FF6F00" : "#ffff",
          textDecoration: "none",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          padding: "3px 20px",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
