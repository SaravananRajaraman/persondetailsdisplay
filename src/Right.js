import React from 'react';
import './App.css';

/*Note: Receives data from "Left" component and displays details of the person (in table) which is clicked
 on the left side*/
function Right(props)
{
	return(<table>
		<tr><td>Height</td><td>{props.selectedPerson.height}</td></tr>
		<tr><td>Color</td><td>{props.selectedPerson.eye_color}</td></tr>
		<tr><td>Birth_Year</td><td>{props.selectedPerson.birth_year}</td></tr>
		<tr><td>Gender</td><td>{props.selectedPerson.gender}</td></tr>
	</table>)
}
export default Right;


