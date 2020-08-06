import React from 'react';
import { Link } from 'react-router-dom'
import Hello from '../containers/Hello'

function Demo() {
  return (
    <div className="demo">
        Test page
        <Hello />
        <p>
            <Link to='/'>Demo 页</Link>
        </p>
    </div>
  );
}

export default Demo;
