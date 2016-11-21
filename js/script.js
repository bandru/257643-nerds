var link = document.querySelector(".write");
var popup = document.querySelector(".write-us");
var close = popup.querySelector(".close-write-us");
var myname = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");
var maps = document.querySelector(".map-frame");
window.onload = function checkLoad() {
  maps.classList.add("show-iframe");
};
link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("write-us-show");
});
close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("write-us-show");
  myname.classList.remove("error");
  email.classList.remove("error");
  text.classList.remove("error");
});
myname.addEventListener("click", function(event) {
  myname.classList.remove("error");
});
email.addEventListener("click", function(event) {
  email.classList.remove("error");
});
text.addEventListener("click", function(event) {
  text.classList.remove("error");
});
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("write-us-show")) {
      popup.classList.remove("write-us-show");
      myname.classList.remove("error");
      email.classList.remove("error");
      text.classList.remove("error");
    }
  }
});
popup.addEventListener("submit", function(event) {
  if (!myname.value || !email.value || !text.value) {
    event.preventDefault();
    console.log("Поля формы при отправке не могут быть пустыми");
    if (!myname.value) {
      myname.classList.add("error");
    }
    if (!email.value) {
      email.classList.add("error");
    }
    if (!text.value) {
      text.classList.add("error");
    }
  } else {
    localStorage.setItem("myname", myname.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("text", text.value);
  }
});
