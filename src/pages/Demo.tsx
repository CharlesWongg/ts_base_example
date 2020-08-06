import React from 'react';
import { Link } from 'react-router-dom'
import Hello from '../containers/Hello'

function Demo() {
  return (
    <div className="demo">
        Demo page
        <Hello />
        <p>
            <Link to='/test'>Test 面</Link>
        </p>
    </div>
  );
}

export default Demo;
