import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Content from './components/content';
import Navbar from './components/navbar';
import Button from './components/button';
require('../scss/style.scss');
//function start(data){
  class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        eventData: [],
        num: 5
      };
    }
    getTrips(){
      $.get('https://www.takemetour.com/api/home', (data) =>{
        console.log(data);
        this.setState({
          eventData: data.inspiration_layouts
        });
        return data;
      });
    }
    amountEvent(clicked){
      this.setState({num:(clicked%2==1)? 7:5});
    }
    render(){
      const data = this.getTrips();
      return(
        <div className="text-center">
          <Navbar />
          <Content eventData={this.state.eventData} num={this.state.num}/>
          <Button amount={this.amountEvent.bind(this)}/>
        </div>

      );
    }
  }
  ReactDOM.render(<App />, document.querySelector('.page'));
//}
