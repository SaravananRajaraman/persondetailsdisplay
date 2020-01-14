import React from 'react';
import selectedEmployee from './images/selected_tick.jpg';
import unSelectedEmployee from './images/circle.png';
import Header from './Header';
import Right from './Right';
class Left extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state=({data:this.props.data, nowSelected: "Select Person",pageDesc:""});
		this.handleSelection = this.handleSelection.bind(this);
	}

	handleSelection(e, idx)
	{	
		const index =  idx;//e.target.value;
		const ix = Number(index);
		this.setState({nowSelected:this.state.data[ix].name});
		this.setState({pageDesc:this.state.data[ix]})
		//console.log("=====handling selection =====" +  JSON.parse(JSON.stringify(index)).idx);
		console.log("=====handling selected====="+this.state.data[ix].name);
		console.log("=====handling selected page description ====="+this.state.data[ix].desc);
	}
	render()
	{
		const {nowSelected,pageDesc} = this.state;
		return(<div>
				<Header selectedName={nowSelected}/>
				<div className="left-content">
				{this.state.data.map((x,idx) =>
				 (<div className="listItem">
					 <label htmlFor={x} >
				 		<div key={idx} onClick={(e) => this.handleSelection(e, idx)}>
							{nowSelected === x.name ? <img src={selectedEmployee}/>:<img src={unSelectedEmployee}/>}
	  						<span>{x.name}</span>
  						</div>
					</label>
				</div>))}</div>
				<Right selectedPerson={pageDesc}/>
		</div>)
	}
}
export default Left;