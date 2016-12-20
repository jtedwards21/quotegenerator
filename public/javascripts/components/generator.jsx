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
    var uriComp = encodeURIComponent('"' + this.state.quote + '" ' + this.state.author);
    var href = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + uriComp;
    return (
	　　<div className="quote-box">
	    <div className="title">Classic Quotes</div>
	　　　　<span className="quote">{this.state.quote}</span>
    　　　　　　　　<span className="author">{this.state.author}</span>
	　　　　<a href={href}><div className="twitter-btn"><img className="twitter" src="img/twitter.png" /></div></a>
	    <div className="img-container"><img onClick={this.changeQuote.bind(this)} src="img/switch.png" id="quote-btn" className="switch" /></div>
　　　　　　　　　　　<div><a href="https://github.com/jtedwards21/quotegenerator" className="" id="github-container"><img id="github-img" src="/img/github.png"/><p>Check out the code on github</p></a></div>
  　　　　　　　　</div>
    );
  }
}
