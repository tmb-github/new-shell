import Link from "next/link";
import Image from "next/image";

let propsHome = {
  name: "Home",
  href: "/",
  classes: "menu-side-one",
  dataPage: "home",
  dataHref: "home",
};
let propsDummy1 = {
  name: "Dummy 1",
  href: "/dummy-1",
  classes: "menu-side-one",
  dataPage: "dummy-1",
  dataHref: "dummy-1",
};
let propsDummy2 = {
  name: "Dummy 2",
  href: "/dummy-2",
  classes: "menu-side-one",
  dataPage: "dummy-2",
  dataHref: "dummy-2",
};

let propsContact = {
  name: "Contact",
  href: "/contact",
  classes: "menu-side-one orange ripple",
  dataPage: "contact",
  dataHref: "contact",
};
let propsDoesNotExist = {
  name: "Does Not Exist",
  href: "/does-not-exist",
  classes: "menu-side-one",
  dataPage: "does-not-exist",
  dataHref: "does-not-exist",
};
let propsTheme = {
  name: "Theme",
  href: "/theme",
  classes: "menu-side-one",
  dataPage: "theme",
  dataHref: "theme",
};

let propsAdditionalPages = {
  name: "Additional Pages",
  href: "#additional-pages",
  classes: "no-progress-line menu-side-one",
  dataPage: "#",
  dataHref: "#",
};
let propsMainMenu = {
  name: "Main Menu",
  href: "#side-switcher",
  classes: "menu-side-two no-progress-line orange ripple",
  dataPage: "#",
  dataHref: "#",
};

let propsThemeAAA = {
  name: "Theme AAA",
  href: "/theme/aaa",
  classes: "menu-side-two",
  dataPage: "theme",
  dataHref: "theme/aaa",
};
let propsThemeBBB = {
  name: "Theme BBB",
  href: "/theme/bbb",
  classes: "menu-side-two",
  dataPage: "theme",
  dataHref: "theme/bbb",
};

let propsPrimaryUL = {
  classes: "primary-ul",
};
let propsSecondaryUL = {
  classes: "secondary-ul",
};

function TmbUL(props) {
  return <ul className={props.classes}>{props.children}</ul>;
}

function TmbLI(props) {
  let component;
  if (props.href === "/") {
    component = (
      <li
        key={props.name}
        className={props.classes}
        tabIndex="0"
        data-page={props.dataPage}
        data-href={props.dataHref}
      >
        <Link className="internal-anchor" href={props.href} tabIndex="-1">
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
          <div className="home-text-link internal-anchor">{props.name}</div>
        </Link>
      </li>
    );
  } else if (props.href === "#additional-pages") {
    component = (
      <li
        key={props.name}
        data-span={props.name}
        className={props.classes}
        tabIndex="0"
      >
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
            Additional Pages
          </span>
        </div>
        {props.children}
      </li>
    );
  } else if (props.href === "#side-switcher") {
    component = (
      <li
        key={props.name}
        data-span={props.name}
        className={props.classes}
        tabIndex="0"
      >
        <div
          data-for="side-switcher-1"
          data-switcher-target="Additional Pages"
          id="main-menu-1"
          className="return-to-main-menu"
        >
          <span className="necessary-span switch-to-primary-ul" tabIndex="-1">
            Main Menu
          </span>
        </div>
      </li>
    );
  } else {
    component = (
      <li
        key={props.name}
        className={props.classes}
        tabIndex="0"
        data-page={props.dataPage}
        data-href={props.dataHref}
      >
        <Link className="internal-anchor" href={props.href} tabIndex="-1">
          {props.name}
        </Link>
      </li>
    );
  }
  return component;
}

function NewNavList() {
  return (
    <TmbUL {...propsPrimaryUL}>
      <TmbLI {...propsHome}>home</TmbLI>
      <TmbLI {...propsDummy1}>dummy 1</TmbLI>
      <TmbLI {...propsDummy2}>dummy 2</TmbLI>
      <TmbLI {...propsAdditionalPages}>
        <TmbUL {...propsSecondaryUL}>
          <TmbLI {...propsMainMenu}>Main Menu</TmbLI>
          <TmbLI {...propsThemeAAA}>Theme AAA</TmbLI>
          <TmbLI {...propsThemeBBB}>Theme BBB</TmbLI>
        </TmbUL>
      </TmbLI>
      {/*<TmbLI {...propsDoesNotExist}>Does Not Exist</TmbLI>*/}
      {/*<TmbLI {...propsTheme}>Theme</TmbLI>*/}
      <TmbLI {...propsContact}>contact</TmbLI>
    </TmbUL>
  );
}
const Navbar = () => {
  return (
    <nav className="nav" id="header-nav" aria-labelledby="navigation-heading">
      <h2 className="screen-reader" id="navigation-heading">
        Site Navigation
      </h2>

      <NewNavList />
      <div className="progress-line"></div>
    </nav>
  );
};

export default Navbar;
