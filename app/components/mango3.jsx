import React from 'react';

export default class Mango3 extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			"loading": false,
			"list": [1,2,3,4,5,8]
		};
		this.setdata = this.setdata.bind(this);
	 }
  	setdata(){
  		this.setState({
			"loading": false,
			"list": [2,4,1116,9]
		});
  	}
	
   	render() {
	    return (
	      <div onClick={this.setdata}> 点我
	   
		      <div>
		      		
			      	{this.state.list.map(
			      		x => {
			      			return (
			      				<p>{x}</p>
			      				)
			      			}
			      		)
			      }
		      </div>
		      
	      </div>	
	    )
  }
};
