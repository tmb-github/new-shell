import Image from "next/image";

const LogoForMobileMenu = () => {
  return (
    <Image
      src="/images/header/shell-logo.png"
      width="115"
      height="35"
      alt="SHELL site logo"
      data-social-share="default"
      priority="true"
      className="logo-for-mobile-menu"
    />
  );
};

export default LogoForMobileMenu;
