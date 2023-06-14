
import React from 'react';
import { Link } from 'react-router-dom';

const NoPage = () => {
  return (
    <>
      <header>
        <h1>Error 404: Page not Found</h1>
        <p>You might be lost. <Link to="/">Go Back.</Link></p> 
      </header>
    </>
  );
}

export default NoPage;
