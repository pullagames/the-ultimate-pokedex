import anime from 'animejs/lib/anime.es.js';

const animateObjectValue = (target, item, value) => {
  anime({
    targets: target,
    item: value,
    easing: 'linear',
    round: 1,
  });
};

export default {
  animateObjectValue,
};
