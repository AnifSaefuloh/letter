let spinner = document.getElementById("spinner");
let buttonOpen = document.getElementById("buttonOpen");
let frontMail = document.getElementById("frontMail");
let spin = document.getElementsByClassName("spin");
let open = document.getElementById("open");
let topMailOpened = document.getElementById("topMailOpened");
let mailContent = document.getElementById("mailContent");
let leftMailId = document.getElementById("leftMailId");
let rightMailId = document.getElementById("rightMailId");
let bottomMailId = document.getElementById("bottomMailId");
let bottomHidden = document.getElementById("bottomHidden");
let sender = document.getElementById("sender");

function rotate() {
  spinner.classList.add("spin");
  spinner.classList.remove("spinBack");
  localStorage.setItem("side", "back");
  setTimeout(timer, 875);
  function timer() {
    frontMail.style.display = "none";
    console.log("back");
    if (localStorage.getItem("status") == "open") {
      buttonOpen.style.display = "none ";
    } else {
      buttonOpen.style.display = "block ";
    }
  }
}

function rotateBack() {
  spinner.classList.add("spinBack");
  spinner.classList.remove("spin");
  localStorage.removeItem("side", "back");
  setTimeout(myTimer, 875);
  function myTimer() {
    frontMail.style.display = "block";
    console.log("front");
  }
}

function openMail() {
  open.classList.add("openMail");
  console.log("open");
  setTimeout(myTimer, 3000);
  function myTimer() {
    open.style.display = "none";
    topMailOpened.style.display = "block";
    console.log("opened");
  }
  setTimeout(timerOut, 500);
  function timerOut() {
    buttonOpen.style.display = "none";
  }
  setTimeout(timer, 2000);
  function timer() {
    localStorage.setItem("status", "open");
    topMailOpened.style.display = "block";
    if (localStorage.getItem("status") == "open") {
      topMailOpened.style.display = "block";
      buttonOpen.style.display = "none ";
      window.addEventListener("scroll", function () {
        let value = window.scrollY;
        if (value <= 240) {
          mailContent.style.top = value * 0.5 + "px";
          frontMail.style.top = value * 2 + "px";
          topMailOpened.style.top = value * 2 + -75 + "px";
          leftMailId.style.top = value * 2 + "px";
          rightMailId.style.top = value * 2 + "px";
          sender.style.bottom = value * -2 + 60 + "px";
          bottomMailId.style.bottom = value * -2 + "px";
          bottomHidden.style.top = value * 2 + 445 + "px";
        }
      });
    }
  }
}

function closeMail() {
  topMailOpened.classList.toggle("closeMail");
}

if (location.reload) {
  localStorage.clear();
}
