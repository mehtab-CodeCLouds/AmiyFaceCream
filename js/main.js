// Fixed navbar
// =================================

$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $("header").addClass("fixed-nav");
  } else {
    $("header").removeClass("fixed-nav");
  }
});

$("#hero-slider").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  items: 1,
  smartSpeed: 450,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
});

$("#popular-product-slider").owlCarousel({
  loop: true,
  nav: true,
  dots: true,
  items: 4,
  margin: 32,
  navText: [
    "<i class='fa-regular fa-arrow-left-long'></i>",
    "<i class='fa-regular fa-arrow-right-long'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    520: {
      items: 2,
    },
    767: {
      items: 3,
      margin: 20,
    },
    1200: {
      items: 4,
    },
  },
});

$("#customer-favorites-slider").owlCarousel({
  loop: true,
  nav: true,
  dots: true,
  items: 3,
  margin: 32,
  navText: [
    "<i class='fa-regular fa-arrow-left-long'></i>",
    "<i class='fa-regular fa-arrow-right-long'></i>",
  ],
  stagePadding: 250,
  responsive: {
    0: {
      items: 1,
      stagePadding: 15,
    },
    400: {
      items: 1,
      stagePadding: 80,
    },
    767: {
      items: 2,
      stagePadding: 150,
    },
    993: {
      items: 2,
      margin: 20,
      stagePadding: 200,
    },
    1200: {
      items: 3,
      stagePadding: 250,
    },
    1680: {
      items: 4,
      stagePadding: 0,
    },
  },
});

$("#testimonial-slider").owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  items: 2,
  margin: 32,
  navText: [
    "<i class='fa-regular fa-arrow-left-long'></i>",
    "<i class='fa-regular fa-arrow-right-long'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    // 820: {
    //   items: 1,
    // },
    820: {
      items: 2,
    },
  },
});

// Scroll Top
var btn = $(".go-to-top");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("go-to-top-show");
  } else {
    btn.removeClass("go-to-top-show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
// Scroll Top

// Offer Timer
function makeTimer() {
  var endTime = new Date("20 September 2024 12:00:00 GMT+01:00");
  endTime = Date.parse(endTime) / 1000;

  var now = new Date();
  now = Date.parse(now) / 1000;

  var timeLeft = endTime - now;

  var days = Math.floor(timeLeft / 86400);
  var hours = Math.floor((timeLeft - days * 86400) / 3600);
  var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
  var seconds = Math.floor(
    timeLeft - days * 86400 - hours * 3600 - minutes * 60
  );

  if (hours < "10") {
    hours = "0" + hours;
  }
  if (minutes < "10") {
    minutes = "0" + minutes;
  }
  if (seconds < "10") {
    seconds = "0" + seconds;
  }
  $("#days").html(days);
  $("#hours").html(hours);
  $("#minutes").html(minutes);
  $("#seconds").html(seconds);
}
setInterval(function () {
  makeTimer();
}, 1000);
// Offer Timer
