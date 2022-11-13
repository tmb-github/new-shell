const Hamburger = () => {
  return (
    <>
      <input
        id="hamburger"
        type="checkbox"
        title="hidden checkbox"
        name="ignore"
        value="ignore"
      ></input>
      <label htmlFor="hamburger" tabIndex="0">
        <span className="necessary-span-for-hover-styling">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            role="img"
            aria-labelledby="svg-menu-icon-title"
            aria-describedby="svg-menu-icon-desc"
          >
            <title id="svg-menu-icon-title">menu</title>
            <desc id="svg-menu-icon-desc">three stacked horizontal bars</desc>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="#565656"
              d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
            ></path>
          </svg>
        </span>
      </label>
    </>
  );
};

export default Hamburger;
