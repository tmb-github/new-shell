import H1 from "./H1";
import SkipToMainContent from "./SkipToMainContent";
import ForceSiteFontLoad from "./ForceSiteFontLoad";
import Hamburger from "./Hamburger";
import TransparentMask from "./TransparentMask";
import Navbar from "./NavBar";

const Header = () => {
  return (
    <header className="header">
      <H1></H1>
      <SkipToMainContent></SkipToMainContent>
      <ForceSiteFontLoad></ForceSiteFontLoad>
      <Hamburger></Hamburger>
      <TransparentMask></TransparentMask>
      <Navbar></Navbar>
    </header>
  );
};

export default Header;
