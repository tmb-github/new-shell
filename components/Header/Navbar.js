import Link from "next/link";
import Image from "next/image";

let links = [
  { name: "Home", href: "./", classes: "menu-side-one" },
  { name: "Dummy 1", href: "./dummy-1", classes: "menu-side-one" },
  { name: "Dummy 2", href: "./dummy-2", classes: "menu-side-one" },
  { name: "Dummy 3", href: "./dummy-3", classes: "menu-side-one" },
  {
    name: "Contact",
    href: "./contact",
    classes: "menu-side-one orange ripple",
  },
];

function NavList() {
  const listItems = links.map((link) =>
    link.href === "./" ? (
      <li key={link.name} className={link.classes} tabIndex="0">
        <Link className="internal-anchor" href={link.href} tabIndex="-1">
          <div className="home-image-link picture-image-anchor">
            <Image
              src="/images/header/shell-logo.png"
              width="115"
              height="35"
              alt="SHELL site logo"
              data-social-share="default"
              priority="true"
            />
          </div>
          <div className="home-text-link internal-anchor">{link.name}</div>
        </Link>
      </li>
    ) : (
      <li key={link.name} className={link.classes} tabIndex="0">
        <Link className="internal-anchor" href={link.href} tabIndex="-1">
          {link.name}
        </Link>
      </li>
    )
  );
  return <ul className="primary-ul selected">{listItems}</ul>;
}

const Navbar = () => {
  return (
    <nav className="nav" id="header-nav" aria-labelledby="navigation-heading">
      <h2 className="screen-reader" id="navigation-heading">
        Site Navigation
      </h2>
      <NavList />
      <div className="progress-line"></div>
    </nav>
  );
};

export default Navbar;
