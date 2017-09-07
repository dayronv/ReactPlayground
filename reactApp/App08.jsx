import React from 'react';

class App extends React.Component {

   constructor(props) {
      super(props);
        
      this.state = {
         data: 'Initial data...'
      }

      this.updateState = this.updateState.bind(this);
   };

   updateState(e) {
      this.setState({data: e.target.value});
   }

   render() {
      return (
         <div>
            <Content myDataProp = {this.state.data} 
               updateStateProp = {this.updateState}></Content>
            {/* I added this */}
            <SecondContent NewData = {this.state.data} />
         </div>
      );
   }
}

class Content extends React.Component {

   render() {
      return (
         <div>
            <input type = "text" value = {this.props.myDataProp} 
               onChange = {this.props.updateStateProp} />
            <h3>{this.props.myDataProp}</h3>
         </div>
      );
   }
}

class SecondContent extends React.Component {
   render() {
      return (
         <div>
            <h4>Also updating from second child <br /> -> [{this.props.NewData}] </h4>
         </div>
      );
   }
}
export default App;