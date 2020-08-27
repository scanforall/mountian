const humburger = document.querySelector('.humburger');
const slidingWindow = document.querySelector('.sliding-window');
const close = slidingWindow.querySelector('.close');
const socials = document.querySelector('.header__buttons')


humburger.addEventListener('click', function() {
  slidingWindow.classList.add('open');
  socials.classList.add('none')
});

close.addEventListener('click', ()=> {
  slidingWindow.classList.remove('open');
  socials.classList.remove('none')
})
