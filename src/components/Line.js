const Line = ({ symbol, title }) => {
  //   return <input className="result-input">{`${symbol} ${title}`}</input>;
  return (
    <div className="result-container" onClick={() => navigator.clipboard.writeText(symbol)}>
      <div>
        <span>{symbol}</span>
        <span>{title}</span>
      </div>
      <span className="copy">Click to copy !</span>
    </div>
  );
  //   return <p className="result-input">test</p>;
};

export default Line;
