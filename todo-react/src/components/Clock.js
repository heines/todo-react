import './Clock.scss';
import React from 'react';

function MovementHours(props) {
  let shortDeg = props.date.getHours() > 12 ? ((props.date.getHours() - 12) * 30) : (props.date.getHours() * 30);
  shortDeg += props.date.getMinutes() * 0.5;
  return (
    <div>
      <div
        className="Clock__hourhand"
        style={{ transform: `rotate(${shortDeg}deg)`, transformOrigin: 'center bottom' }}
      ></div>
      <div className="Clock__hour-center"></div>
    </div>
  );
}

function MovementMinutes(props) {
  let longDeg = props.date.getMinutes() * 6;
  return (
    <div>
      <div
        className="Clock__minutehand"
        style={{ transform: `rotate(${longDeg}deg)`, transformOrigin: 'center bottom' }}
      ></div>
      <div className="Clock__minutehand-center"></div>
    </div>
  );
}

function MovementSeconds(props) {
  let secondDeg = props.date.getSeconds() * 6;
  return (
    <div>
      <div
        className="Clock__secondhand"
        style={{ transform: `rotate(${secondDeg}deg)`, transformOrigin: 'center 13vw' }}
      ></div>
      <div className="Clock__secondhand-center"></div>
    </div>
  )
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

  handleClick(e) {
    e.preventDefault();
  }

  render() {
    let list = [];
    for(var i=1; i<13; i++) {
      list.push(<div className={`Clock__${i}`} key={`${i}`}>{i}</div>);
    }
    return (
      <div
        className="Clock"
        onClick={this.handleClick}
      >
        {list}
        <MovementHours date={this.state.date} />
        <MovementMinutes date={this.state.date} />
        <MovementSeconds date={this.state.date} />
      </div>
    );
  }
};
