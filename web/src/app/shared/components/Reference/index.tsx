import React from "react";
import { LinkArea } from "./styled";

interface IReferenceProps {
  description: string;
  url: string;
  backgroundColor?: string;
}

export const Reference: React.FC<IReferenceProps> = ({ description, url, backgroundColor }) => {
  return (
    <LinkArea backgroundColor={backgroundColor ?? "#fff"}>
      <a href={url} aria-label={description} target="_blank">
        {description}
      </a>
    </LinkArea>
  );
};
