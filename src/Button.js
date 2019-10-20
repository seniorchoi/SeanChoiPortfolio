import React from 'react';
import {Animated} from "react-animated-css";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onLoad:false,
      on:false,
    }
  }

  clickHandle(){
    if(!this.state.on){
        this.setState({on: true,onLoad: true})
    } else this.setState({on:false})
  }


  render() {
    const on = this.state.on
    const imgUrl = "https://qph.fs.quoracdn.net/main-qimg-480ffc8e55f42a956308aaea6b1538dc"
    return (
      <div>
          <div>
            <button
              className="button"
              onClick={()=> this.clickHandle()}>
                Click me!
              </button>
          </div>
          <div className="cards">
            {this.state.onLoad?
                <Animated animationIn="tada"
                  animationOut="bounceOut" animationInDuration={1000} animationOutDuration={1000} isVisible={on?true:false}>
                <img src={imgUrl}/>
              </Animated>:null}
          </div>


      </div>
    );
  }
}

export {Button as default} ;
