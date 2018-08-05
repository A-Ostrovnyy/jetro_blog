import {TimelineMax} from 'gsap';

let tl = new TimelineMax();

$('.nav__item').mousemove(function( e ) {
  tl.to(this, 0.3, {y: 10, repeat:3, yoyo: true});
});
