let logIn = document.getElementById('logIn');
let loginWrapper = document.getElementById('loginWrapper');
let loginSection = document.getElementById('loginSection');
let sidebarLogin = document.getElementById('sidebarLogin');
let sidebarTooltip = document.getElementById('sidebarTooltip');
let mediaLibSelect = document.getElementById('mediaLibSelect');

function toggleLoginTooltip() {
  sidebarTooltip.classList.toggle('active');
}

function openLoginSection() {
  loginWrapper.classList.add('show');
  loginSection.classList.add('show');
  document.body.classList.add('scroll-off');
}

function closeLoginSection(e) {
  if(e.target !== e.currentTarget) return;
  loginWrapper.classList.remove('show');
  loginSection.classList.remove('show');
  document.body.classList.remove('scroll-off');
}

logIn.addEventListener("click", openLoginSection);
loginWrapper.addEventListener("click", closeLoginSection);

sidebarLogin.addEventListener("click", toggleLoginTooltip);

mediaLibSelect.addEventListener("click", function (){
  this.classList.toggle('active');
});


// audio
let mediaLibAudio = document.getElementById('mediaLibAudio');
let mediaLibAudioEl = document.getElementById('mediaLibAudioEl');

function playAudio() {
  if (mediaLibAudioEl.paused) {
    mediaLibAudio.classList.add('play');
    mediaLibAudioEl.play();
  } else {
    mediaLibAudio.classList.remove('play');
    mediaLibAudioEl.pause();
    mediaLibAudioEl.currentTime = 0;
  }
}
mediaLibAudio.addEventListener("click", playAudio);

// video
let mediaLibVideo = document.getElementById('mediaLibVideo');
let mediaLibVideoEl = document.getElementById('mediaLibVideoEl');

function playVideo() {
  if (mediaLibVideoEl.paused) {
    mediaLibVideo.classList.add('play');
    mediaLibVideoEl.play();
  } else {
    mediaLibVideo.classList.remove('play');
    mediaLibVideoEl.pause();
    mediaLibVideoEl.currentTime = 0;
  }
}
mediaLibVideo.addEventListener("click", playVideo);


















