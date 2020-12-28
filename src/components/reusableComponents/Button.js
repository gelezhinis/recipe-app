import React from 'react';

const Button = ({btnText, handleClick}) => (
   <button className="btn" onClick={handleClick}>{btnText}</button>
);

export default Button;