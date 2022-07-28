import { LitElement, html, css } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';

import { CARET_LEFT, CARET_RIGHT } from './constants.js';

import './slide-button.js';

@customElement('simple-carousel')
export class SimpleCarousel extends LitElement {

      static override styles = css`

        ::slotted(.slide-hidden){
            display:none;
        }

        ::slotted(*){
          position: absolute;
          padding: 1em;
        }

        :host {
          display: flex;
          flex-direction : row;
          align-items : center;
        }

        #container{
          border-radius: 24px;
          display:flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          margin: 0 18px;
          padding: 1em;
          overflow: hidden;
          position: relative;
          box-shadow: var(--shadow, gray) 0.3em 0.3em 0.4em, var(--highlight, white) -0.1em -0.1em 0.3em;
        }

      `;

    @property({type:Number}) slideIndex = 0;

    @queryAssignedElements() private readonly slideElements!: HTMLElement[];

 override render(){
    return html`
      <slide-button
      @click=${this.navigateToPrevSlide}
      >${CARET_LEFT}</slide-button>
      <div id="container">
        <slot></slot>
      </div>
      <slide-button
      @click=${this.navigateToNextSlide}
      >${CARET_RIGHT}</slide-button>
      `
  }

  override firstUpdated(){
    this.navigateSlide();
  }

  override updated(){
    this.navigateSlide();
  }

  private navigateSlide(){
    for(let i = 0 ; i < this.slideElements.length; i++){
        if(i === this.slideIndex){
            showSlide(this.slideElements[i]);
        }else hideSlide(this.slideElements[i]);
    }
  }

  private changeSlide(offset:number){
    const slideCount = this.slideElements.length;
    this.slideIndex = (slideCount + ((this.slideIndex+offset) % slideCount)) % slideCount;
  }

  navigateToNextSlide(){
    this.changeSlide(1);
  }

  navigateToPrevSlide(){
    this.changeSlide(-1);
  }




}

function hideSlide(el: HTMLElement){
    el.classList.add('slide-hidden');
}

function showSlide(el: HTMLElement){
    el.classList.remove('slide-hidden');
}

declare global {
  interface HTMLElementTagNameMap {
    'simple-carousel' : SimpleCarousel ;
  }
}

