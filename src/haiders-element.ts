import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('haiders-element')
export class HaidersElement extends LitElement {
  static override styles = css`
    :host{
      color: blue;
    }
  `;
  override render(){
    return html`<h1>This Element is LIT!</h1>`
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'haiders-element' : HaidersElement ;
  }
}