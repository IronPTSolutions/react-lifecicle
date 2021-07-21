
import { Component } from 'react';

class Timer extends Component {

  state = {
    value: this.props.startAt,
    stepIntervalId: undefined
  }

  componentDidMount() {
    console.log('Timer component did mount')
    const { stepDuration } = this.props;
    const stepIntervalId = setInterval(() => this.onStep(), stepDuration);
    this.setState({ stepIntervalId });
  }

  componentWillUnmount() {
    console.log('Timer component will unmount');
    const { stepIntervalId } = this.state;
    clearInterval(stepIntervalId);
  }

  onStep() {
    this.setState((prevState) => {
      const value = prevState.value - 1;
      this.props.onTick(value);
      return {
        ...prevState,
        value
      }
    });
  }

  componentDidUpdate(oldProps) {
    console.log('Timer component did update', oldProps);
  }

  render() {
    return (
      <div className="alert alert-secondary">
        <strong>{this.state.value}</strong>
      </div>
    );
  }
}

Timer.defaultProps = {
  startAt: 10,
  stepDuration: 1000,
  onTick: () => {}
}

export default Timer;
