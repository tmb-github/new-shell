import Link from "next/link";

let links = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/Shell/",
    classes: "facebook social-icon-anchor no-open-in-new no-border-bottom",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/Shell/",
    classes: "instagram social-icon-anchor no-open-in-new no-border-bottom",
  },
  {
    name: "Pinterest",
    href: "https://www.pinterest.com/Shell/",
    classes: "pinterest social-icon-anchor no-open-in-new no-border-bottom",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/Shell",
    classes: "twitter social-icon-anchor no-open-in-new no-border-bottom",
  },
];

const SocialLinks = () => {
  const listItems = links.map((link) => (
    <li key={link.name}>
      <Link
        className={link.classes}
        href={link.href}
        title={`(Open ${link.name} in new window/tab)`}
      >
        <span className="screen-reader">
          {`(Opens Shell on ${link.name} in new window/tab)`}
        </span>
      </Link>
    </li>
  ));
  return <ul className="social-icons">{listItems}</ul>;
};

export default SocialLinks;
