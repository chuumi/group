function showPopup(popupId) {
  document.getElementById(popupId).style.display = "block";
}

function hidePopup(popupId) {
  document.getElementById(popupId).style.display = "none";
}

function togglePopup(id) {
  const popup = document.getElementById(id);
  if (popup.style.display === "block") {
    popup.style.display = "none";
  } else {
    popup.style.display = "block";
  }
}

function addPopupListeners(popupId, closeBtnClass, okBtnClass) {
  const closeButton = document.querySelector(`.${closeBtnClass}`);
  const okButton = document.querySelector(`.${okBtnClass}`);
  
  if (closeButton) {
    closeButton.addEventListener("click", function () {
      hidePopup(popupId);
    });
  }
  
  if (okButton) {
    okButton.addEventListener("click", function () {
      hidePopup(popupId);
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  addPopupListeners("lpop", "lclose", "lok");
  addPopupListeners("bpop", "bclose", "bok");
  addPopupListeners("dpop", "dclose", "dok");
  addPopupListeners("ipop", "iclose", "iok");
  addPopupListeners("mpop", "mclose", "mok");
  addPopupListeners("kpop", "kclose", "kok");
  addPopupListeners("apop", "aclose", "aok");
  addPopupListeners("brpop", "brclose", "brok");
  // Assuming the "free" class is used for multiple popups
  // If not, adjust accordingly
  addPopupListeners("free", "free", "free");
});


let date = new Date();

// setInterval(function(){
//     document.querySelector('.time').innerText = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
// }, 1000);

// document.addEventListener("DOMContentLoaded", function() {
//   let audio = document.getElementById("audio");
//   let range = document.getElementById("range26");
//   range.addEventListener("input", function() {
//     audio.volume = range.value / 100;
//   });
// });

if (window.matchMedia("(max-width: 767px)").matches) {
  console.log("This is a mobile device, the code will not run");
}

document.addEventListener("DOMContentLoaded", function() {

  $(document).ready(function(){
    $('.window-action-button.main').click(function(){
        $('#enter').hide();
        $('#main').show();
        $('#audio')[0].play();
    });
  });
});

// document.addEventListener("DOMContentLoaded", function() {
//   const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
//   if (isMobile) {
//     document.getElementById("mobile-notice").innerHTML = "(View on PC for a better experience)";
//   }
// });

