import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = (props) => {
  const navigation = useNavigate();
  const [count, setCount] = useState(0);
  return (
    <div>
      This is a AboutPage
      <br />
      <Link to='/'>Hello</Link>
      <br />
      <button onClick={(event: any) => setCount(count + 1)}>{count}</button>
    </div>
  );
};
export default AboutPage;
