import REWARDS from "./database.js";

var tl = new TimelineMax();

var $container = $(".container"),
    $envelope = $(".envelope"),
    $envFront = $(".front"),
    $envBack = $(".back"),
    $envBack1 = $(".back1"),
    $envBack2 = $(".back2"),
    $topFlap = $(".top"),
    $card = $(".card"),
    $outerBG = $(".outerBG"),
    $outerBlank = $(".outerBlank"),
    $innerBG = $(".innerBG"),
    $greetings = $(".greetings"),
    $window = $(window);

    

tl.set($container, {perspective:1100})
  .set($envelope, {transformStyle:"preserve-3d"})
  .set($envBack, {rotationY:-180})
  .set([$envBack, $envFront], {backfaceVisibility:"hidden"})
  .set([$envBack, $envFront, $card], {scale: 0.6})
  .set($topFlap, {transformOrigin: "center top"})
  .set($card, {rotationY: -180, autoAlpha: 1})
  .set($outerBG, {backfaceVisibility:"hidden"})
  .set($greetings, {autoAlpha: 0});




$container.click(function(){
    tl.to($envelope, 1, {rotationY: 180})
      .to($topFlap, 1, {rotationX: 180})
      .to($envBack1, 0.5, {zIndex: 0}, 1)
      .to($card, 1, {autoAlpha: 1}, 1.3)
      .to($card, 1.3, {y: -300}, 1.3)
      .to($card, 1, {zIndex: 100, y: 0}, 2.3)
      .to([$envFront, $envBack], 0.5, {autoAlpha: 0}, 2.9)
      .to([$outerBG, $outerBlank], 1, {rotationX: -165})
      .to($greetings, 0.5, {autoAlpha: 1});
  
  // $card.mousemove(function(event) {
  //       cx = Math.ceil($container.width() / 2.0);
  //       cy = Math.ceil($container.height() / 2.0);
  //       dx = event.pageX - cx;
  //       dy = event.pageY - cy;

  //       tiltx = (dy / cy);
  //       tilty = - (dx / cx);
  //       radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
  //       degree = (radius * 20);
  //       TweenLite.set($envelope, {transform:'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)'});
  //       $('#picture').css('-webkit-transform','rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)');
  //   });
});