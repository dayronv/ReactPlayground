import React from 'react';


{/* 
TODO: Lower the line number to 50-70 lines 
TODO: use this.xx to pass in styles and write the styles in the
app render.*/}

class App extends React.Component {
   constructor() {
      super(); 

      this.state = {
         display: "Hello New"
      }
   }

   handleClick()
   {
      this.setState( { display: "Cleared"} );
   }

   render() {
      return (
         <div>
            <SimpleRender display={this.state.display} dclick={this.handleClick} />
         </div>
      );
   }
}


class SimpleRender extends React.Component {
   render() {
      return(
         <div>
            <span>{this.props.display}</span>
            <br />
            <button onClick={ () => this.state.dclick }>Clear</button>
         </div>
      )
   }
}
export default App;