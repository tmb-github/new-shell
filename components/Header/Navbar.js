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
  let buffer = [];
  let listItems = links.map((link) =>
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
  let listItems2 = (
    <li
      key="Additional Pages 1"
      data-span="Additional Pages 1"
      className="no-progress-line menu-side-one"
    >
      <ul className="secondary-ul">
        <input
          id="side-switcher-1"
          data-switcher-target="Main Menu"
          aria-labelledby="additional-pages-1 main-menu"
          type="checkbox"
          title="hidden checkbox"
          name="ignore2"
          value="ignore2"
        />
        <div data-for="side-switcher-1" id="additional-pages-1">
          <span className="switch-to-secondary-ul" tabIndex="-1">
            Additional Pages 1
          </span>
        </div>
        <li
          data-span="Main Menu"
          className="menu-side-two no-progress-line orange ripple"
          key="Main Menu"
        >
          <div
            data-for="side-switcher-1"
            data-switcher-target="Additional Pages 1"
            id="main-menu-1"
            className="return-to-main-menu"
          >
            <span className="necessary-span switch-to-primary-ul" tabIndex="-1">
              Main Menu
            </span>
          </div>
        </li>
        <li key="Dummy 4" className="menu-side-two" tabIndex="0">
          <Link className="internal-anchor" href="./dummy-4" tabIndex="-1">
            Dummy 4
          </Link>
        </li>
        <li key="Dummy 5" className="menu-side-two" tabIndex="0">
          <Link className="internal-anchor" href="./dummy-5" tabIndex="-1">
            Dummy 5
          </Link>
        </li>
        <li key="Dummy 6" className="menu-side-two" tabIndex="0">
          <Link className="internal-anchor" href="./dummy-6" tabIndex="-1">
            Dummy 6
          </Link>
        </li>
      </ul>
    </li>
  );
  let listItems3 = (
    <>
      <li key="Dummy 14" className="menu-side-two" tabIndex="0">
        <Link className="internal-anchor" href="./dummy-4" tabIndex="-1">
          Dummy 4
        </Link>
      </li>
      <li key="Dummy 15" className="menu-side-two" tabIndex="0">
        <Link className="internal-anchor" href="./dummy-5" tabIndex="-1">
          Dummy 5
        </Link>
      </li>
      <li key="Dummy 16" className="menu-side-two" tabIndex="0">
        <Link className="internal-anchor" href="./dummy-6" tabIndex="-1">
          Dummy 6
        </Link>
      </li>
    </>
  );
  buffer.push(listItems);
  buffer.push(listItems2);
  return <ul className="primary-ul selected">{buffer}</ul>;
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
