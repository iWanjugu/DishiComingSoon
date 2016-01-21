// VEGAS
// Background SLideShow
// Codepen Demo
// http://vegas.jatysalvat.com

// Pictures from Unsplash
// http://unsplash.com/

$('body').vegas({
  overlay: true,
  transition: 'fade',
  transitionDuration: 4000,
  delay: 10000,
  animation: 'random',
  animationDuration: 20000,
  slides: [
    { src:"assets/food3.jpg" },
    { src: "assets/food4.jpg" },
  ]
});
