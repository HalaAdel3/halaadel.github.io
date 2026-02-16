// Loader
window.addEventListener("load",()=>{
document.querySelector(".loader").style.display="none";
});

// Counter
const counters=document.querySelectorAll('.counter');
counters.forEach(counter=>{
const update=()=>{
const target=+counter.getAttribute('data-target');
const count=+counter.innerText;
const inc=target/100;

if(count<target){
counter.innerText=Math.ceil(count+inc);
setTimeout(update,20);
}else{
counter.innerText=target;
}
};
update();
});

// Fade On Scroll
const fades=document.querySelectorAll(".fade");
window.addEventListener("scroll",()=>{
fades.forEach(fade=>{
const top=fade.getBoundingClientRect().top;
if(top<window.innerHeight-100){
fade.classList.add("show");
}
});
});

// Custom Cursor
const cursor=document.querySelector('.cursor');
document.addEventListener('mousemove',e=>{
cursor.style.left=e.clientX+'px';
cursor.style.top=e.clientY+'px';
});
