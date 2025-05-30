import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="pattern center min-h-screen">{children}</div>;
};

export default RootLayout;