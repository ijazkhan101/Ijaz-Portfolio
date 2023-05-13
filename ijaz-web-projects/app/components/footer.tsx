import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link";


export const Footer = () => {
  return (
    <div>
      <div>
        <div className="flex">
          <div className="w-1/3">Column 1</div>
          <div className="w-1/3">Column 2</div>
          <div className="w-1/3">
          <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faTwitter}  color="blue"  className="w-300 h-300"/>
</Link>

          </div>
        </div>
      </div>
    </div>
  );
};
