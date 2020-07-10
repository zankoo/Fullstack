/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */

import React from 'react';
import Content from './Content';
import Header from './Header';

const Course = ({ course }) => {
  return (
    <div>
      <Header header={course.name} />
      <Content parts={course.parts} />
    </div>
  );
};

export default Course;
