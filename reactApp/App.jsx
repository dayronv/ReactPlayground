import React from 'react';


{/* 
TODO: Lower the line number to 50-70 lines 
TODO: use this.xx to pass in styles and write the styles in the
app render.*/}

class App extends React.Component {
   constructor() {
      super();
        
      this.state = {
         data: 
         [
            {
               component: 'B9',
               id: 9
            },
                
            {
               component: 'B8',
               id: 8
            },
                
            {
               component: 'B7',
               id: 7
            },

            {
               id: 6
            },

            {
               id: 5
            },

            {
               id: 4
            },

            {
               id: 3
            },

            {
               id: 2
            },

            {
               id: 1
            },
         ]
      }

   }

   render() {

      var outlineStyle = 
      {
         border: "solid 1px #CDCDCD",
         width: "550px",
         height: "336px"
      };

      var inlineStyle = 
      {
         position: "relative",
         left: "14px",
         top: "32px"
      }

      return (
         <div style={outlineStyle}>
            <div style={inlineStyle}>
               <OutputField display={"Cannot divide by 0"}/>
               <div>
               {/*
                  {this.state.data.map((dynamicComponent, i) => <CalcButton 
                     key = {i} ndata = {dynamicComponent}/>)}
               */}
               <CalcButtonRowTop    n1={'Inv'} n2={'Deg'} n3={'x!'} n4={"("} n5={")"} n6={"C"} n7={"<<"} />
               <CalcButtonRowMiddle n1={'ln'} n2={'sin'} n3={'%'} n4={"7"} n5={"8"} n6={"9"} n7={"/"} />
               <CalcButtonRowMiddle n1={'log'} n2={'cos'} n3={'sqrt'} n4={"4"} n5={"5"} n6={"6"} n7={"x"} />
               <CalcButtonRowMiddle n1={'^'} n2={'tan'} n3={'1/x'} n4={"1"} n5={"2"} n6={"3"} n7={"-"} />
               <CalcButtonRowBottom n1={'Exp'} n2={'pi'} n3={'e'} n4={"0"} n5={"."} n6={"="} n7={"+"} />
               </div>
            </div>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <div>{this.props.componentData.component}</div>
            <div>{this.props.componentData.id}</div>
         </div>
      );
   }
}


class CalcButtonRowTop extends React.Component {
   render()
   {
      return(
         <div>
            <CalcButton ndata = {this.props.n1} />
            <CalcButton ndata = {this.props.n2} />
            <CalcButton ndata = {this.props.n3} />
            <CalcButton ndata = {this.props.n4} />
            <CalcButton ndata = {this.props.n5} />
            <CalcButton ndata = {this.props.n6} />
            <CalcButtonEdge ndata = {this.props.n7} />
         </div>
      )
   }
}

class CalcButtonRowMiddle extends React.Component {
   render()
   {
      return(
         <div>
            <CalcButton ndata = {this.props.n1} />
            <CalcButton ndata = {this.props.n2} />
            <CalcButton ndata = {this.props.n3} />
            <CalcButtonDark ndata = {this.props.n4} />
            <CalcButtonDark ndata = {this.props.n5} />
            <CalcButtonDark ndata = {this.props.n6} />
            <CalcButtonEdge ndata = {this.props.n7} />
         </div>
      )
   }
}

class CalcButtonRowBottom extends React.Component {
   render()
   {
      return(
         <div>
            <CalcButton ndata = {this.props.n1} />
            <CalcButton ndata = {this.props.n2} />
            <CalcButton ndata = {this.props.n3} />
            <CalcButtonDark ndata = {this.props.n4} />
            <CalcButtonDark ndata = {this.props.n5} />
            <CalcButtonBlue ndata = {this.props.n6} />
            <CalcButtonEdge ndata = {this.props.n7} />
         </div>
      )
   }
}

class CalcButton extends React.Component {
   render()
   {
      var buttonStyle = 
      {
         width: "66px",
         height: "40px",
         margin: "4px",
         backgroundColor: "#EEEEEE",
         border: "solid 1px #DDDDDD",
         fontSize: "1.05em",
      };
      
      return(
         <button style={buttonStyle}> {this.props.ndata} </button>
      )
   }
}


class CalcButtonEdge extends React.Component {
   render()
   {
      var buttonStyle = 
      {
         width: "66px",
         height: "40px",
         margin: "4px",
         backgroundColor: "#EEEEEE",
         border: "solid 1px #DDDDDD",
         fontSize: "1.05em",
         color: "#666666"
      };
      
      return(
         <button style={buttonStyle}> {this.props.ndata} </button>
      )
   }
}

class CalcButtonDark extends React.Component {
   render()
   {
      var buttonStyle = 
      {
         width: "66px",
         height: "40px",
         margin: "4px",
         backgroundColor: "#D1D1D1",
         border: "solid 1px #C1C1C1",
         fontSize: "1.05em"
      };

      return(
         <button style={buttonStyle}> {this.props.ndata} </button>
      )
   }
}

class CalcButtonBlue extends React.Component {
   render()
   {
      var buttonStyle = 
      {
         width: "66px",
         height: "40px",
         margin: "4px",
         backgroundColor: "#0072C5",
         border: "solid 1px #0072C5",
         fontSize: "1.05em",
         color: "white"
      };

      return(
         <button style={buttonStyle}> {this.props.ndata} </button>
      )
   }
}

class OutputField extends React.Component {

   render(){

      var inputStyle = {
         marginBottom: "10px",
         width: "520px",
         height: "40px",
         textAlign: "right",
         backgroundColor: "#F2F8FC",
         borderTop: "solid 4px #0072C5",
         borderLeft: "solid 1px #BFDCF0",
         borderBottom: "solid 1px #BFDCF0",
         borderRight: "solid 1px #BFDCF0",
         fontSize: "2em"
      };

      var paddingStyle = {
         paddingRight: "10px"
      };

      return(
         <div style={inputStyle}>
            <span style={paddingStyle}>{this.props.display}</span>
         </div>
      )
   }
}
export default App;