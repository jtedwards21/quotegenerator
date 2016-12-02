import React from "react";

export default class Generator extends React.Component {
  constructor(props) {
    super(props);

    this.quotes = {
  	"Albert Einstein":"Insanity: doing the same thing over and over again and expecting different results.",
  	"Jimmy Dean":"I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  	"Audrey Hepburn":"Nothing is impossible, the word itself says 'I'm possible'!"
    };

    this.state = {
      author: "",
      quote: ""
    };
    this.changeQuote.bind(this);
  }
  getRand(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  changeQuote(){
    var keys = Object.keys(this.quotes);
    var rand = this.getRand(0, keys.length - 1);
    this.setState({quote: this.quotes[keys[rand]]});
    this.setState({author: keys[rand]});
  }
  componentDidMount(){
    this.changeQuote();
  }
  render() {
    return (
	　　<div className="quote-box">
	    <div className="title">Classic Quotes</div>
	　　　　<span className="quote">{this.state.quote}</span>
    　　　　　　　　<span className="author">{this.state.author}</span>
	    <div className="img-container"><img onClick={this.changeQuote.bind(this)} src="img/switch.png" id="quote-btn" className="switch" /></div>
  　　　　　　　　</div>
    );
  }
}
