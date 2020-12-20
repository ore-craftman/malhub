// ! Navabar
let displayMenu = document.getElementById("displayMenu");
let menuContent = document.getElementById("menuContent");
let menuIcon = document.getElementById("closeMenu");
let navContainer= document.getElementById("nav-container");
let pasteYear= document.getElementById("currentYear");

displayMenu.addEventListener("click", showContent)
function showContent(){
    displayMenu.classList.add("hidden")
    menuContent.classList.remove("hidden")
    menuContent.classList.add("block")
    menuContent.classList.add("bg-baseLight")
    menuContent.classList.add("my-3")
    menuContent.classList.add("rounded")
    menuIcon.classList.remove("hidden")
    menuIcon.classList.add("block")
    navContainer.classList.remove("border-b-2")
}

closeMenu.addEventListener("click", menuClosed);
function menuClosed(){
    menuContent.classList.remove("block")
    menuContent.classList.add("hidden")
    displayMenu.classList.remove("hidden")
    menuIcon.classList.add("hidden")
    navContainer.classList.add("border-b-2")
}

window.addEventListener("scroll", ()=>{
    if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
        navContainer.classList.add("fixed");
        navContainer.classList.add("top-0");
        navContainer.classList.remove("border-b-2");
        navContainer.classList.add("bg-navLight");
    }else{
        navContainer.classList.remove("fixed");
        navContainer.classList.remove("top-0");
        navContainer.classList.add("border-b-2");
        navContainer.classList.remove("bg-navLight");
    };
});

// ! AOS
AOS.init();

// ! Get Year 
let fullDate = new Date();
let year = fullDate.getFullYear();
pasteYear.innerHTML = year;

// ! Contact Form
let form = document.getElementById("contact-form");
let submit = document.getElementById("submit");
let status = document.getElementById("status");

function success(){
    form.classList.add("hidden");
    status.innerHTML = "success... We'll get in touch shortly";
    status.classList.remove("hidden");
    setTimeout(() => {
        form.reset();
        form.classList.remove("hidden");
        status.classList.add("hidden");
    }, 1000);
}

function error() {
    status.innerHTML = "Oops! There was a problem.";
    status.classList.remove("hidden")
    status.classList.remove("bg-green-500")
    status.classList.add("bg-red-400")
  }

form.addEventListener("submit", function(ev){
    ev.preventDefault();
    let data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
});

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
}