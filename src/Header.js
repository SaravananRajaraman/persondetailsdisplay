import React from 'react';
import {HeaderItem} from './StyledComponents';

/*Note: Displays Selected person name in Header which is received from "Left* component*/
function Header(props)
{
	return(<div>
		<HeaderItem>{props.selectedName}</HeaderItem>
	</div>)
}

export default Header;	