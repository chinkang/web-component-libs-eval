import moment from 'moment';
import _ from 'lodash';
import { define, html } from 'hybrids';

export const SimpleCounter = {
  count: 0,
  render: ({count}) => html`
     <div>
         Hello, World! ________${_.random(100)}_${_.uniqueId('s123_')}_${moment().add(2, 'd').toISOString()}
     </div>
  `,
};

define('my-component', SimpleCounter);
