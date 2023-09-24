const togle = document.querySelector("#togle-btn");
const nav = document.querySelector("#nav");
const noticeBtn = document.querySelector("#notice-btn");
const notice = document.querySelector("#notice");
const off = document.querySelector("#off");
const overLay = document.querySelector("#over-lay");
const welcomemessage = document.querySelector(".welcome-message");
const startlearning = document.querySelector("#start-learning");



togle.addEventListener('click', () => {

    nav.classList.toggle("active");
})




noticeBtn.addEventListener('click', () => {
    
    notice.classList.add("active-notice");

})



off.addEventListener('click', () => {
    
    notice.classList.remove("active-notice");

})

window.addEventListener("load", () => {


    setTimeout(function () {
        
        welcomemessage.classList.add("active");
        overLay.classList.add("over-lay");

    }, 3000);

});

welcomemessage.addEventListener('click', () => {
    
    welcomemessage.classList.remove("active");
    overLay.classList.remove("over-lay");

})