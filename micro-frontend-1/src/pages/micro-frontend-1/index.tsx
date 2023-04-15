import * as React from "react";
import { HeadFC, PageProps } from "gatsby";

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};



const MicroFrontend1Page: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>MicroFrontend 1</h1>
    </main>
  );
};

export default MicroFrontend1Page;

export const Head: HeadFC = () => <title>MicroFrontend 1</title>;
