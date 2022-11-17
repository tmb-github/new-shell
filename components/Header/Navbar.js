import Link from "next/link";
import Image from "next/image";

let propsHome = {
  name: "Home",
  href: "./",
  classes: "menu-side-one",
  dataPage: "home",
  dataHref: "home",
};
let propsDummy1 = {
  name: "Dummy 1",
  href: "./dummy-1",
  classes: "menu-side-one",
  dataPage: "dummy-1",
  dataHref: "dummy-1",
};
let propsDummy2 = {
  name: "Dummy 2",
  href: "./dummy-2",
  classes: "menu-side-one",
  dataPage: "dummy-2",
  dataHref: "dummy-2",
};
let propsDummy3 = {
  name: "Dummy 3",
  href: "./dummy-3",
  classes: "menu-side-one",
  dataPage: "dummy-3",
  dataHref: "dummy-3",
};
let propsDummy4 = {
  name: "Dummy 4",
  href: "./dummy-4",
  classes: "menu-side-two",
  dataPage: "dummy-4",
  dataHref: "dummy-4",
};
let propsDummy5 = {
  name: "Dummy 5",
  href: "./dummy-5",
  classes: "menu-side-two",
  dataPage: "dummy-5",
  dataHref: "dummy-5",
};
let propsDummy6 = {
  name: "Dummy 6",
  href: "./dummy-6",
  classes: "menu-side-two",
  dataPage: "dummy-6",
  dataHref: "dummy-6",
};
let propsContact = {
  name: "Contact",
  href: "./contact",
  classes: "menu-side-one orange ripple",
  dataPage: "contact",
  dataHref: "contact",
};
let propsAdditionalPages = {
  name: "Additional Pages 1",
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
  if (props.href === "./") {
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
            Additional Pages 1
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
          data-switcher-target="Additional Pages 1"
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
          <TmbLI {...propsDummy3}>dummy 3</TmbLI>
          <TmbLI {...propsDummy4}>dummy 4</TmbLI>
          <TmbLI {...propsDummy5}>dummy 5</TmbLI>
          <TmbLI {...propsDummy6}>dummy 6</TmbLI>
        </TmbUL>
      </TmbLI>
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
