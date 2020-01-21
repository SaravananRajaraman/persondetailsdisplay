import React from 'react';
import selectedEmployee from './images/selected_tick.jpg';
import unSelectedEmployee from './images/circle.png';
import Header from './Header';
import Right from './Right';
import {Image, Span} from './StyledComponents';

/*Note: Receives data from App and display in on website left side and selected item details will be 
passed to "Right" component*/
class Left extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state=({data:this.props.data, nowSelected: "Select Person",pageDesc:""});
	}

	handleSelection(e, idx)
	{	
		//store selected name and its details in store object.
		const index =  idx;
		const ix = Number(index);
		this.setState({nowSelected:this.state.data[ix].name});
		this.setState({pageDesc:this.state.data[ix]})
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
				 		<div key={idx} onClick={(e)=>{this.handleSelection(e, idx)}}>
							{nowSelected === x.name ? <Image src={selectedEmployee}></Image>:<Image src={unSelectedEmployee}></Image>}
	  						<Span>{x.name}</Span>
  						</div>
					</label>
				</div>))}</div>
				<Right selectedPerson={pageDesc}/>
		</div>)
	}
}
export default Left;