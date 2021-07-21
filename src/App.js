import { Component } from 'react';
import Timer from './components/timer/Timer';

class App extends Component {

  state = {
    showTimer: true
  }

  handleTick(value) {
    if (value <= 0) {
      this.setState({
        showTimer: false
      })
    }
  }

  render() {
    const { showTimer } = this.state;
    return (
      <div className="container">
        <div className="d-flex justify-content-center p-5">
          {showTimer && <Timer startAt={10} onTick={(value) => this.handleTick(value)} />}
        </div>
      </div>
    );
  }
  
}

export default App;
