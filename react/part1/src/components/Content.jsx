/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React from 'react';
import Part from './Part';
import Sum from './Sum';

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part part={part} key={part.id} />
      ))}
      <Sum parts={parts} />
    </>
  );
};

export default Content;
