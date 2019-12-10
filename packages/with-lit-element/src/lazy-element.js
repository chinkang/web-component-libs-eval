// Import LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import moment from 'moment';
import 'lodash/lodash';

export class LazyElement extends LitElement {
  /**
   * Define a template for the new element by implementing LitElement's
   * `render` function. `render` must return a lit-html TemplateResult.
   */
  render() {
    console.log(_)
    return html`
      <style>
        :host { display: block; }
        :host([hidden]) { display: none; }
      </style>
      <p> ________${_.random(100)}_${_.uniqueId('s123_')}_${moment().add(2, 'd').toISOString()}</p>
    `;
  }
}
// Register the element with the browser
customElements.define('lazy-element', LazyElement);
