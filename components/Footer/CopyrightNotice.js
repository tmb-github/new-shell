import Link from "next/link";

const CopyrightNotice = () => {
  return (
    <div className="copyright display-block">
      <p className="internal-links">
        <Link className="internal-anchor privacy-policy" href="privacy-policy/">
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link className="internal-anchor site-map" href="site-map/">
          Site Map
        </Link>{" "}
      </p>
      <p className="copyright-notice">
        All images and text Copyright © 2009–2022 by Thomas M. Brodhead.{" "}
        <span className="avoid-wrap">All Rights Reserved.</span>
      </p>
    </div>
  );
};

export default CopyrightNotice;
