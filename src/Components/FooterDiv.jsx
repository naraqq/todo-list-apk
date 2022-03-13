import React from 'react';

function FooterDiv(props) {
    return ( 
        <div className='footdiv'>
          <p className='para'>You have {props.arrLength} pending tasks</p>
          <button onClick={props.clearAll} className=' btn-danger my-btn'>Clear All</button>
        </div>
     );
}

export default FooterDiv;