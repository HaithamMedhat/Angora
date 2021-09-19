window.onscroll = function() {scrollFunction()};
let x =  document.getElementById("Navbar");
console.log(x);
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        x.style.cssText="background-color:rgba(0,0,0,.5)";
  } else {
    x.style.cssText=" background-color: transparent";
  }
}