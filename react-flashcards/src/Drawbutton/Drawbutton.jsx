import React, { Component } from 'react';
import './Drawbutton.css';


class Drawbutton extends Component{
    constructor(props){
        super(props);
        this.drawCard = this.drawCard.bind(this);
    }

    drawCard(){
        this.props.drawCard();
    }

    render(props){
        return(
            <div className="buttonContainer">
                 <button className="btn" onClick={this.drawCard}>Draw Card</button>
            </div>
        )
    }
}

export default Drawbutton