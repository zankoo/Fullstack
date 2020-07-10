/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React from 'react';
import Course from './Course';

const App = ({ courses }) => {
  return courses.map((course) => <Course course={course} key={course.id} />);
};

export default App;
