import React from 'react';

function FooterDiv() {
    return ( 
        <div className='footdiv'>
          <p className='para'>You have 2 pending tasks</p>
          <button className=' btn-danger my-btn'>Clear All</button>
        </div>
     );
}

export default FooterDiv;