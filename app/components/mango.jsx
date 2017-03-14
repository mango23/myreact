import React from "react"
import Mango1 from "./mango1"
import Mango2 from "./mango2"
import Mango3 from "./mango3"
import Mango4 from "./mango4"
export default class Mango extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return (
			<div>
				<div>hello mango</div>
				<Mango1/>
				<Mango2/>
				<Mango3 />
				<Mango4 />
			</div>
		)
	}
}
