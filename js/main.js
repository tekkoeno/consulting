// Модальное окно 

let btns = document.querySelectorAll("*[data-modal-btn]");
let body = document.querySelector("body");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        let name = btns[i].getAttribute('data-modal-btn');
        let modal = document.querySelector("[data-modal-window='"+name+"']");
        modal.style.opacity = "1";
        modal.style.visibility = "visible";
        modal.style.overflowX = "visible";
        body.classList.add("disable__scroll");
        
           
        
        let close = modal.querySelector(".popup__close");
        close.addEventListener("click", function(){
            modal.style.opacity = "0";
            modal.style.visibility = "hidden";
            modal.style.overflowX = "hidden";
            body.classList.remove("disable__scroll");
            
        });
        
    });
};

// Модальное окно видео

let btnsVideo = document.querySelectorAll("*[data-video-btn]");
let bodyVideo = document.querySelector("body");

for (let i = 0; i < btnsVideo.length; i++) {
    btnsVideo[i].addEventListener("click", function(){
        let nameVideo = btnsVideo[i].getAttribute('data-video-btn');
        let modalVideo = document.querySelector("[data-modal-video='"+nameVideo+"']");
        modalVideo.style.opacity = "1";
        modalVideo.style.visibility = "visible";
        modalVideo.style.overflowX = "visible";
        bodyVideo.classList.add("disable__scroll");
        
           
        
        let closeVideo = modalVideo.querySelector(".video__close");
        closeVideo.addEventListener("click", function(){
            modalVideo.style.opacity = "0";
            modalVideo.style.visibility = "hidden";
            modalVideo.style.overflowX = "hidden";
            bodyVideo.classList.remove("disable__scroll");
            
        });
        
    });
};