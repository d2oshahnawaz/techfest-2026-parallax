// ==========================
// Scroll Progress Bar
// ==========================

const progress = document.getElementById("progress");

window.addEventListener("scroll", () => {

const scrollTop =
document.documentElement.scrollTop;

const scrollHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const percent =
(scrollTop / scrollHeight) * 100;

progress.style.width = percent + "%";

});

// ==========================
// Navbar Active Link
// ==========================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop =
section.offsetTop - 150;

if (pageYOffset >= sectionTop) {

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if (
link.getAttribute("href") === "#" + current
){

link.classList.add("active");

}

});

});

// ==========================
// Fade Animation
// ==========================

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

document
.querySelectorAll(".card,.box,.feature,.floating")
.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

// ==========================
// Mouse Parallax
// ==========================

const hero =
document.querySelector(".hero");

hero.addEventListener("mousemove",(e)=>{

const x =
(e.clientX/window.innerWidth -0.5)*20;

const y =
(e.clientY/window.innerHeight -0.5)*20;

hero.style.backgroundPosition =
`${50+x}% ${50+y}%`;

});

// ==========================
// Floating Effect
// ==========================

const floating =
document.querySelectorAll(".floating");

window.addEventListener("scroll",()=>{

const value =
window.scrollY;

floating.forEach(item=>{

item.style.transform =
`translateY(${value*0.08}px)`;

});

});

// ==========================
// Smooth Reveal
// ==========================

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

// ==========================
// Button Ripple Effect
// ==========================

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const circle =
document.createElement("span");

const diameter =
Math.max(this.clientWidth,this.clientHeight);

circle.style.width =
circle.style.height =
diameter+"px";

circle.style.left =
e.clientX-
this.getBoundingClientRect().left-
diameter/2+"px";

circle.style.top =
e.clientY-
this.getBoundingClientRect().top-
diameter/2+"px";

circle.classList.add("ripple");

const ripple =
this.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

this.appendChild(circle);

});

});

// ==========================
// Console Message
// ==========================

console.log(
"🚀 Techfest Interactive Parallax Website Loaded Successfully"
);
