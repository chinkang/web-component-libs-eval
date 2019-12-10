import React, {Component} from 'react';
import moment from 'moment';
import _ from 'lodash';

export default class MyComponent extends Component {

  render() {
    return (
      <div>
        Hello, World! {`________${_.random(100)}_${_.uniqueId('s123_')}_${moment().add(2, 'd').toISOString()}`}
      </div>
    );
  }
}

