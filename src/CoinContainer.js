import React, { Component } from 'react';

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      {sides: 'heads', imgSrc: "https://tinyurl.com/react-coin-heads-jpg"},
      {sides: 'tails', imgSrc: "https://tinyurl.com/react-coin-tails-jpg"}
    ]
  };
  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0
    }    
  }
  render() {
    return (
      <div className='CoinContainer'></div>
    )
  }
} 

export default CoinContainer;