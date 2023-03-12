const Box = (props) => {
  const { className, text } = props;

  return (
    <div className={`box ${className}`}>
      <p className="box-title">{text}</p>
    </div>
  );
};

const element = (
  <div className="boxes-app-container">
    <h1 className="title">Boxes</h1>
    <div className="boxes-container">
      <Box className="small-box" text="Small" />
      <Box text="Medium" className="medium-box" />
      <Box text="Large" className="large-box" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
