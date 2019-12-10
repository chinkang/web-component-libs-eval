import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import moment from 'moment';
import _ from 'lodash';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private random() : string {
    return `________${_.random(100)}_${_.uniqueId('s123_')}_${moment().add(2, 'd').toISOString()}`
  }

  private getText(): string {
    return format(this.first, this.middle, this.last) + this.random();
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
