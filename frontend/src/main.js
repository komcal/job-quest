import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Content from './components/content';
import Navbar from './components/navbar';
require('../scss/style.scss');
//function start(data){
  class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        eventData: []
      };
    }
    getTrips(){
      $.get('https://www.takemetour.com/api/home', (data) => {
        this.setState({
          eventData: data.inspiration_layouts
        });
        return data;
      });
    }
    render(){
      const a = this.getTrips();
      return(
        <div>
          <Navbar />
          <Content eventData={this.state.eventData} />
        </div>

      );
    }
  }
  ReactDOM.render(<App />, document.querySelector('.page'));
//}
