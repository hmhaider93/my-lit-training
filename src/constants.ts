import { html } from "lit";

export const CARET_LEFT = html`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
  <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
</svg>
`

export const CARET_RIGHT = html`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
  <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
</svg>
`

const SLIDE_OUT_BACK_LEFT: Keyframe[] = [
    {transform: 'translateX(0)'},
    {transform: 'translateX(-100vw)'}
];
const SLIDE_OUT_BACK_RIGHT: Keyframe[] = [
    {transform: 'translateX(0)'},
    {transform: 'translateX(100vw)'}
];

const FORWARD_ANIMATION_OPTS: KeyframeAnimationOptions ={
    duration: 500,
    easing: 'ease-in-out',
    iterations: 1,
}
const REVERSE_ANIMATION_OPTS: KeyframeAnimationOptions ={
    ...FORWARD_ANIMATION_OPTS,
    direction: 'reverse'
}

export type AnimationTuple = [Keyframe[], KeyframeAnimationOptions]

export const SLIDE_LEFT_OUT: AnimationTuple = [SLIDE_OUT_BACK_LEFT, FORWARD_ANIMATION_OPTS];
export const SLIDE_RIGHT_OUT: AnimationTuple = [SLIDE_OUT_BACK_RIGHT, FORWARD_ANIMATION_OPTS];
export const SLIDE_LEFT_IN: AnimationTuple = [SLIDE_OUT_BACK_LEFT, REVERSE_ANIMATION_OPTS];
export const SLIDE_RIGHT_IN: AnimationTuple = [SLIDE_OUT_BACK_RIGHT, REVERSE_ANIMATION_OPTS];
