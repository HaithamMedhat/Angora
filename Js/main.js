let about = $("#About-us").offset().top;
$(window).scroll(function () {
  let wScroll = $(window).scrollTop();
  if (wScroll >= about - 60) {
    $("#Navbar").css("backgroundColor", "rgba(0,0,0,.5)");
    $("#arrow").css("display", "block");
  } else {
    $("#Navbar").css("backgroundColor", "transparent");
    $("#arrow").css("display", "none");
  }
});
let changeColor = $("#change-color").outerWidth();
$(document).ready(() => {
  $("#optionBox").animate({ right: `-${changeColor}` });
  $("#loading div").fadeOut(2000, () => {
    $("#loading").fadeOut(2000, () => {
      $("#loading div").empty();
      $("body").css("overflow-y", "auto");
    });
  });
});
$("#arrow").click(() => {
  $(window).scrollTop(0);
});

let colorItem = $(".color-item");
colorItem.eq(0).css("backgroundColor", "#cc9");
colorItem.eq(1).css("backgroundColor", "lightgreen");
colorItem.eq(2).css("backgroundColor", "#f25454");
colorItem.eq(3).css("backgroundColor", "#20c997");
colorItem.eq(4).css("backgroundColor", "#e284b3");

$("#toggleBtn").click(() => {
  if ($("#optionBox").css("right") == "0px") {
    $("#optionBox").animate({ right: `-${changeColor}` }, 1000);
  } else {
    $("#optionBox").animate({ right: "0" }, 1000);
  }
});

$('.color-item').click((e)=>{
  let color =  $(e.target).css('backgroundColor');
  $('h1').css('color',`${color}`)
})


//  slick slider

let $slickEl = $('.center');
let  $st = $('.pagination');
$slickEl.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  let i = (currentSlide ? currentSlide : 0) + 1;
  $st.text(i + ' of ' + slick.slideCount);
});


$slickEl.slick({
  centerMode: true,
  centerPadding: '100px',
  slidesToShow: 2,
  focusOnSelect: true,
  dots: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});