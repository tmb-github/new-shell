import Link from "next/link";

const SkipToMainContent = () => {
  return (
    <Link
      id="skip-to-main-content"
      className="hash-anchor skip-to-main-content"
      href="https://localhost:3000/#main-content"
      tabIndex="-1"
    >
      Skip to main content
    </Link>
  );
};

export default SkipToMainContent;
