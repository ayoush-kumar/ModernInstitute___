import React from 'react';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "10px" }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-right" style={{ fontSize: "20px" }}></i>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "10px", zIndex: "1" }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-left" style={{ fontSize: "20px" }}></i>
    </div>
  );
};

export { NextArrow, PrevArrow };
