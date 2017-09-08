import React from 'react';

class App extends React.Component {
    constructor() { 
        super();
    }
    
    render() {

      return(
        <div>
            <div>
                <SearchBar />
            </div>
            <div className="outLine">
                <Ticket name={"#2"}/>
            </div>
        </div>
      );
   }
}

class Ticket extends React.Component {
    render()
    {
        return(
            <div>
                <div className="ticketHeader"> <strong> Request </strong> {this.props.name} </div>
                <div>
                    <div className="ticketField-left" > <em>time</em> </div>
                    <div className="ticketField-right" > ? </div>
                </div>
                <div>
                    <div className="ticketField-left" > <strong>2</strong> </div>
                    <div className="ticketField-right" > data </div>
                </div>
                <div>
                    <div className="ticketField-left" > <strong>3</strong> </div>
                    <div className="ticketField-right" > data </div>
                </div>
                <div>
                    <div className="ticketField-left" > <strong>4</strong> </div>
                    <div className="ticketField-right" > data </div>
                </div>
                <div>
                    <div className="ticketField-left" > <strong>5</strong> </div>
                    <div className="ticketField-right" > data </div>
                </div>
                <div>
                    <div className="ticketField-left" > <strong>6</strong> </div>
                    <div className="ticketField-right" > data </div>
                </div>
                <div>
                    <div className="ticketField-left" > <strong>7</strong> </div>
                    <div className="ticketField-right" > data </div>
                </div>
                <div>
                    <div className="ticketField-left" > <strong>8</strong> </div>
                    <div className="ticketField-right" > data </div>
                </div>
                <div>
                    <div className="ticketField-left" > <strong>9</strong> </div>
                    <div className="ticketField-right" > data </div>
                </div>
                <div>
                    <div className="ticketField-left" > <strong>10</strong> </div>
                    <div className="ticketField-right" > data </div>
                </div>
                <div>
                    <div className="ticketField-left" > <strong>11</strong> </div>
                    <div className="ticketField-right" > data </div>
                </div>

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

class SearchBar extends React.Component {
    render()
    {
        return(
            <div>
                <div className="searchBar"><em>Search here...</em></div>
            </div>
        )
    }
}

export default App;