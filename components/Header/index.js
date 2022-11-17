import H1 from "./H1";
import SkipToMainContent from "./SkipToMainContent";
import ForceSiteFontLoad from "./ForceSiteFontLoad";
import Hamburger from "./Hamburger";
import LogoForMobileMenu from "./LogoForMobileMenu";
import TransparentMask from "./TransparentMask";
import Navbar from "./NavBar";

const Header = () => {
  return (
    <header className="header">
      <H1 />
      <SkipToMainContent />
      <ForceSiteFontLoad />
      <Hamburger />
      <LogoForMobileMenu />
      <TransparentMask />
      <Navbar />
    </header>
  );
};

export default Header;
