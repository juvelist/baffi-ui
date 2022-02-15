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


