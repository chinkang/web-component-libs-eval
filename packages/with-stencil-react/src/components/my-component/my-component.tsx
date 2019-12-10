import { Component, Element, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import ReactDOM from 'react-dom';
import React from "react";
import Button from '../../../lib-dist/Button';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  @Element() el: HTMLElement;
  @Prop() first: string;
  @Prop() middle: string;
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  componentDidLoad() {
    const domContainer = this.el.shadowRoot.querySelector("#root123"); // try getElementById
    ReactDOM.render(React.createElement(Button, {
      text: this.getText(),
    }), domContainer);
  }


  render() {
    return <div>
      <div id="root123" />
      <p>The React event is not fired :(</p>
    </div>;
  }
}
