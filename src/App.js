import React from 'react';
import Left from './Left';

/*Note: fetch data from url and pass it to "Left" component*/
class App extends React.Component
{
  constructor()
  {
    super();
    this.state = {data:[]};
  }
  componentDidMount()
  {
    //fetch person data from from url and store it in state object.
    fetch(`https://swapi.co/api/people/?format=json`)
   .then(response => response.json())
    .then(data => {console.log(data);
      this.setState({data:data.results});
    })
  }
  render()
  {
    return(<div>
         {this.state.data && this.state.data.length>0 && <Left data={this.state.data}/>}
      </div>)
  }
}

export default App;
