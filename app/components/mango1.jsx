import React from "react"

export default class Mango1 extends React.Component{
	constructor(props){
		super(props)
	}
	saysth(){
		let mydata = [1,2,3,4]
		console.log(mydata)
		
	}
	render(){
		return (
			<div onClick={this.saysth}>hello mango1</div>
		)
	}
}
