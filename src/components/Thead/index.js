import React from 'react';

function Thead({ text }) {
  return (
    <thead className='thead-dark'>
      <tr>
        {text.map((text, index) => {
          return <th key={index}>{text}</th>;
        })}
      </tr>
    </thead>
  );
}

export default Thead;
