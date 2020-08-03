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
  .set([$envBack, $envFront, $card], {scale: 0.9})
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
  //       // $('#picture').css('-webkit-transform','rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)');
  //   });
});

function addImg(key) {
  if (dataset[key]) {
    let entry = dataset[key];
    let recipient = entry.recipient ? entry.recipient : "-";
    
    let h1Recipient = document.querySelector("h1#recipient");
    h1Recipient.innerHTML = "To: " + recipient;

    let h2Recipient = document.querySelector("h2#card-recipient");
    h2Recipient.innerHTML = "Dear " + recipient;

    let message = document.querySelector("#card-message");
    message.innerHTML = entry.message.replace(/\n/, "<br />");

    let regards = document.querySelector("#card-sender");
    regards.innerHTML = "Regards,<br />" + entry.name + ", " + entry.prodigy;

    let container = document.querySelector(".rewards-container");
    var injectHTML = "";
    if (entry.HomeLivingSet) {
      injectHTML += '<img class="rewards" src="./merch/HomeLivingSet.gif" />';
    }
    if (entry.ElectronicSet) {
      injectHTML += '<img class="rewards" src="./merch/ElectronicSet.gif" />';
    }
    if (entry.AccessoriesSet) {
      injectHTML += '<img class="rewards" src="./merch/AccessoriesSet.gif" />';
    }
    if (entry.StationarySet) {
      injectHTML += '<img class="rewards" src="./merch/StationarySet.gif" />';
    }
    if (entry.PCSet1) {
      injectHTML += '<img class="rewards" src="./merch/PCSet1.jpg" />';
    }
    if (entry.PCSet2) {
      injectHTML += '<img class="rewards" src="./merch/PCSet2.jpg" />';
    }
    if (entry.Headphone) {
      injectHTML += '<img class="rewards" src="./merch/Headphone.gif" />';
    }
    if (entry.PassportCover) {
      injectHTML += '<img class="rewards" src="./merch/PassportCover.gif" />';
    }
    if (entry.LaptopCover) {
      injectHTML += '<img class="rewards" src="./merch/LaptopCover.gif" />';
    }
    if (entry.NightstandLamp) {
      injectHTML += '<img class="rewards" src="./merch/NightstandLamp.gif" />';
    }
    if (entry.ComfortCushion) {
      injectHTML += '<img class="rewards" src="./merch/ComfortCushion.gif" />';
    }
    container.innerHTML = injectHTML;
  } 
}

window.onload = () => {
  let url = new URL(window.location.href);
  let searchParams = new URLSearchParams(url.search);
  let from = searchParams.get("from");
  let to = searchParams.get("to");
  var key = from + "|" + (to ? to : "");
  console.log(key);
  addImg(key);
}