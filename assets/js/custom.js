const navMenu = $('#nav-main');

$('#navtoggle').on('click', () => {
  navMenu.toggleClass('show');
});

// AOS.init({
//   duration: 300,
//   offset: 50
// });

// fetch('http://192.168.0.143/new/enform/cc.php', {
//   method: 'POST',
//   mode: 'cors',
//   credentials: 'include',

//   headers: {
//     'Content-Type': 'application/text',
//     'Access-Control-Allow-Origin': '*'
//   },
//   body: '{"name": "Adit"}'
// })
//   .then(res => res.text())
//   .then(data => console.log(data));

$('.login-grid-item').on('mouseleave', function() {
  $(this)
    .children('.login-grid-info')
    .removeClass('info-vis');
  $(this)
    .children('.login-grid-info')
    .addClass('info-gone');
});
$('.login-grid-item').on('mouseenter', function() {
  $(this)
    .children('.login-grid-info')
    .removeClass('info-gone');
  $(this)
    .children('.login-grid-info')
    .addClass('info-vis');
});
function doAnimations(elems) {
  //Cache the animationend event in a variable
  var animEndEv = 'webkitAnimationEnd animationend';

  elems.each(function() {
    var $this = $(this),
      $animationType = $this.data('animation');
    $this.addClass($animationType).one(animEndEv, function() {
      $this.removeClass($animationType);
    });
  });
}
const carousel = $('#carous');
const firstAnim = carousel
  .find('.item:first')
  .find("[data-animation ^= 'animated']");
doAnimations(firstAnim);
carousel.carousel();
carousel.on('slide.bs.carousel', function(e) {
  var $animatingElems = $(e.relatedTarget).find(
    "[data-animation ^= 'animated']"
  );
  doAnimations($animatingElems);
});
$.fn.extend({
  animateCss: function(animationName, callback) {
    var animationEnd = (function(el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd'
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  }
});

$('#birdy').on('click', function() {
  $(this).animateCss('rubberBand', function() {
    console.log('end');
    $(this).removeClass('animated rubberBand');
  });
});
