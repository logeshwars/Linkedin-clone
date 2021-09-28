export default window.onscroll = function () {
  scrollFunction2();
  scrollFunction();
};
function scrollFunction() {
  let sticky = document.getElementById("sticky");
  if (document.documentElement.scrollTop > 370) {
    sticky.style.position = "sticky";
    sticky.style.top = "70px";
  }
}
function scrollFunction2() {
  let sticky2 = document.getElementById("sticky2");
  if (document.documentElement.scrollTop > 370) {
    sticky2.style.position = "sticky";
    sticky2.style.top = "70px";
  }
}
