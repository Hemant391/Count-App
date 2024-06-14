import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App';



class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state ={count :0}
  }

  increment=()=>{
    this.setState((prev)=>{
      return {count : prev.count+1}
    })
  }
  decrement=()=>{
    this.setState((prev)=>{
      return {count : prev.count-1}
    })
  }
  
  render(){
    return (
      <div >
      <h1>Counter App</h1>
      <p>Count: {this.state.count}</p>
      <button type="button" onClick={this.increment}>Increment</button>
      <button type="button" onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Counter />
);
