import React, { Component } from 'react';

class Counter extends Component {
    state = {
        // count:this.props.value
    };

    // handleIncrement = (e) => {
    //     this.setState({count: this.state.count + 1})
    // }
    // render() { 
    //     return (
    //         <div>
    //             <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
    //             <button onClick={ () => this.handleIncrement()} className='btn btn-secondary'>increment</button>
    //         </div>
    //     );
    // } 
    // getBadgeClasses() {
    //     let classes = "badge m-2 bg-"
    //     classes += this.state.count === 0 ? "primary" : "warning"
    //     return classes
    // }
    // formatCount() {
    //     const {count} = this.state
    //     return count === 0 ? "zero" : count 
    // }

}
 
export default Counter;