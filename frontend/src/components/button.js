import React, {Component} from 'react';
var b = 1;
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {a:1};
  }
  onchange(e){
    this.setState({a:this.state.a+1});
    this.props.amount(this.state.a);
  }
  render(){
    return(
        <button className="showall-button" onClick={this.onchange.bind(this)}>All Inspiration</button>
    );
  }

}

export default Button;
