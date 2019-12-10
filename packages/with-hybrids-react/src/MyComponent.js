import React, {Component} from 'react';
import moment from 'moment';
import _ from 'lodash';

export default class MyComponent extends Component {

  constructor(props) {
    super(props);
    this.state={
      text: this.getRandomText(),
    }
  }

  getRandomText() {
    return `________${_.random(100)}_${_.uniqueId('s123_')}_${moment().add(2, 'd').toISOString()}`;
  }

  click() {
    this.setState({text: this.getRandomText()})
  }

  render() {

    return (
      <button onClick={() => this.click()}>
        Hello, World! {`________${_.random(100)}_${_.uniqueId('s123_')}_${moment().add(2, 'd').toISOString()}`}
      </button>
    );
  }
}
