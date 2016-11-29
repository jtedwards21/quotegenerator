import React from "react";

export default class Generator extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }
  render() {
    return (
	　　<div className="quote-box">
	    <div className="title">Classic Quotes</div>
	　　　　<span className="quote">Insanity: doing the same thing over and over again and expecting different results.</span>
    　　　　　　　　<span className="author">Albert Einstein</span>
	    <img src="img/switch.png" id="quote-btn" className="switch" />
  　　　　　　　　</div>
    );
  }
}
