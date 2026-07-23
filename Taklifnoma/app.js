/* ==========================================
   ELEMENTS
========================================== */

const intro = document.getElementById("intro");
const openBtn = document.getElementById("openInvitation");
const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const scrollTop = document.getElementById("scrollTop");

/* ==========================================
   INTRO
========================================== */

document.body.style.overflow = "hidden";

openBtn.addEventListener("click", () => {

    intro.classList.add("hide");

    document.body.style.overflow = "auto";

    bgMusic.currentTime = 25;

    bgMusic.play().catch(()=>{});

});

/* ==========================================
   MUSIC
========================================== */

musicBtn.addEventListener("click",()=>{

    if(bgMusic.paused){

        bgMusic.play();

        musicBtn.innerHTML =
        '<i class="fa-solid fa-volume-high"></i>';

        musicBtn.classList.add("playing");

    }else{

        bgMusic.pause();

        musicBtn.innerHTML =
        '<i class="fa-solid fa-volume-xmark"></i>';

        musicBtn.classList.remove("playing");

    }

});

/* ==========================================
   COUNTDOWN
========================================== */

const weddingDate =
new Date("2026-12-12T18:00:00").getTime();

const days=document.getElementById("days");
const hours=document.getElementById("hours");
const minutes=document.getElementById("minutes");
const seconds=document.getElementById("seconds");

function countdown(){

    const now=new Date().getTime();

    const distance=weddingDate-now;

    if(distance<0){

        days.textContent="00";
        hours.textContent="00";
        minutes.textContent="00";
        seconds.textContent="00";

        return;

    }

    days.textContent=Math.floor(distance/86400000);

    hours.textContent=String(
        Math.floor((distance%86400000)/3600000)
    ).padStart(2,"0");

    minutes.textContent=String(
        Math.floor((distance%3600000)/60000)
    ).padStart(2,"0");

    seconds.textContent=String(
        Math.floor((distance%60000)/1000)
    ).padStart(2,"0");

}

countdown();

setInterval(countdown,1000);

/* ==========================================
   FADE ANIMATION
========================================== */

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".fade-up").forEach(el=>{

    el.style.opacity="0";

    el.style.transform="translateY(60px)";

    el.style.transition=".8s";

    observer.observe(el);

});

/* ==========================================
   COPY CARD
========================================== */

document.querySelectorAll(".copyBtn").forEach(btn=>{

    btn.onclick=()=>{

        navigator.clipboard.writeText(btn.dataset.copy);

        btn.innerHTML="✅ Nusxalandi";

        setTimeout(()=>{

            btn.innerHTML='<i class="fa-regular fa-copy"></i> Nusxalash';

        },2000);

    };

});

/* ==========================================
   SCROLL TOP
========================================== */

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        scrollTop.classList.add("show");

    }else{

        scrollTop.classList.remove("show");

    }

});

/* ==========================================
   PARALLAX
========================================== */

const heroImage=document.querySelector(".hero-image");

window.addEventListener("scroll",()=>{

    if(heroImage){

        heroImage.style.transform=
        `translateY(${window.scrollY*0.15}px)`;

    }

});

/* ==========================================
   SAVE MUSIC
========================================== */

window.addEventListener("beforeunload",()=>{

    sessionStorage.setItem(
        "musicTime",
        bgMusic.currentTime
    );

});

window.addEventListener("load",()=>{

    const saved=sessionStorage.getItem("musicTime");

    if(saved){

        bgMusic.currentTime=Number(saved);

    }

});

/* ==========================================
   READY
========================================== */

console.log("Wedding Invitation Ready ❤️");