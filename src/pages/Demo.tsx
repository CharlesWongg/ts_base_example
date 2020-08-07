import React from 'react';
import { Link } from 'react-router-dom'
import Hello from '../containers/Hello'
import HelloOfClass from '../containers/HelloOfClass'

function Demo() {
  return (
    <div className="demo">
        Demo page
        <Hello />
        <HelloOfClass />
        <p>
            <Link to='/test'>Test 面</Link>
        </p>
    </div>
  );
}

export default Demo;
