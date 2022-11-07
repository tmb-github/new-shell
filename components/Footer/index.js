import SocialLinks from "./SocialLinks";
import CopyrightNotice from "./CopyrightNotice";

const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="screen-reader">Footer</h1>
      <SocialLinks></SocialLinks>
      <CopyrightNotice></CopyrightNotice>
    </footer>
  );
};

export default Footer;
