/* Open the sidenav */
function openSideNav() {
  document.getElementById("mySideNav").style.width = "20%";
  document.getElementById("openSideNavBtn").style.opacity = "0";
}

/* Close/hide the sidenav */
function closeSideNav() {
  document.getElementById("mySideNav").style.width = "0";
  document.getElementById("openSideNavBtn").style.opacity = "1";
}