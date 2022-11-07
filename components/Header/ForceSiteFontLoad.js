const ForceSiteFontLoad = () => {
  return (
    <p
      className="visually-hidden speak-none"
      aria-hidden="true"
      data-purpose="To force loading of site fonts"
    >
      <span className="load-roman">&nbsp;</span>
      <span className="load-italic">&nbsp;</span>
      <span className="load-bold">&nbsp;</span>
      <span className="load-bold-italic">&nbsp;</span>
    </p>
  );
};

export default ForceSiteFontLoad;
