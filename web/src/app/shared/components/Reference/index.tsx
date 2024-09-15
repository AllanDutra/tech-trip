import React from "react";

interface ReferenceProps {
  description: string;
  url: string;
}

export const Reference: React.FC<ReferenceProps> = ({ description, url }) => {
  return (
    <a
      href={url}
      aria-label={description}
      style={{ display: "none" }}
      target="_blank"
      rel="noopener noreferrer"
    >
      {description}
    </a>
  );
};
