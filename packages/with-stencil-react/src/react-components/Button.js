import React from "react";
import moment from 'moment';
import _ from 'lodash';

function Button({text}) {
  const getRandomText = () => `________${_.random(100)}_${_.uniqueId('s123_')}_${moment().add(2, 'd').toISOString()}`;
  const [text2, setText2] = React.useState(getRandomText());
  const click = () => {
    debugger
    setText2(getRandomText());
  };
  return (
    <button onClick={() => click()}>hello {text} {text2}</button>
  );
}

export default Button;
