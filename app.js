let body=document.body;
let mode=document.querySelector(".mode");
let dmode=document.querySelector(".d-mode");
let lmode=document.querySelector(".l-mode");
let hero=document.querySelector(".hero-sec");
let border=document.querySelector(".border");
let about=document.querySelector(".about");
let projecth=document.querySelector(".project-h");
let exph=document.querySelector(".exp-h");
let protitle=document.querySelector(".section-title");
let contact=document.querySelector(".contact-sec");
let work=document.querySelector(".work");

//to enable darl mode and light mode 
lmode.addEventListener("click",()=>{
    body.style.backgroundColor="white"
    hero.style.backgroundColor="rgb(6,89,66)"
    contact.style.backgroundColor="rgb(6,89,66)"
    work.style.color="rgb(6,89,66)"
    body.style.color="black"
    hero.style.color="white"
     border.style.display=hidden;})

dmode.addEventListener("click",()=>{
    hero.style.backgroundColor="rgb(17,24,39)"
    body.style.backgroundColor="rgb(17,24,39)"
    body.style.color="white"
    hero.style.color="white"
    projecth.style.color="white"
    exph.style.color="white"
    border.style.display="block";
    contact.style.backgroundColor="rgb(17,24,39)"
    about.style.background = "linear-gradient(180deg, #00ff00, #004466)";
  about.style.webkitBackgroundClip = "text";
  about.style.webkitTextFillColor = "transparent";
  protitle.style.background = "linear-gradient(180deg, #00ff00, #004466)";
  protitle.style.webkitBackgroundClip = "text";
  protitle.style.webkitTextFillColor = "transparent";
  work.style.background = "linear-gradient(180deg, #00ff00, #004466)";
  work.style.webkitBackgroundClip = "text";
  work.style.webkitTextFillColor = "transparent";
});

//applying links to buttons

let aboutb=document.querySelector(".about-b");
let aboutd=document.querySelector(".about-d");

aboutb.addEventListener("click", ()=>{
  aboutd.scrollIntoView({
    behaviour:"smooth"
  });
})

let projectb=document.querySelector(".project-b");
let projectsec=document.querySelector(".projects-section");

projectb.addEventListener("click", ()=>{
  projectsec.scrollIntoView({
    behaviour:"smooth"
  })
})

let contactb=document.querySelector(".contact-b");
let contactsec=document.querySelector(".contact-sec");

contactb.addEventListener("click", ()=>{
  contactsec.scrollIntoView({
    behaviour:"smooth"
  })
})

let viewb=document.querySelector(".viewb");

viewb.addEventListener("click", ()=>{
  projectsec.scrollIntoView({
    behaviour:"smooth"
  })
})

let touchb=document.querySelector(".touchb");

touchb.addEventListener("click", ()=>{
  contactsec.scrollIntoView({
    behaviour:"smooth"
  })
})

//contact info

let email="ridhimagehlot7@gmail.com"
let linkin="https://www.linkedin.com/in/ridhima-gehlot-776152370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
let github="https://github.com/ridhima-gehlot"

let myemail=document.querySelector(".my-email");
let myin=document.querySelector(".my-in");
let mygithub=document.querySelector(".my-github");


myin.href=linkin;
myin.target="_blank";
mygithub.href=github;
mygithub.target="_blank";

myemail.href = `mailto:${email}`;

//

