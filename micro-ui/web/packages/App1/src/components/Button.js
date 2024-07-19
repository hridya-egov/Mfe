import React, { useEffect } from 'react';

const Button = () => {
  useEffect(() => {
    console.log('Button1 component mounted');
  }, []);

  return (
    <button>
      Click Me!
    </button>
  );
};

export default Button;
