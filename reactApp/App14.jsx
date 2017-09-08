import React from 'react';

class App extends React.Component {
    constructor() { 
        super();
        this.state = 
        {
            infield: { used: false, name: "Hello" },
            inoutdisplay: { name: "0"}
        }
    }

    handleClick(name)
    {
        this.setState( {inoutdisplay: name} );
    }
    
    render() {

      return(
        <div className="outLine">
         <div className="inLine">
            <OutputField display={"Cannot divide by 0"}/>
            <CalcButtonRow row={[ 
                {cname: 'regButton', kname: 'Inv'}, 
                {cname: 'regButton', kname: 'Deg'},
                {cname: 'regButton', kname: 'x!'},
                {cname: 'regButton', kname: '('},
                {cname: 'regButton', kname: ')'},
                {cname: 'regButton', kname: 'C'},
                {cname: 'regButton', kname: '<<'}
            ]} />
            <CalcButtonRow row={[ 
                {cname: 'regButton', kname: 'ln'}, 
                {cname: 'regButton', kname: 'sin'},
                {cname: 'regButton', kname: '%'},
                {cname: 'darkButton', kname: '7'},
                {cname: 'darkButton', kname: '8'},
                {cname: 'darkButton', kname: '9'},
                {cname: 'regButton', kname: '/'}
            ]} />
            <CalcButtonRow row={[ 
                {cname: 'regButton', kname: 'log'}, 
                {cname: 'regButton', kname: 'cos'},
                {cname: 'regButton', kname: 'sqrt'},
                {cname: 'darkButton', kname: '4'},
                {cname: 'darkButton', kname: '5'},
                {cname: 'darkButton', kname: '6'},
                {cname: 'regButton', kname: 'x'}
            ]} />
            <CalcButtonRow row={[ 
                {cname: 'regButton', kname: '^'}, 
                {cname: 'regButton', kname: 'tan'},
                {cname: 'regButton', kname: '1/x'},
                {cname: 'darkButton', kname: '1'},
                {cname: 'darkButton', kname: '2'},
                {cname: 'darkButton', kname: '3'},
                {cname: 'regButton', kname: '-'}
            ]} />
            <CalcButtonRow row={[ 
                {cname: 'regButton', kname: 'Exp'}, 
                {cname: 'regButton', kname: 'pi'},
                {cname: 'regButton', kname: 'e'},
                {cname: 'darkButton', kname: '0'},
                {cname: 'darkButton', kname: '.'},
                {cname: 'blueButton', kname: '='},
                {cname: 'regButton', kname: '+'}
            ]} />

            <RenderObj validator={this.state.infield} />

         </div>
        </div>
      );
   }
}


class OutputField extends React.Component {
   render(){
      return(
         <div className="inputStyle">
            <span className="fontPadding">{this.props.display}</span>
         </div>
      )
   }
}

class CalcButton extends React.Component {
    render(){
        return(
            <button className={this.props.cname} onClick={() => alert('clicked ' + this.props.display)}> {this.props.display} </button>
        )
    }
}

class CalcButtonRow extends React.Component {
    render(){
        return(
         <div>
            {this.props.row.map((varray) => <CalcButton 
                key={varray.kname} cname={varray.cname} display={varray.kname}/>)}
         </div>
        )
    }
}

class RenderObj extends React.Component {
    constructor() {
        super();

        this.state = {
            value: "Click me",
            haschanged: false,
        };
    }

    changeState(flip)
    {
        if(flip)
        {
            this.setState( {value: "Click me", haschanged: false} );
        } else {
            this.setState( {value: "Changed", haschanged: true});
        }
    }


    render()
    {
        return(
            <div key = {'clickedbtn'} className="ticExp" onClick={() => this.changeState( this.state.haschanged )}> {this.state.value} </div>
        )
    }
}

export default App;