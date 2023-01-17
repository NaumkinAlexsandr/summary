const Cards = ({ className, project, tehnology, href }) => {
  return (
    <div className="cardProject">
      <div className={className}></div>
      <h3>{project}</h3>
      <h4>{tehnology}</h4>
      <a target="_blank" href={href}></a>
    </div>
  );
};

export { Cards };
