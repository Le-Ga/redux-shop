import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-body container">
          <Link to="/">
            <div className="footer-name">Redux shop</div>
          </Link>
          <a
            href="https://github.com/Le-Ga"
            target="_blank"
            className="footer-repo"
            rel="noreferrer"
          >
            Repo
          </a>
        </div>
      </div>
    </>
  );
}

export { Footer };
