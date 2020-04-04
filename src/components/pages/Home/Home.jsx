import React from 'react';

import TestTemplate from "../../templates/TestTmeplate";

const env = process.env.NODE_ENV;

const Home = () => {
  console.log('> env : ', env)
  return (
    <TestTemplate>
      Home ddd / {env}
    </TestTemplate>
  )
};

export default Home;