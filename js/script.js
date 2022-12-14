!(function () {
  for (
    var l = document.querySelectorAll(".my-accordion .menu"), e = 0;
    e < l.length;
    e++
  )
    l[e].addEventListener("click", n);
  function n() {
    for (
      var e = document.querySelectorAll(".my-accordion .panel"), n = 0;
      n < e.length;
      n++
    )
      e[n].className = "panel close";
    if (-1 == this.className.indexOf("active")) {
      for (n = 0; n < l.length; n++) l[n].className = "menu";
      (this.className = "menu active"),
        (this.nextElementSibling.className = "panel open");
    } else for (n = 0; n < l.length; n++) l[n].className = "menu";
  }
})();

// declare DOM elements
let drawer = document.getElementById("drawer");
let modalStates = document.querySelectorAll(".modal-state");
let modalExpand = document.getElementById("modal-expanded");

//auto load modal
window.onload = setTimeout(() => {
  openDrawer();
}, 3000);

//Open drawer
function openDrawer() {
  drawer.classList.toggle("hidden");
}

//close drawer
function closeDrawer() {
  let drawer = document.getElementById("drawer");
  return drawer.classList.toggle("hidden");
}

// open carousel modal
function openModal() {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.toggle("hidden");
    if (modalExpand.classList.contains("hidden")) {
      modalExpand.classList.remove("hidden");
      modalExpand.classList.add("grid");
    }
  }
}

//close carousel modal
function closeModal() {
  for (var i = 0; i < modalStates.length; i++) {
    modalStates[i].classList.remove("hidden");
  }
  modalExpand.classList.add("hidden");
  modalExpand.classList.remove("grid");
}
