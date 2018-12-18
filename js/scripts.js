var button = document.querySelector(".button-feedback");
var popup = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".overlay");
var close = document.querySelector(".modal-close");
var form = popup.querySelector("form");
var username = document.getElementById("feedback-username");
var email = document.getElementById("feedback-email");

var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("username");
  } catch (err) {
    isStorageSupport = false;
  }

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("overlay-show");

  if (storage) {
    username.value = storage;
    email.focus();
  } else {
    username.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  overlay.classList.remove("overlay-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!username.value || !email.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("username", username.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        overlay.classList.remove("overlay-show");
      }
    }
  });
