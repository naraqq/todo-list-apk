import React from 'react';





function HeaderDiv(props) {
    // console.log(this.props.actionName);
    return ( 
        
        <div className='headDiv'>
          <h1 className='head'>Todo App</h1>
          <div className='headin'>
              <input className='form-control myform' onChange={props.userText} type="text" placeholder='Add your new todo' />
              <div className='m-3'></div>
              <button onClick={props.myFunc} className='btn btn-info text-white'>+</button>
          </div>
        </div>

     );
}

export default HeaderDiv;