import './Clock.scss';
import React from 'react';

function MovementSeconds(props) {
  let secondDeg = props.date.getSeconds() * 6;
  return (
    <div
      id="second"
      className="Clock-secondhand"
      style={{ transform: `rotate(${secondDeg}deg)`, transformOrigin: 'center 13vw' }}
    ></div>
  )
}

function MovementMinutes(props) {
  let longDeg = props.date.getMinutes() * 6;
  return (
    <div
      id="long"
      className="Clock-longhand"
      style={{ transform: `rotate(${longDeg}deg)`, transformOrigin: 'bottom' }}
    ></div>
  )
}

function MovementHours(props) {
  let shortDeg = props.date.getHours() > 12 ? ((props.date.getHours() - 12) * 30) : (props.date.getHours() * 30);
  shortDeg += props.date.getMinutes() * 0.5;
  return (
    <div
      id="short"
      className="Clock-shorthand"
      style={{ transform: `rotate(${shortDeg}deg)`, transformOrigin: 'bottom' }}
    ></div>
  );
}

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    let list = [];
    for(var i=1; i<13; i++) {
      list.push(<div className={`Clock__${i}`}>{i}</div>);
    }
    console.log(list);
    return (
      <div className="Clock">
        {list}
        <MovementHours date={this.state.date} />
        <MovementMinutes date={this.state.date} />
        <MovementSeconds date={this.state.date} />
      </div>
    );
  }
};
