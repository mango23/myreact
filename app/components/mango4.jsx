import React from 'react';
import ReactDOM from 'react-dom';

export default class Mango3 extends React.Component{
	
	constructor(props){
		super(props);
		this.settxt = this.settxt.bind(this);
		this.state = {
			"loading": false,
			"mytxt": "hello"
		};
	 }
  	settxt(){
  		let name = ReactDOM.findDOMNode(this.refs.name).value;
  		this.setState({
			"loading": false,
			"mytxt": name
		});
  		console.log(name)
  	}
	
   	render() {
   		
	    return (
	      <div >
	      	<input type="text"  ref="name" placeholder="write some thing" onInput={this.settxt}/>
	      	<button onClick={this.settxt}>click me!</button>
	      	<p>{this.state.mytxt}</p>
	      </div>	
	    )
  }
};
