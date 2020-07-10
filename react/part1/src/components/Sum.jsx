/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */

import React from 'react';

const Sum = ({ parts }) => {
  return <p>Total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</p>;
};

export default Sum;
