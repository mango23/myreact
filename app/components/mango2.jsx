import React from "react"

export default class Mango2 extends React.Component{
	constructor(prop){
		super()
	}
	myarray(){
		console.log(2222); // [2, 'c']

	}
	render(){
		return (
			<div onClick={this.myarray}>hello mango2</div>
		)
	}
	
	
}
