import Link from "next/link";

let links = [
  { name: "Home", href: "./" },
  { name: "Dummy1", href: "./dummy1" },
  { name: "Dummy2", href: "./dummy2" },
  { name: "Dummy3", href: "./dummy3" },
  { name: "Contact", href: "./contact" },
];

function NavList() {
  const listItems = links.map((link) => (
    <li key={link.name}>
      <Link href={link.href}>{link.name}</Link>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

const Navbar = () => {
  return (
    <nav>
      <NavList />
    </nav>
  );
};

export default Navbar;
