import React from 'react';
import './App.css';
import Circles from './components/Circles/Circles';
import CircleSelector from './components/CircleSelector/CircleSelector';

const nums = [0, 1, 2, 3];

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      circlesIdx: 0,
      buttonsIdx:0,
    };
  }

  handleClick = (buttonsIdx,circlesIdx) => {
    this.setState({buttonsIdx: buttonsIdx, circlesIdx:buttonsIdx})
    console.log(buttonsIdx);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
          nums={nums} 
          buttonsIdx={this.state.buttonsIdx}
          handleClick={this.handleClick}/>
          <Circles 
          nums={nums} 
          circlesIdx={this.state.circlesIdx}/>
        </main>
      </div>
    );
  }
}

export default App;
