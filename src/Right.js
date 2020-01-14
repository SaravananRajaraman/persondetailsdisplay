import React from 'react';
import './App.css';

class Right extends React.Component
{

	render()
	{
		const {selectedPerson} = this.props;
		return(<div  className="right">
			<div>Height: {selectedPerson.height}</div>
			<div>Color: {selectedPerson.eye_color}</div>
			<div>Birth_Year: {selectedPerson.birth_year}</div>
			<div>Gender: {selectedPerson.gender}</div>
			</div>)
	}
}
export default Right;
