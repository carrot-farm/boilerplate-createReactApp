import React from "react";
import TestHeader from "../../mocules/TestHeader";

const TestTemplate = ({ children }) => {
  return (
    <div>
      <TestHeader />
      <div>{children}</div>
    </div>
  );
};

export default TestTemplate;